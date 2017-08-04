/*
 * Created by Sohail on 7/2/2017.
 * This file will render all the other badge components and will display it to screen
 */

import React from 'react';
import ClassForBadge from './classForBadge';
import BadgeCategory from './badgeCategory';
import Badge from './badge';
import Select from 'react-select';
import request from 'request';


class MainBadge extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            SemesterID: null,
            CourseID: null,
            BadgeCategory: null,
            SectionID: null
        };
        this.onSemesterChange= this.onSemesterChange.bind(this);
        this.onClassChange = this.onClassChange.bind(this);
        this.onBadgeCategoryChange = this.onBadgeCategoryChange.bind(this);
        // this.onSectionIDChange= this.onSectionIDChange.bind(this);
    }

    //Will render the data
    componentWillMount() {
        const semOptions = {
            method: 'GET',
            uri: this.props.apiUrl + '/api/semester',
            json: true
        }
        request(semOptions, (err2, res2, bod2) => {
            let semestersArray = bod2.Semesters.map(function (sem) {
                return ( {value: sem.SemesterID, label: sem.Name} );
            });


            this.setState({
                Semesters: semestersArray
            });

        });
    }


    //On changing Semester
    onSemesterChange(value){
        this.setState({
            SemesterID: value.value
        });
    }

    //On Changining Class
    onClassChange(value){
        this.setState({
            CourseID: value.value,
            SectionID: value.sectionId
        });
    }

    //On Changing Badge Category
    onBadgeCategoryChange(value){
        this.setState({
            BadgeCategory: value.value
        });
    }

    render(){
        var apiContentHolder = null;

        let classAndCategory = null;



        //If semester is selected then it will allow user to select Class and Badge Category
        if(this.state.SemesterID != null){

            classAndCategory =  (
                <div>
                    <ClassForBadge apiUrl={this.props.apiUrl}
                                   SemesterID={this.state.SemesterID}
                                   UserID={this.props.UserID}
                                   onClassChange={this.onClassChange}
                                   CourseID={this.state.CourseID}
                    />
                    <div id = "badgeCategory">
                        <BadgeCategory apiUrl={this.props.apiUrl}
                                       selectedBadgeCategory={this.state.BadgeCategory}
                                       onBadgeCategoryChange={this.onBadgeCategoryChange}
                                       CourseID={this.state.CourseID}
                                       SemesterID={this.state.SemesterID}
                                       SectionID={this.state.SectionID}                        />
                    </div>
                </div>
            );

        }

        //If course and badge category are selected (Which can only be done if Semester is selected) then it will pass the selected information to badge file so that
        //badge image and progress bar can be rendered.
        if(this.state.CourseID != null && this.state.BadgeCategory != null){

            apiContentHolder =
                <div id = "badge">
                    <Badge apiUrl={this.props.apiUrl}
                           SemesterID={this.state.SemesterID}
                           UserID={this.props.UserID}
                           CourseID={this.state.CourseID}
                           SectionID={this.state.SectionID}
                           BadgeCategory={this.state.BadgeCategory}
                    />
                </div>
        }else{
            //If Course and Category is not selected then it will say no badge to display with a crying emoji
            apiContentHolder =
                <div id="badge"><h1 id="noBadgeh1">No Badge To Display 😭</h1></div>
        }


        //Select menu for semester for Badge Page
        return (

            <div className="container">
                <div id="mainBadgeSelectDiv">
                    <Select
                        options={this.state.Semesters}
                        value={this.state.SemesterID}
                        onChange={this.onSemesterChange}
                        clearable={false}
                        searchable={false}
                        placeholder="Semester"
                    />

                    {classAndCategory}

                </div>
                <div></div>

                {apiContentHolder}

            </div>
        );
    }
}


export default MainBadge;