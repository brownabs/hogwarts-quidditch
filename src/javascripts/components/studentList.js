import houseData from '../../data/houseData';
import studentCard from './studentCard';

const createStudentList = (students) => {
  const houses = houseData.getHouses();
  let domString = '<ul class="student-list">';
  students.forEach((student) => {
    const house = houses.find((x) => x.id === student.houseId);
    domString += studentCard.createStudentCard(student, house);
  });
  domString += '</ul>';

  $('#student-container').html(domString);
};

export default { createStudentList };
