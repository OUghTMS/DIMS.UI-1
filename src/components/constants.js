const STATUS = {REGISTER: 'Register', EDIT: 'Edit'};
const ACCESS_TYPE = {Admin: ['member', 'progress', 'tasks'], Mentor: ['tasks', 'progress', 'sub-tasks'], User: ['tasks', 'sub-tasks']};
const NAV_BUTTONS = {Admin: ['member', 'tasks'], Mentor: ['tasks'], User: []};
const GRID = {MEMBER: 'member', TASK: 'tasks', PROGRESS: 'progress', SUB_TASK: 'sub-tasks'};

const MEMBER_INPUTS = {
  NAME: 'Name',
  LAST_NAME: 'Last Name',
  PASSWORD: 'Password',
  EMAIL: 'Email',
  EDUCATION: 'Education',
  ADDRESS: 'Address',
  MOBILE_PHONE: 'Mobile Phone',
  SKYPE: 'Skype',
};
const SCORE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const MEMBER_SELECTORS = {
  SEX: {value: 'Sex', switch: ['Male', 'Female']},
  UNIVERSITY_SCORE: {value: 'UniversityAverageScore', switch: SCORE},
  MATH_SCORE: {value: 'MathScore', switch: SCORE},
  ROLE: {value: 'Role', switch: ['Admin', 'Mentor', 'User']},
};
const TASK_INPUTS = {
  NAME: 'Name', 
  DESCRIPTION: 'Description', 
  START_DATE: 'StartDate', 
  DEAD_LINE_DATE: 'DeadLineDate', 
  SELECTED_ESERS: 'SelectedUsers', 
};
const TASK_TRACK_INPUTS = {
  TASK_NAME: 'TaskName', 
  TRACK_DATE: 'TrackDate', 
  TRACK_NOTE: 'TrackNote',
};

const ROLE = {ADMIN: 'Admin', MENTOR: 'Mentor', USER: 'User'};
const SEX = {MALE: 'Male', FEMALE: 'Female'};

export {SCORE, ROLE, STATUS, ACCESS_TYPE, NAV_BUTTONS, GRID, SEX, MEMBER_INPUTS, MEMBER_SELECTORS, TASK_INPUTS, TASK_TRACK_INPUTS};
