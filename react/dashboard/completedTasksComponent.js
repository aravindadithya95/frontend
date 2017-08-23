import React, { Component } from 'react';
import apiCall from '../shared/apiCall';
import moment from 'moment';
import ReactTable from 'react-table';

export default class CompletedTaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CompletedTasks:[],
            CompletedTasksData: []
        };
    }
    componentWillMount () {
        this.fetchCompleted(this.props.UserID);
    }

    fetchCompleted(userId){
        apiCall.get(`/getCompletedTaskInstances/${userId}`, (err, res,body)=> {
            if(res.statusCode === 200){
                let transformedTaskList = body.CompletedTaskInstances.map(task => {
                    return {
                        Assignment: task.AssignmentInstance.Assignment.Name,
                        TaskID: task.TaskInstanceID,
                        Type: task.TaskActivity.DisplayName,
                        Course: task.AssignmentInstance.Section.Course.Name,
                        Date: moment(task.ActualEndDate).format('MMMM Do, YYYY h:mm a'),
                    };
                });

                this.setState({
                    CompletedTasks: body.CompletedTaskInstances,
                    CompletedTasksData: transformedTaskList
                });
            }
        });
    }
    makeLink({original, row, value}){
        return <a  href={`/task/${original.TaskID}`}>{value}</a>;
    }
    render() {
        let {Strings} = this.props;
        let {CompletedTasks, CompletedTasksData} = this.state;
        
        
        return (
            <div className="section card-2 sectionTable">
                <h2 className="title">{Strings.CompletedTasks}</h2>
                <div className="section-content">
                    
                    <ReactTable
                        data={CompletedTasksData}
                        columns={[
                            {
                                Header: Strings.Assignment,
                                accessor: 'Assignment',
                                Cell: this.makeLink,
                                  
                            },
                            {
                                Header: Strings.Type,
                                accessor: 'Type'
                            },
                            {         
                                Header: Strings.Course,
                                accessor: 'Course',
                            },{
                                Header: Strings.EndDate,
                                accessor: 'Date'
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                        resizable={true}
                        noDataText={String.NoCompleted}

                    />
                </div>
            </div>
        );
    }
}