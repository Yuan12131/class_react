// readAndParseJson.js

import fs from 'fs';

function readAndParseJson(path) {
  const jsonData = fs.readFileSync(path, 'utf8');
  const parsedData = JSON.parse(jsonData);
  return parsedData;
}

export default readAndParseJson;
