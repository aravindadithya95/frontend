/* This component is show when the tasks is to create the problem. It will show
* the assignment description, the rubric, the instructions, and a text area. The
* component will be able to make a PUT request to save the data for later, a GET
* request to get the initial data, and a POST request for final submission.
*/
import React from 'react';
import request from 'request';
import ErrorComponent from './errorComponent';
import VersionView from './individualFieldVersionsComponent';
import Checkbox from '../shared/checkbox';
import Select from 'react-select';
import FileUpload from '../shared/fileUpload';
import Rater from 'react-rater';
import {RadioGroup, Radio} from 'react-radio-group';
import { Editor } from 'react-draft-wysiwyg';
import {stateToHTML} from 'draft-js-export-html';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {TASK_TYPES, TASK_TYPE_TEXT} from '../../server/utils/constants'; //contains constants and their values

class SuperComponent extends React.Component {
    constructor (props){
        super(props);
    /*
    PROPS:  -TaskData
            -TaskActivityFields (TaskAcitivtyData)
            -ComponentTitle
            -Instructions
            -TaskStatus
            -Rubric
    */

        this.state = {
            TaskActivityFields: {
                field_titles: []
            },
            TaskData: [],
            TaskResponse: {},
            ShowRubric: false,
            FieldRubrics: [],
            InputError: false,
            TaskStatus: '',
            ShowContent: true,
            Error: false,
            SaveSuccess: false,
            SubmitSuccess: false,
            NumberFilesUploaded: 0,
            PassFailValue: null,
            DisputeStatus: null,
            UploadOptions: {
                baseUrl: `${this.props.apiUrl}/api/upload/profile-picture`,
                multiple: true,
                numberLimit: 2,
                accept: 'image/*',
                fileFieldName(file) {
                    return file.rawID;
                },
                chooseAndUpload: true,
                wrapperDisplay: 'block'
            }
        };
    }
    updateNumberFilesUploaded(newNum){
        this.setState({
            NumberFilesUploaded: newNum
        });
    }

    componentWillMount(){
        let tdata = this.props.TaskData;
        let tAdata = this.props.TaskActivityFields;
        //checks to see if either data prop is null
        console.log(tdata);
        if(tdata === null || tdata === undefined || tdata == 'null' || tdata == '[{}]'){
            tdata = [new Object()];
        }
        if(!tAdata){
            this.setState({Error: true});
            return;
        }

        tdata = tdata.map((data) => {
            if(data.constructor === Object){
                return data;
            }else{
                return JSON.parse(data);
            }
        });
        console.log('After map',tdata);

        let latestVersion = tdata.pop();

        //checks to see if     task activity data is empty. This would only be caused by an error
        if(Object.keys(tAdata).length === 0 && tAdata.constructor === Object){
            this.setState({Error: true});
            return;
        }
        //if task data is empty, it fills it up with the TA's fields
        if(Object.keys(latestVersion).length === 0 && latestVersion.constructor === Object || latestVersion == null){
            latestVersion.number_of_fields = tAdata.number_of_fields;
            for(let i = 0; i < tAdata.number_of_fields; i++){

                latestVersion[i] = tAdata[i].default_content;
            }
            /*tAdata.field_titles.forEach(function(title){
              tdata[title] = tAdata[title].default_content;
            });*/
        }
        //if no TaskStatus is given, assume complete
        let tstat = (this.props.TaskStatus != null) ? this.props.TaskStatus : 'Incomplete';
        let disputeStat = (this.props.Type == TASK_TYPES.DISPUTE) ? false : null;
        this.setState({
            TaskData: tdata,
            TaskActivityFields: tAdata,
            TaskResponse: latestVersion,
            TaskStatus: tstat,
            DisputeStatus: disputeStat
        });
    }


    isValidData(){
      //go through all of TaskData's fields to check if null. If a field requires_justification,
      // also check the justification field
      //returns false if any field is null and true if all fields are filled
        for(let i = 0; i < this.state.TaskActivityFields.number_of_fields; i++){
            if(this.state.TaskActivityFields[i].requires_justification){
                if((this.state.TaskResponse[i][0] == null || this.state.TaskResponse[i][0] == '') || (this.state.TaskResponse[i][1] == null || this.state.TaskResponse[i][1] == '')){
                    return false;
                }
            }
            else{
                if(this.state.TaskResponse[i][0] == null || this.state.TaskResponse[i][0] == ''){
                    return false;
                }
            }

        }
        console.log(this.props.FileUpload);
        if(this.props.FileUpload.mandatory > 0){
            if(this.state.NumberFilesUploaded >= this.props.FileUpload.mandatory){
                return true;
            }
            else{
                return false;
            }
        }

        return true;
    }

