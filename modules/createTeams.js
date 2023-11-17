// createTeams.js

import shuffleArray from './shuffleArray.js';

function createTeams(array) {
  // 배열이 아닌 경우 에러 처리
  if (!Array.isArray(array)) {
    throw new Error('Input is not an array');
  }

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

export default createTeams;
