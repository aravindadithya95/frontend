import {TASK_TYPES_TEXT} from '../../server/utils/react_constants';

const taskStrings = {
    DisplayName: 'Display name', //TaskDetails Strings
    HowManyRequiredFiles: 'How many required files',
    MaximumNumberOfOptionalFiles: 'Maximum number of optional files',
    AreAnyFileUploadsRequired: 'Are file uploads involved',
    TaskInstructions: 'Task Instructions',
    TaskRubric: 'Task Rubric',
    TypeInstructionsHere: 'Type the instructions here',
    TypeRubricHere: 'Type the rubric here',
    FieldJustificationInstructions: 'Field Justification Instructions',
    TypeJustificationInstructions: 'Type instructions for the justification here',
    Min: 'Min',
    Max: 'Max',
    AssessmentType: 'Assessment Type',
    DefaultContentFromOtherTasks: 'Default content from other task',
    DefaultContentForField: 'Default content for the field (optional)',
    GetDataFromAnotherTaskInstead: 'Get the data from another task instead',
    InputFields: 'Input Fields',
    FieldName: 'Field Name',
    ShowThisName: 'Show this name',
    FieldType: 'Field Type',
    RequiresJustification: 'Requires Justification',
    FieldInstructions: 'Field Instructions',
    Optional: 'optional',
    FieldRubric: 'Field Rubric (optional)',
    AddAnotherField : 'Add another field',
    ShowAdvancedOptions : 'Show Advanced Options',
    DefaultTaskDuration: 'Default duration for task',
    ShouldTaskEndAtCertainTime: 'Should this task be due:',
    ExpireAfter: 'the default duration after actually starting',
    EndAtThisTime: 'at a specific time',
    DelayBeforeStartingTask: 'Delay before starting task',
    StartWhenPriorTaskIsComplete : 'Start when prior task is complete',
    StartAfterPriorTaskEndsBy : 'Start after prior task ends by',
    DoesEveryoneGetSameProblem : 'Does everyone get the same problem',
    No: 'No',
    Ok: 'Ok',
    Cancel: 'Cancel',
    AreYouSureYouWantToContinue: 'Are you sure you want to continue?',
    FollowingTasksWillDrop: 'The following tasks will be dropped',
    DroppingMultipleTask: 'Dropping Multiple Tasks',
    Yes: 'Yes',
    SeeSameActivity: 'Should students be able to see each other\'s work ',
    WhatHappensWhenTaskEnds: 'What happens at end of default time',
    WhatIfLate: 'What happens if late',
    AllocateExtraCredit: 'Reassign for Extra Credit',
    ReduceByWhatPercent: 'Reduce this by what % per day late',
    NoPointsIfLate: 'No Points If Late',
    AwardPointsForDoing: 'Award points just for doing the task on time',
    CanStudentsDisputeAssessment : 'Can students dispute this assessment',
    GradingThreshold: 'Grading Threshold',
    Points: 'Points',
    Percent: 'Percent',
    ToBeConsolidatedAssessment: 'To be consolidated, the grades should be',
    ShouldAssessmentsBeConsolidated : 'Should the assessments be consolidated',
    NumberOfAssessors : 'Number of Assessors',
    WhoCanAssess: 'Who can assess',
    AllowAnAssessment: 'Allow an assessment for this task',
    CanStudentsDisputeReflection: 'Can students dispute this reflection',
    ToBeConsolidatedReflection: 'To be consolidated, the reflections should be',
    ShouldReflectionsBeConsolidated: 'Should the reflections be consolidated',
    NumberOfStudents: 'Number of Students',
    WhoCanReflect: 'Who can reflect',
    AllowReflection: 'Allow a reflection of this task',
    AllowRevision: 'Allow a revision of this task',
    VersionEvaluation: 'Which version of the problem should be assessed',
    First: 'First',
    Last: 'Last',
    WholeProcess: 'Entire Process',
    ShouldAssigneeHaveRelationship: 'Should this assignee have a specific relation to an assignee of another task in this problem',
    None: 'None',
    NewToProblem : 'New to Problem',
    SameAs: 'Same as',
    InSameGroupAs: 'In same group as',
    NotIn: 'Not in',
    ChooseFrom: 'Choose from',
    MaxRatingLabel: 'Max Rating',
    EvaluationByLabelsLabel: 'Labels to use',
    AssigneeConstraints: 'Assignee Constraints',
    WhoCanDoTask: 'Who can do this task',
    WillThisBeGroupTask: 'Will this be a group task',
    HowManyParticipants: 'How many students should there be for this task',
    SeeSibblingsLabel: 'Since multiple people will work on this task, should they be able to see each other\'s responses while working on the task',
    SeeSibblingsInParent: 'Should students be abe to see each other\'s work while in progress?',
    DoesThisLeadToNewProblem: 'Does this lead to a new problem',
    DoesThisLeadToNewSolution: 'Does this lead to a new solution',
    TextInput: 'Text',
    Numeric: 'Numeric',
    Assessment: 'Assessment',
    SelfAssessment: 'Self Assessment',
    NumericGrade: 'Numeric Grade',
    Rating: 'Rating',
    PassFail: 'Pass or Fail',
    EvaluationByLabels: 'Evaluation by labels',
    Late: 'Task continues, considered late',
    Resolved: 'Task ends and we use any current content; next task starts',
    Abandon: 'Tasks and all follow-on tasks abandoned',
    Complete: 'Task considered complete; next task starts',
    KeepSameParticipant: 'Keep Same Participant',
    AllocateNewParticipant: 'Allocate New Participant',
    AllocateToInstructor: 'Allocate to Instructor',
    AllocateToDifferentGroupMember: 'Allocate to Different Group Member',
    Edit: 'Edit',
    CommentText: 'Comment (optionally revise)',
    Grade: 'Grade',
    Critique: 'Critique',
    Student: 'Student',
    Instructor: 'Instructor',
    BothInstructorStudents: 'Both Instructor and Students independently',
    Average: 'Average',
    Other: 'Other',
    Pass: 'Pass',
    Fail: 'Fail',
    ShouldReflectBlock: 'Should tasks wait for the reflection to be complete',
    TaskParamHeader: 'Task-level Parameters',
    UserFieldHeader: 'User Input Fields',
    AdvancedTaskParamHeader: 'Advanced Task-level Parameters',
};
const assignmentStrings = {
    Essay: 'Essay', //AssignmentDetails Strings
    Homework: 'Homework',
    Quiz: 'Quiz',
    Lab: 'Lab',
    RestrictToSemester: 'Restrict to a Semester',
    Course: 'Course',
    SelectACourse: 'Select a Course',
    Parameters: 'Parameters',
    AssignmentName: 'Assignment Name',
    HereIsNameForAssignment: 'Here is the name for this assignment',
    Name: 'Name',
    AssignmentType: 'Assignment Type',
    SpecifyType: 'Specify a type',
    HowManyDifferentTypesOfProblems: 'How Many Different Types of Problems',
    Instructions: 'Instructions',
    DefaultAssignmentName: 'Assignment',
    SubmitReminderMessage: 'Remember to specify any additional tasks as necessary before submitting at the top of the page',
    
};

