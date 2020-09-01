import studentData from '../data/studentData';
import studentList from './components/studentList';
import navBar from './components/navBar';
import houseButtonGroup from './components/houseButtonGroup';

import '../styles/main.scss';

const init = () => {
  navBar.loadNavBar();
  houseButtonGroup.createHouseButtonGroup();
  studentList.createStudentList(studentData.getStudents());
};

init();
