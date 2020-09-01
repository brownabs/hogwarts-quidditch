import studentData from '../../data/studentData';
import studentList from './studentList';

const createHouseButton = (house) => {
  const domString = `
    <button id=${house.id} class="house-button house-button-${house.name.toLowerCase()}">
    <div>${house.name}</div>
    <img src="${house.picture}">
    </button>`;

  return domString;
};

const buttonEventFunction = (e) => {
  const houseId = e.target.closest('button').id;
  const students = studentData.getStudents();
  const filteredStudents = students.filter((student) => student.houseId === houseId);
  studentList.createStudentList(filteredStudents);
};

export default { createHouseButton, buttonEventFunction };
