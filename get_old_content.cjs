const fs = require('fs');
const lines = fs.readFileSync('/Users/sharafath.risviicloud.com/.gemini/antigravity-ide/brain/550f1c72-b345-4e04-a0f5-85de9f2f561d/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');
for (const line of lines) {
  if (line.includes('Hero.jsx') && line.includes('multi_replace_file_content') && line.includes('TargetContent')) {
    console.log(line);
  }
}
