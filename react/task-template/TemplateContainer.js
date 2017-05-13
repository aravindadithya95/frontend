/*
This is the Container for the task template page. It loads all the other components and puts the apporpriate data in them.
This Container also has the GET calls to fetch the data and passes it down to the other Components. The page uses tabs for
future stuff.

*/
import React from 'react';
import request from 'request';
import { TASK_TYPES, TASK_TYPES_TEXT } from '../../server/utils/constants'; // contains constants and their values

// Input Components: These can be interactive with the user;
import SuperComponent from './superComponent';
// Display Components: These only display data retrived from the database. Not interactive.

import HeaderComponent from './headerComponent';
import CommentComponent from './commentComponent';
import TasksList from './tasksList';

// This constains all the hard-coded strings used on the page. They are translated on startup
import strings from './strings';

const ReactTabs = require('react-tabs');
const Tab = ReactTabs.Tab;
const Tabs = ReactTabs.Tabs;
const TabList = ReactTabs.TabList;
const TabPanel = ReactTabs.TabPanel;

/*      PROPS:
            - TaskID
            - SectionID
            - UserID
              (from main.js)
*/

class TemplateContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Loaded: false, // this variable is set to true when the page succesfully fetches data from the backend
            CourseID: null,
            CourseName: '',
            CourseNumber: '',
            AssignmentTitle: '',
            AssignmentID: null,
            AssignmentDescription: '',
            TaskActivityType: '',
            TaskStatus: '',
            SemesterID: null,
            SemesterName: '',
            TaskActivityName: '',
            Data: null,
            Error: false,
            TabSelected: 0,
            Strings: strings,
            NotAllowed: false,
        };
    }

    getTaskData() {
		// this function makes an API call and saves the data into appropriate state variables

        const options = {
            method: 'GET',
            uri: `${this.props.apiUrl
				}/api/taskInstanceTemplate/main/${
				this.props.TaskID}`,
            qs: {
				// query strings
                courseID: this.props.CourseID,
                userID: this.props.UserID,
                sectionID: this.props.SectionID,
            },
            json: true,
        };

		// this function makes an API call to get the current and previous tasks data and saves the data into appropriate state variables
		// for rendering
        const options2 = {
            method: 'GET',
            uri: `${this.props.apiUrl}/api/superCall/${this.props.TaskID}`,
            qs: {
                userID: this.props.UserID,
            },
            json: true,
        };

        request(options2, (err, res, bod) => {
            if (res.statusCode != 200) {
                this.setState({ Error: true });
                return;
            }
            console.log(bod);
            this.props.__(strings, (newStrings) => {
                console.log('request', bod);

                request(options, (err, res, body) => {
                    if (res.statusCode != 200) {
                        this.setState({ Error: true });
                        return;
                    }

                    const taskList = new Array();
                    const skipIndeces = new Array();
                    let currentTaskStatus = '';

                    if (bod.error === true) {
                        console.log('Error message', bod.message);
                        this.setState({
                            NotAllowed: true,
                            Loaded: true,
                        });
                    } else {
                        let parseTaskList = bod.superTask.map((task) => {
                            const newTask = task;
                            if (task.Data !== null) {
                                if (Array.isArray(task.Data)) {
                                    newTask.Data = task.Data;
                                } else if (task.Data.constructor === Object) {
                                    newTask.Data = [task.Data];
                                } else {
                                    newTask.Data = [JSON.parse(task.Data)];
                                }
                            } else {
                                newTask.Data = [new Object()];
                            }
                            if (
    								task.Files !== null &&
    								task.Files.constructor !== Object
    							) {
                                newTask.Files = JSON.parse(task.Files);
                            } else {
                                newTask.Files = task.Files;
                            }
                            if (
    								newTask.TaskActivity.Fields !== null &&
    								newTask.TaskActivity.Fields.constructor !==
    									Object
    							) {
                                newTask.TaskActivity.Fields = JSON.parse(
    									task.TaskActivity.Fields,
    								);
                            }
                            if (
    								newTask.TaskActivity.FileUpload !== null &&
    								newTask.TaskActivity.FileUpload.constructor !==
    									Object
    							) {
                                newTask.TaskActivity.FileUpload = JSON.parse(
    									task.TaskActivity.FileUpload,
    								);
                            }

                            return newTask;
                        });
                        const currentTask = parseTaskList.pop();
                        parseTaskList = parseTaskList.reverse();

                        const alreadyArrayedTasks = [];
                        parseTaskList.forEach((task, index) => {
                            if (
    								skipIndeces.includes(index) ||
    								task.TaskActivity.Type ==
    									TASK_TYPES.NEEDS_CONSOLIDATION
    							) {
                                return;
                            }
                            if (task.TaskActivity.NumberParticipants > 1) {
                                const newArray = parsedTaskList.filter((t, idx) => {
                                    if (
    										t.TaskActivity.TaskActivityID ===
    										task.TaskActivity.TaskActivityID
    									) {
                                        skipIndeces.push(idx);

                                        return true;
                                    }
                                    return false;
                                });
                                taskList.push(newArray);
                            } else {
                                taskList.push(task);
                            }
                        }, this);

                        currentTaskStatus = currentTask.Status;
                        taskList.push(currentTask);

                        console.log('Task data after manipulation', taskList);
                    }


                    this.setState({
                        Loaded: true,
                        CourseName: body.courseName,
                        CourseNumber: body.courseNumber,
                        AssignmentTitle: body.assignmentName,
                        AssignmentID: body.assignmentID,
                        AssignmentDescription: body.assignmentDescription,
                        TaskActivityType: body.taskActivityType,
                        SemesterID: body.semesterID,
                        SemesterName: body.semesterName,
                        TaskActivityVisualID: body.taskActivityVisualID,
                        Data: taskList,
                        TaskStatus: currentTaskStatus,
                        Strings: newStrings,
                    });
                });
            });
        });
    }

    componentWillMount() {
		// this function is called before the component renders, so that the page renders with the appropriate state data
        this.getTaskData();
    }

    render() {
        let renderView = null;
        if (this.state.Error) {
			// if there was an error in the data fetching calls, show the Error Component
            return <ErrorComponent />;
        }
        if (!this.state.Loaded) {
			// while the data hasn't been loaded, show nothing. This fixes a flickering issue in the animation.
            return <div />;
        }

        if (this.state.NotAllowed === true) {
            renderView = (<div>{this.state.Strings.NotAllowed}</div>);
        } else {
            renderView = (<TasksList
              TasksArray={this.state.Data}
              TaskID={this.props.TaskID}
              UserID={this.props.UserID}
              Strings={this.state.Strings}
            />);
        }


        return (
          <div>
            <Tabs
              onSelect={(tab) => {
                  this.setState({ TabSelected: tab });
              }}
              selectedIndex={this.state.TabSelected}
            >
              <TabList className="big-text">
                <Tab>{this.state.Strings.Task}</Tab>
                <Tab>{this.state.Strings.Comments}</Tab>
              </TabList>
              <TabPanel>
                <HeaderComponent
                  TaskID={this.props.TaskID}
                  CourseName={this.state.CourseName}
                  CourseName={this.state.CourseName}
                  CourseNumber={this.state.CourseNumber}
                  AssignmentTitle={this.state.AssignmentTitle}
                  AssignmentDescription={
								this.state.AssignmentDescription
							}
                  TaskActivityType={this.state.TaskActivityType}
                  SemesterName={this.state.SemesterName}
                  Strings={this.state.Strings}
                />

                {renderView}

              </TabPanel>
              <TabPanel>
                <div className="placeholder" />
                {/*  Future work to support comments*/}

                <CommentComponent
                  Comment={{
                      Author: 'User1',
                      Timestamp: 'May 6, 2013 9:43am',
                      Content: 'I really liked your problem. It was very intriguing.',
                  }}
                />
                <CommentComponent
                  Comment={{
                      Author: 'User2',
                      Timestamp: 'May 6, 2013 11:09am',
                      Content: 'I agree. I would have never thought of this.',
                  }}
                />
                <CommentComponent
                  Comment={{
                      Author: 'Instructor',
                      Timestamp: 'May 6, 2013 3:32pm',
                      Content: 'Your approach of the problem is very unique. Well done.',
                  }}
                />
              </TabPanel>

            </Tabs>

          </div>
        );
    }
}

export default TemplateContainer;