    saveData(e){
      // function makes a POST call and sends in the state variables which hold the user's input
        e.preventDefault(); //standard JavaScript behavior
      //if task is complete, don't allow saving new data
        if(this.state.TaskStatus == 'complete'){
            return ;
        }


        const options = {
            method: 'POST',
            uri: this.props.apiUrl + '/api/taskInstanceTemplate/create/save',
            body: {
                taskInstanceid: this.props.TaskID,
                userid: this.props.UserID,
                taskInstanceData: this.state.TaskResponse
            },
            json: true
        };

        request(options, (err, res, body) => {
            if(res.statusCode != 200){
                this.setState({InputError: true});
                return;
            }
            else{
                this.setState({
                    SaveSuccess: true,
                    InputError: false
                });
                return;
            }
        });

    }

    onFileUpload(){
        const options = {
            method: 'POST',
            uri: this.props.apiUrl + '/api/upload/profile-picture'
        };

    }

    submitData(e){
        e.preventDefault();
      //don't allow submit if task is complete
        if(this.state.TaskStatus == 'complete'){
            return ;
        }
      //check if input is valid
        let validData = this.isValidData();

        if(validData){
            const options = {
                method: 'POST',
                uri: this.props.apiUrl + '/api/taskInstanceTemplate/create/submit',
                body: {
                    taskInstanceid: this.props.TaskID,
                    userid: this.props.UserID,
                    taskInstanceData: this.state.TaskResponse
                },
                json: true
            };
            request(options, (err, res, body) => {

                if(res.statusCode != 200){
                    this.setState({InputError: true});
                    return;
                }
                else{
                    this.setState({
                        SubmitSuccess: true,
                        InputError: false,
                        TaskStatus: 'Complete'
                    });
                    return;
                }
            });
        }

        else{
            this.setState({
                InputError: true
            });
            return;
        }

    }


    // modalToggle(){ //not used
    //   //shows or hides error message popup(modal)
    //   this.setState({InputError:false})
    // }

    toggleRubric(){
      //shows or hides the task activity rubric
        const bool = this.state.ShowRubric ? false : true;

        this.setState({
            ShowRubric: bool
        });
    }

    toggleContent(){
      //shows or hides the component's section-content for accordian view
        const bool = this.state.ShowContent ? false : true;

        this.setState({
            ShowContent: bool
        });
    }

    handleContentChange(index,event) {
      //updates task data with new user input in grading fields
        if(this.state.TaskActivityFields[index] != null && (this.state.TaskActivityFields[index].field_type == 'numeric' || this.state.TaskActivityFields[index].field_type == 'assessment' || this.state.TaskActivityFields[index].field_type == 'self assessment')){
            if(isNaN(event.target.value)){
                return;
            }
            if(event.target.value < parseInt(this.state.TaskActivityFields[index].numeric_min) || event.target.value > parseInt(this.state.TaskActivityFields[index].numeric_max)){
                return;
            }
        }
        if(typeof(event.target.value) === 'string' && event.target.value.length > 45000){ // checks to see if the input is a reasonable length
            return;
        }
        let newTaskResponse = this.state.TaskResponse;
        newTaskResponse[index][0] = event.target.value;
        this.setState({
            TaskResponse: newTaskResponse
        });
    }

    handleJustificationChange(index,event) {
        if(event.target.value.length > 45000){ //checks to see if input is reasosnable length, makes sure browser doesn't crash on long input
            return;
        }
        //updates task data with new user input in justification fields
        let newTaskResponse = this.state.TaskResponse;
        newTaskResponse[index][1] = event.target.value;

        this.setState({
            TaskResponse: newTaskResponse
        });
    }

    handleStarChange(index,value){
      //updates rating grade in taskdata
        let newResponse = this.state.TaskResponse;
        newResponse[index][0] = value.rating;

        this.setState({
            TaskResponse: newResponse
        });

    }