const headerStrings = {
    AssignmentHeader: 'Parameters at the Assignment-level',
    WorkflowHeader: 'Parameters for the Entire Problem Thread',
    TaskHeader: 'Individual Task-level Parameters',
    MainHeader: `An assignment consists of one or more independent problems. Each problem has
    its own full thread of tasks. In this page you define an assignment that can be used
    in several courses and sections. (You specify the section elsewhere). To define an
    assignment you should define:`,
    TaskDurationHeader: 'Task Duration and Start Time Defaults',
    TaskDueHeader: 'When Task is Due',
    AssessmentHeader: 'Assessment Parameters (Grading/Critique)',
    ReflectionHeader: 'Reflection Parameters (Edit/Comment on/Revise & Resubmit Task)',
    FollowOnHeader: 'Does a Solution or Problem Follow-on?',
    AssigneeConstraintHeader: 'Who Sees/Does this Task?',
};
const workflowStrings = {
    MultipleChoice: 'Multiple Choice', //Problem Details Strings
    ShortAnswer: 'Short Answer',
    ComputerProgram: 'Computer Program',
    ProblemName: 'Problem Name',
    ProblemType: 'Problem Type',
    Description: 'Description',
    HowManyPeoplePerGroup: 'How many people per group',
    HowManyProblems: 'How many problems of this type',
    Days: 'Days',
    AssignmentInstructions: 'Assignment Instructions (optional)',
    Submit: 'Submit',
    SubmitSuccessMessage: 'Successfully created assignment!',
    ErrorMessage: 'Submit Error! Please check your work and try again',
    SaveSuccessMessage: 'Assignment Saved',
    CourseIDNull: 'A course needs to be specified',
    DefaultWorkflowName: 'Problem',
    SimpleGradeWorkflowDistribution: 'Aggregated grade for doing indicated tasks on time',
    GradeWeightsHeader:' Problem Grade Weights'
};

