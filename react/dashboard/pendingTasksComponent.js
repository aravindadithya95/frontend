import React, { Component } from 'react';
import apiCall from '../shared/apiCall';
import moment from 'moment';
import TableComponent from '../shared/tableComponent';

export default class PendingTaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PendingTasks: [],
            PendingTasksData: []
        };

        this.makeRevisionLabel = this.makeRevisionLabel.bind(this);
    }
    componentDidMount () {
        this.fetchCompleted(this.props.UserID);
    }

    fetchCompleted(userId){
        apiCall.get(`/getPendingTaskInstances/${userId}`, (err, res,body)=> {
            if(res.statusCode === 200){
                console.log('Tasks', body);
                let transformedTaskList = body.PendingTaskInstances.map(task => {
                    return {
                        Assignment: task.AssignmentInstance.Assignment.Name,
                        TaskID: task.TaskInstanceID,
                        Type: task.TaskActivity.DisplayName,
                        Course: task.AssignmentInstance.Section.Course.Name,
                        CourseNumber: task.AssignmentInstance.Section.Course.Number,
                        SectionName: task.AssignmentInstance.Section.Name,
                        Revision: task.TaskActivity.AllowRevision,
                        Status: typeof task.Status === 'string' ? JSON.parse(task.Status) : task.Status,//task.Status,
                        Date:task.EndDate,
                    };
                });
                this.setState({
                    PendingTasks: body.PendingTaskInstances,
                    PendingTasksData: transformedTaskList
                });
            }
        });
    }
    makeLink({original, row, value}){
        return <a  href={`/task/${original.TaskID}`}>{value}</a>;
    }
    makeDate({ original, row, value }) {
        let css = '';
        if (original.Status[3] === 'late') {
            css = 'task-late';
        }
        return <span class={css}>{moment(value).format('MMMM Do, YYYY h:mm a')}</span>;
    }

    makeRevisionLabel({original, row, value}){
        //if(original.Status.indexOf('submitted_for_approval') != -1 || original.Status.indexOf('being_revised') != -1){
        
        let txt = `${value}`;
        let css = '';
        if(original.Revision == true ||
           original.Status[2].indexOf('submitted_for_approval') != -1 ||
           original.Status[2].indexOf('being_revised') != -1 )  
        {

            txt = `(${this.props.Strings.Revision}) ${value}`;
        
        }

        if (original.Status[3] === 'late'){
            css='task-late';
        }
        return <div className={css}>{txt}</div>;
    }

    makeCourse({ original, row, value }){
        let displayText = value;
        if(original.CourseNumber != null && original.SectionName != null){
            displayText = `${original.CourseNumber} - ${original.SectionName}`;
        }
        if (original.Status[3] === 'late') {
            return <div className="task-late">{displayText}</div>;
        }
        return <div>{displayText}</div>;
    }
    
    render() {
        let {Strings} = this.props;
        let {PendingTasks, PendingTasksData} = this.state;
        
        return (
            <div className="section card-2 sectionTable">
                <h2 className="title">{Strings.PendingTasks}</h2>
                <div className="section-content">
                    <div className="col-xs-6">
                        <span style={{backgroundColor: '#C7C7C7', fontSize: '14px', textAlign: 'center', display: 'inline-block', padding: '5px', width: '99%'}}>{Strings.RedHeader}</span>
                        <TableComponent
                            data={PendingTasksData}
                            columns={[
                                {
                                    Header: Strings.Assignment,
                                    accessor: d => d.Assignment,
                                    Cell: this.makeLink,
                                    id:'Pending-Assignment',
                                    resizable:true
                                    
                                        
                                },
                                {
                                    Header: Strings.Type,
                                    accessor: 'Type',
                                    id:'Pending-Type',
                                    Cell: this.makeRevisionLabel,
                                    resizable:true,
                                    
                                },
                                {         
                                    Header: Strings.Course,
                                    accessor: 'Course',
                                    resizable:true,    
                                    Cell:this.makeCourse                                
                                },{
                                    Header: Strings.DueDate,
                                    resizable:true,
                                    accessor: 'Date',
                                    Cell: this.makeDate
                                }
                            ]}
                            defaultSorted={[
                                {
                                    id: 'Date',
                                    desc: false
                                }
                            ]}
                            noDataText={Strings.NoPending}
                        />
                    </div>
                </div>
            </div>
        );
    }

}