    toggleFieldRubric(index){
      //shows or hides the indivual fields' rubrics
        if(this.state.FieldRubrics[index] === []){
            let newFieldRubrics = this.state.FieldRubrics;
            newFieldRubrics[index] = true;
            this.setState({
                FieldRubrics: newFieldRubrics
            });
        }
        else{
            let bool = this.state.FieldRubrics[index] ? false: true;
            let newFieldRubrics = this.state.FieldRubrics;
            newFieldRubrics[index] = bool;
            this.setState({
                FieldRubrics: newFieldRubrics
            });
        }
    }

    willDispute(){
        this.setState({
            DisputeStatus: true
        });
    }

    willNotDispute(){
        const options = {
            method: 'GET',
            uri: `${this.props.apiUrl}/api/skipDispute/${this.props.TaskID}`,
            qs: {
                userid: this.props.UserID
            },
            json: true
        };

        request(options, (err,res,body) => {
            console.log(err,res,body);
        });

      //window.location.href= "/dashboard"; //uncomment when finished w/ skipDispute
    }

    render(){

        let content= null;
        let infoMessage = null;
        let TA_rubric = null;
        let disputeButton = null;
        let TA_instructions = null;
        let formButtons =  null;
        let fileUploadView = null;
        let indexer =  'content';
        let TA_rubricButtonText = this.state.ShowRubric ? this.props.Strings.HideTaskRubric : this.props.Strings.ShowTaskRubric;
          //if invalid data, shows error message

        if(this.state.Error){
            return(<ErrorComponent />);
        }

        if(this.state.InputError){
            infoMessage = (<span style={{backgroundColor: '#ed5565', color: 'white',padding: '10px', display: 'block',margin: '20px 10px', textSize:'16px', textAlign: 'center', boxShadow: '0 1px 10px #ed5565'}}>{this.props.Strings.InputErrorMessage}</span>);
            //old Modal style:
            // infoMessage = (<Modal title="Submit Error"  close={this.modalToggle.bind(this)}>Please check your work and try again</Modal>);
        }

        if(this.state.SaveSuccess){
            infoMessage = (<span onClick={()=> {this.setState({SaveSuccess: false});}} style={{backgroundColor: '#00AB8D', color: 'white',padding: '10px', display: 'block',margin: '20px 10px', textSize:'16px', textAlign: 'center', boxShadow: '0 1px 10px rgb(0, 171, 141)'}}>{this.props.Strings.SaveSuccessMessage}</span>);
        }
        if(this.state.SubmitSuccess){
            infoMessage = (<span  onClick={()=> {this.setState({SubmitSuccess: false});}} style={{backgroundColor: '#00AB8D', color: 'white',padding: '10px', display: 'block',margin: '20px 10px', textSize:'16px', textAlign: 'center', boxShadow: '0 1px 10px rgb(0, 171, 141)'}}>{this.props.Strings.SubmitSuccessMessage}</span>);
        }

        if(this.state.TaskStatus != 'Complete'){

            formButtons = (<div>
              <br />
              <button type="submit" action="#" className="divider" onClick={this.submitData.bind(this)}><i className="fa fa-check"></i>{this.props.Strings.Submit}</button>
                <button type="button" className="divider" onClick={this.saveData.bind(this)}>{this.props.Strings.SaveForLater}</button>
              </div>);

        }

        if(this.state.DisputeStatus === false){
            return(
              <div className="">
                {infoMessage}
                <div  className="section card-1">
                  <div className="placeholder"></div>
                  <div onClick={this.toggleContent.bind(this)}>
                    <h2 className="title">{this.props.ComponentTitle} </h2>
                  </div>
                  <div className="section-content">
                    <button className="dispute-buttons" onClick={this.willDispute.bind(this)}>{this.props.Strings.WillDispute}</button>
                    <button className="dispute-buttons" onClick={this.willNotDispute.bind(this)}>{this.props.Strings.WillNotDispute}</button>
                  </div>
                </div>
              </div>);
        }


        if(this.props.Rubric != '' && this.props.Rubric != null){ //if no Rubric
            let TA_rubric_content = null;
            if(this.state.ShowRubric){
                TA_rubric_content = (
                  <div>
                    <div className="boldfaces">{this.props.Strings.TaskRubric}</div><div className="regular-text rubric" key={'rubric'} dangerouslySetInnerHTML={{ __html: this.props.Rubric}}></div>
                  </div>
                  );

            }

            TA_rubric = ( <div key={'rub'}>
                  <button type="button" className="in-line" onClick={this.toggleRubric.bind(this)}  key={'button'}> {TA_rubricButtonText}</button>
                  <ReactCSSTransitionGroup  transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionName="example" transitionAppear={false} transitionEnter={true} transitionLeave={true}>
                  {TA_rubric_content}
                </ReactCSSTransitionGroup>

                </div>);
        }

        if(this.props.FileUpload !== null && this.props.FileUpload.mandatory !== 0){
            fileUploadView = (
            <div>
              <FileUpload UserID={this.props.UserID} apiUrl={this.props.apiUrl} changeNumber={this.updateNumberFilesUploaded.bind(this)} MinUploads={this.props.FileUpload.mandatory} MaxUploads={this.props.FileUpload.mandatory + this.props.FileUpload.optional}/>
            </div>
          );
        }

        if(this.props.Instructions != null && this.props.Instructions != '' ){
            TA_instructions = (
              <div >
                  <div className="boldfaces">{this.props.Strings.TaskInstructions}</div><div className="regular-text instructions" dangerouslySetInnerHTML={{ __html: this.props.Instructions}}>
                    </div>

            </div>);
        }
          //creating all input fields here
        let fields = this.state.TaskActivityFields.field_titles.map(function(title, idx){
            let rubricView = null;
            let justification = null;
            let instructions = null;
            let fieldTitleText = '';
            let fieldTitle = null;
            let completeFieldView = null;
            const latestVersion = this.state.TaskResponse;

            if(latestVersion[idx] == null){
                latestVersion[idx] = [this.state.TaskActivityFields[idx].default_content[0], this.state.TaskActivityFields[idx].default_content[1]];
            }
            if(this.state.TaskActivityFields[idx].show_title){ //shoudl the title be displayed or not
                if(this.state.TaskActivityFields[idx].assessment_type != null){ //add "Grade" to assess fields to make pretty
                    fieldTitleText = title +' ' + this.props.Strings.Grade;
                }
                else{
                    fieldTitleText = title;
                }

                fieldTitle = (<div>
                  <div key={idx + 600}>{fieldTitleText}</div>
                </div>);
            }

            if(this.state.TaskActivityFields[idx].rubric != ''){ //if Rubric is empty, don't show anything
                let rubric_content = null;
                let buttonTextHelper = this.state.TaskActivityFields[idx].show_title ? title : '';
                let rubricButtonText = this.state.FieldRubrics[idx] ? this.props.Strings.HideRubric : this.props.Strings.ShowRubric;

                if(this.state.FieldRubrics[idx]){
                    rubric_content = (
                  <div key={this.state.TaskActivityFields[idx].title}>
                    <div className="boldfaces"> {fieldTitleText} {this.props.Strings.Rubric} </div>
                    <div className="regular-text rubric">
                      {this.state.TaskActivityFields[idx].rubric}
                    </div>
                  </div>);
                }

                rubricView = ( <div key={1200}>
                      <button type="button" className="in-line" onClick={this.toggleFieldRubric.bind(this,idx)}> {rubricButtonText}</button>
                      <ReactCSSTransitionGroup  transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionAppearTimeout={500} transitionName="example" transitionAppear={false} transitionEnter={true} transitionLeave={true}>
                        {rubric_content}
                      </ReactCSSTransitionGroup>
                    </div>
              );
            }

            if(this.state.TaskActivityFields[idx].instructions != ''){ //if instructions are empty, don't display anything
                instructions = (
                  <div key ={1100}>
                    <div className="boldfaces">{fieldTitleText} {this.props.Strings.Instructions}</div>
                    <div className="regular-text instructions">
                      {this.state.TaskActivityFields[idx].instructions}
                    </div>
                  </div>
              );
            }

            if(this.state.TaskActivityFields[idx].requires_justification){
                justification = ( <div>
                          <div>{this.state.TaskActivityFields[idx].justification_instructions}</div>
                          <textarea key={idx +100} className="big-text-field" value={latestVersion[idx][1]} onChange={this.handleJustificationChange.bind(this, idx)} placeholder={this.props.Strings.JustificationPlaceholder}>
                          </textarea>
                        </div>);

            }

            let fieldInput = null;
            switch(this.state.TaskActivityFields[idx].field_type){
            case 'assessment':
            case 'self-assessment':
                switch(this.state.TaskActivityFields[idx].assessment_type){
                case 'grade':

                    fieldInput = (<input type="number" min={this.state.TaskActivityFields[idx].numeric_min} max={this.state.TaskActivityFields[idx].numeric_max} key={idx} className="number-input" value={latestVersion[idx][0]} onChange={this.handleContentChange.bind(this,idx)} placeholder="...">
                            </input>);

                    break;
                case 'rating':
                    fieldInput = (<Rater total={this.state.TaskActivityFields[idx].rating_max} rating={latestVersion[idx][0]} onRate={this.handleStarChange.bind(this,idx)} />);
                    break;
                case 'pass':
                    fieldInput = (<div className='true-checkbox'>
                      <RadioGroup selectedValue={latestVersion[idx][0]} onChange={
                            (val) => {
                                let newData = latestVersion;
                                newData[idx][0] = val;
                                this.setState({TaskData: newData});
                            }
                          }>
                            <label>{this.props.Pass} <Radio value={'pass'} /> </label>
                            <label>{this.props.Fail} <Radio value={'fail'}/> </label>

                          </RadioGroup>
                        </div>);
                    break;
                case 'evaluation':
                    let labels = this.state.TaskActivityFields[idx].list_of_labels;
                    if(typeof labels == 'string' ){
                        labels = labels.split(',');
                    }
                    fieldInput = (<div>
                      <label>{this.props.Strings.LabelDirections}</label>
                      <Select key={idx+1000}
                        options={labels}
                        selectedValue={latestVersion[idx][0]}
                        value={latestVersion[idx][0]}
                        onChange={ (e) => {
                            let newData = latestVersion;
                            newData[idx][0] = e.value;
                            this.setState({
                                TaskData: newData
                            });
                        }}
                            clearable={false}
                            searchable={false}
                          />
                        </div>
                    );
                    break;
                default:
                    fieldInput = (<div></div>);
                    break;
                }
                break;
            case 'text':
                fieldInput = (<textarea key={idx} className="big-text-field" value={latestVersion[idx][0]} onChange={this.handleContentChange.bind(this,idx)} placeholder={this.props.Strings.InputPlaceholder}>
                        </textarea>);

                break;
            case 'numeric':

                fieldInput = (<input type="number"  min={this.state.TaskActivityFields[idx].numeric_min} max={this.state.TaskActivityFields[idx].numeric_max} key={idx} className="number-input" value={latestVersion[idx][0]} onChange={this.handleContentChange.bind(this,idx)} placeholder="...">
                        </input>);


                break;
            default:
                fieldInput = (<div></div>);
                break;

            }
            const fieldContentBlock = (
              <div className="field-content" key={idx + 600}><b>{fieldTitleText}</b> {fieldInput}</div>
            );
            let latestVersionFieldView =  <div>
              {fieldInput}
                  {justification}
                </div>;

            completeFieldView =  (
              <div key={idx+200}>
                <b>{fieldTitle}</b>
                {instructions}
                {rubricView}
                <VersionView Versions={this.state.TaskData.slice(0, this.state.TaskData.length-1)} Field={this.state.TaskActivityFields[idx]} FieldIndex={idx} Strings={this.props.Strings}/>

                {latestVersionFieldView}
              </div>
              );

            return completeFieldView;

        }, this);

        if(this.state.TaskStatus == 'Complete'){
            formButtons = (<div></div>);
        }

        if(this.state.ShowContent){
            content = (<div className="section-content">
              {TA_instructions}
              {TA_rubric}
              {fileUploadView}
              {fields}
              {formButtons}
           </div>);
        }
        else{
            content = (<div></div>);
        }

        return( //main render return()
            <div>
              {infoMessage}
              <div className="section card-2">
                <div onClick={this.toggleContent.bind(this)}>
                  <h2 className="title">{this.props.ComponentTitle} </h2>
                </div>
                {content}
              </div>
            </div>
          );
    }

}

export default SuperComponent;
