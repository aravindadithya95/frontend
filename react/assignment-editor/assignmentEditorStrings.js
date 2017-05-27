import {TASK_TYPES_TEXT} from '../../server/utils/react_constants';

const taskStrings = {
    DisplayName: 'Display name', //TaskDetails Strings
    RemoveButtonTip: 'Remove',
    HowManyRequiredFiles: 'How many required files',
    MaximumNumberOfOptionalFiles: 'Maximum number of optional files',
    AreAnyFileUploadsRequired: 'Are file uploads involved',
    TaskInstructions: 'Task Instructions',
    TaskRubric: 'Task Rubric',
    TypeInstructionsHere: 'Type the instructions here',
    TypeRubricHere: 'Type the rubric here',
    FieldJustificationInstructions: 'Field Justification Instructions',
    TypeJustificationInstructions: 'Type insructions for the justification here',
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
    ShouldTaskEndAtCertainTime: 'Should this task end at a certain time',
    ExpireAfter: 'Expire After',
    EndAtThisTime: 'End at a specific time',
    DelayBeforeStartingTask: 'Delay before starting task',
    StartWhenPriorTaskIsComplete : 'Start when prior task is complete',
    StartAfterPriorTaskEndsBy : 'Start after prior task ends by',
    DoesEveryoneGetSameProblem : 'Does everyone get the same problem',
    No: 'No',
    Yes: 'Yes',
    SeeSameActivity: 'Should students be able to see each other\'s work ',
    WhatHappensWhenTaskEnds: 'What happens at end of default time',
    WhatIfLate: 'What happens if late',
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
    CommentText: 'Comment',
    Grade: 'Grade',
    Critique: 'Critique',
    Student: 'Student',
    Instructor: 'Instructor',
    BothInstructorStudents: 'Both Instructor and Students independently',
    Average: 'Average',
    Other: 'Other',
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
    SimpleGradeWorkflowDistribution: 'Aggregated grade for doing indicated tasks on time'
};

const defaultTaskFieldsStrings = {
    Field: 'Field',
    Easy: 'Easy',
    Medium: 'Medium',
    Hard: 'Hard',
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

};

const tooltipMessages = {

};

export default {...taskStrings, ...assignmentStrings, ...workflowStrings, ...defaultTaskFieldsStrings};