const fieldStrings = {
    Field: 'Field',
    Easy: 'Easy',
    Medium: 'Medium',
    Difficult: 'Hard',
    CreateProblemName: TASK_TYPES_TEXT.CREATE_PROBLEM,
    CreateOverallInstructions: 'Create a new problem for another student to solve.',
    CreateDefaultFieldTitle: 'Problem 1',
    EditProblemName: TASK_TYPES_TEXT.EDIT,
    EditOverallInstructions:'Edit the problem to ensure that it makes sense.',
    EditFieldTitle: 'Explanation',
    EditFieldInstructions: 'Enter an explanation of the edits you have made.',
    CommentName: TASK_TYPES_TEXT.COMMENT,
    CommentOverallInstructions: 'Comment on the problem.',
    SolveProblemName: TASK_TYPES_TEXT.SOLVE_PROBLEM,
    SolveOverallInstructions: 'Solve the problem.',
    SolveDefaultFieldTitle: 'Solution',
    GradeName: TASK_TYPES_TEXT.GRADE_PROBLEM,
    GradeCorrectnessTitle: 'Correctness',
    GradeCorrectnessInstructions: 'Grade the solution on how correct it is.',
    GradeCompletenessTitle: 'Completeness',
    GradeCompletenessInstructions: 'Grade the solution on whether you feel it completely answered the problem.',
    CritiqueName: TASK_TYPES_TEXT.CRITIQUE,
    CritiqueFieldTitle: 'Critique',
    NeedsConsolidationName: TASK_TYPES_TEXT.NEEDS_CONSOLIDATION,
    ConsolidateName: TASK_TYPES_TEXT.CONSOLIDATION,
    ConsolidateOverallInstructions: 'Consolidate the prior set of opinions into a single, fair representation.',
    DisputeName: TASK_TYPES_TEXT.DISPUTE,
    DisputeOverallInstructions: 'Decide whether to dispute your grade or not. If you do, you must justify your grades.',
    ResolveDisputeName: TASK_TYPES_TEXT.RESOLVE_DISPUTE,
    ResolveDisputeOverallInstructions: 'Resolve the dispute by evaluating it yourself. (You may consider all the other participant’s evaluations.)',
    DisputeFieldName: 'Justification',
    DisputeFieldInstructions: 'Explain why the other evaluators were incorrect and why you are correct instead.',

};

