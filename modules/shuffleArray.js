// shuffleArray.js

function shuffleArray(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input is not an array');
  }

  const shuffled = [...array]; // 배열 복사

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default shuffleArray;
