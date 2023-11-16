import fs, { readFileSync } from 'fs';
import path from 'path';

function readAndParseJson(path){
  const jsonData = fs.readFileSync(path, 'utf8');
  const parsedData = JSON.parse(jsonData);
  return parsedData;
}

const studentList = readAndParseJson('studentList.json');
console.log(studentList.length);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledArray = shuffleArray(studentList);
console.log(shuffledArray);

function createTeams(array) {
  const shuffled = shuffleArray(array);
  const teams = [
    shuffled.slice(0, 4),
    shuffled.slice(4, 8),
    shuffled.slice(8, 12),
    shuffled.slice(12)
  ];

  teams.forEach(team => {
    if (team.length > 0) {
      team[0] = '팀장-' + team[0];
    }
  });

  return teams;
}
const teams = createTeams(shuffledArray);
console.log(teams);