const tooltipMessages = {
    AssigmentNameMessage: 'This name will appear every time this assignment is used in any section.  Please make it descriptive.',
    AssigmentTypeMessage: 'This is for documentation purposes only, and is not displayed or used otherwise.',
    TaskInputFieldsHeaderMessage: 'These fields will be displayed to users for entering content as part of this task.  (You can add additional fields.)',
    TaskFieldRubricMessage: 'Optional rubric and/or guidelines to display for this input field.',
    TaskWhatHappensIfLateMessage: 'After the due date, you have indicated that this task be marked as late.  Should the system (1) keep the current user; or instead: (2) automatically allocate to a different user/group (chosen from the volunteer pool when available), (3) allocate to an instructor, (4) allocate to a different member of the current group',
    TaskSimpleGrade: 'Grade users for completing this task (regardless of any assessment)?  You will be able to specify a reduction per day late.  (You can specify the overall grade weighting elsewhere.)',
    ProblemGradeWeightsTitleMessage: 'You have specified multiple grade components.  Please weight these so they add up to 100.',
    AggregatedGradeForOnTimeMessage: 'This is the "completion grade" weight for doing the tasks on time that you have indicated in the advanced options. This weight component will be divided by the number of tasks indicated to utilize completion grades.',
    AssignmentNumberProblemsMessage: 'Each problem TYPE will have an independent structure, parameter values and instructions/rubrics. E.g., your assignment may have a "short answer" and a "fill in the blank" problem.  (Specify how many problems of each type elsewhere.)',
    AssignmentInstructionsMessage: 'This is the global assignment instructions to display.  You may instead wish to only specify instructions with each problem and/or task type elsewhere.',
    ProblemNameMessage: 'This is the name displayed for this PROBLEM TYPE.',
    ProblemTypeMessage: 'This is for documentation purposes only, and is not displayed or used otherwise.',
    ProblemDocumentationMessage: 'This is the global problem description to display.  You may instead wish to only specify separate instructions with each task (such as "create problem" and "solve problem") elsewhere.',
    ProblemDefaultGroupSizeMessage: 'Not used.  Currently groups are not implemented.',
    ProblemNumberOfSetsMessage: 'How many independent problems of this type should each user create?  Each will have an identical structure, but be conducted entirely independently from the others.',
    RemoveButtonTip: 'Remove',
    TaskDisplayName: 'This is the name displayed for this TASK.',
    TaskRequiredFilesMessage: 'Number of mandatory files to upload for this task.  Describe these files in your instructions, and perhaps remind users to remove all identifying information to keep the authorship anonymous.',
    TaskOptionalFilesMessage: 'Maximum number of optional files that may be uploaded for this task.  Describe these files in your instructions, and perhaps remind users to remove all identifying information to keep the authorship anonymous.',
    TaskInstructionsMessage: 'Instructions and/or guidelines to display for this task.',
    TaskRubricMessage: 'Optional rubric and/or guidelines to display for this task.',
    TaskFieldJustificationInstructionsMessage: 'Does this individual input FIELD require its own separate justification?  If so a justification sub-field will be generated.  (If the entire task requires a justification then you may instead wish to devote an entire input field for the justification.)',
    TaskFieldEvalByLabelsMessage: 'List the evaluation labels, separated by commas.  Users will be required to choose one.  (Spaces are allowed but commas are not allowed - labels are separated by commas.)',
    TaskAssessmentTypeMessage: 'Choose the assessment type collected in this input field.',
    TaskDefaultFieldContentFromOthersMessage: 'Should this field\'s default value be copied from a prior task?',
    TaskDefaultFieldContentMessage: 'If filled in, this will be displayed as the default content within this input field.',
    TaskShowFieldNameMessage: 'Should this input field\'s name be displayed to the user?',
    TaskFieldTypeMessage: 'What kind of input will users enter in this field: regular (free text or numeric) or assessment (someone else\'s task or one\'s own).',
    TaskFieldInstructionsMessage: 'Instructions and/or guidelines to display for this input field.',
    // we'll need to udpate TaskDueTypeMessage for changes planned in the assignment editor
    TaskDueTypeMessage: 'By default, how many days should be allocated for this task?  Also by default, should this task have a specified duration from the time it becomes available to a particular user ("expire after"), or should everyone have the same due date regardless of when it becomes avaiable ("end at a specific time")?  You can change this when assigning this to a course section.',
    TaskDelayBeforeStartingMessage: 'Should this task become available as soon as the prior task completes, or should the availability be delayed by a certain duration?',
    TaskOneOrSeparateMessage: 'Should each user/group create a separate problem for another to solve (default), or should the instructor create a single problem that all students must solve?',
    TaskSeeSameActivityMessage: 'Should users be allowed to see the contents that others have submitted for this task before everyone has completed it?  (This is allowed by default so people can learn by example while completing their own task.)',
    TaskAtDurationEndMessage: 'When this task passes the due date, should it: (1) continue but be marked as late, (2) be considered complete and use any saved content, (3) be considered abandoned along with any follow-on tasks, (4) be considered complete but not use any content saved by its user',
    TaskWhoCanAssessMessage: 'The type of user to allocate to assessing this task: (1) student(s) (2) instructor (3) both students and an instructor.  (This value will appear in the "Who can do this task" parameter in the follow-on assessment task.)',
    TaskSeeSibblingsMessage: 'When multiple users independently assess/reflect upon this task, may they see each other\s submissions before they submit their own task?',
    TaskAssessmentNumberOfParticipantsMessage: 'How many users should independently assess this task?  (This value will appear in the "How many students should there be for this task" parameter within the follow-on assessment task.)',
    TaskCanConsolidateMessage: 'You have indicated that multiple users will independently reflect upon/assess this task.  Should all the independent content be consolidated (aggregated)?',
    TaskCanDisputeMessage:'Should the user being assessed have the option to dispute the assessment?  ',
    TaskConsolidateThresholdMessage:'For numeric assessment values, specify a threshold within which all values must lie for the system to automatically consolidate/aggregate the values.  If the values differ by more than this threshold then a user will be allocated to view all the assessements for this task, and then manually re-assess this task.',
    TaskAllowAssessmentMessage: 'Must this task be assessed (graded or critiqued)?  This generates appropriate follow-on tasks.  (Notes: Any task may be assessed, so be sure you mean this task instead of a follow-on task.)',
    TaskReflectNumberOfParticipantsMessage: 'How many users should independently reflect upon this task?  (This value will appear in the "How many students should there be for this task" parameter within the follow-on reflection task.)',
    TaskWhoCanReflectMessage: 'The type of user to allocate to relecting upon this task: (1) student(s) (2) instructor (3) both students and an instructor.  (This value will appear in the "Who can do this task" parameter within the follow-on reflection task.)',
    TaskAllowReflectionMessage: 'Must this task be reflected upon (edited or commented upon)?  Reflection will proceed independent of any assessment for this task.  This generates appropriate follow-on tasks.  (Note: Any task may be reflected upon, so be sure you mean this task instead of a follow-on task.)',
    TaskAllowRevisionMessage: 'Should the reflection (edit/comment) feed into a revise and resubmit loop for this task?  This generates appropriate follow-on tasks.',
    TaskVersionEvaluationMessage: 'Which version of this task should be assessed: (1) the first/original version before revision, (2) the last/final version after revision, (3) the revision process comprising all versions',
    TaskLeadsToNewProblemMessage: 'Should this task feed into a new follow-on problem task?  This generates appropriate follow-on tasks for the new problem.',
    TaskLeadToNewSolutionMessage: 'Should this task feed into a new follow-on solution task?  This generates appropriate follow-on tasks for the new solution.',
    TaskAssigneeConstraintMessage: 'Should the system restrict who it allocates to this task?  If more than one user independently conduct this task, then the first choice below will apply to one user and the second choice will apply to all other users.',
    TaskNumOfParticipantsMessage: 'How many students should independently do this task?   If more than one, then a follow-on consolidation task will normally be generated.  (For reflections and assessments of a prior task, you indicate whether to require consolidation in that prior task\'s reflection/assessment parameters.)',
    TaskConstraintNoneMessage: 'No restrictions - anyone may be allocated.',
    TaskConstraintNewToProblemMessage: 'Restrict to users NOT allocated to any task between the original Create Problem task and this task.',
    TaskConstraintSameAsMessage: 'The user must be the same as a user allocated to the task checked below.  (If two columns of check boxes appear, then use the column corresponding to the first or all subsequent users as appropriate.)',
    TaskConstraintInSameGroupAsMessage: '(Not used.  Groups are not implemented.)  The user must be in the same group as the user allocated to the task checked below.  (If two columns of check boxes appear, then use the column corresponding to the first or all subsequent users as appropriate.)',
    TaskConstraintNotInMessage: 'The user must NOT be the same as one allocated to the task checked below.  (If two columns of check boxes appear, then use the column corresponding to the first or all subsequent users as appropriate.)',
    TaskConstraintChooseFromMessage: 'The user must be selected from the users allocated to one of the tasks checked below.  (If two columns of check boxes appear, then use the column corresponding to the first or all subsequent users as appropriate.)',
    // I don't know what this is...
    TaskGetFieldContentMessage: '',
    TaskRequiresJustificationMessage:'',
    TaskGroupTaskMessage:'Should this task be conducted jointly by a group or by a single user.  (Not used.  Currently groups are not implemented.)',
    TaskConsolidateFunctionMessage: 'If the system to automatically consolidate/aggregate the values from multiple independent assessments, it will use the (1) maximum, (2) minimum, or (3) average of the assessment values as the result.',
    TaskWhoCanDoMessage:'The type of user to allocate to this task: (1) student(s) (2) instructor (3) both students and an instructor.  (For assessment/reflection tasks, this will be indicated previously within the parameters of the prior task requiring reflection/assessment.)',
    TaskShouldReflectBlockMessage:'Specify whether the following tasks should wait for this reflection to be finished.',
};


export default {...taskStrings, ...assignmentStrings, ...workflowStrings, ...fieldStrings, ...tooltipMessages, ...headerStrings};
