const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('/Users/sharafath.risviicloud.com/.gemini/antigravity-ide/brain/550f1c72-b345-4e04-a0f5-85de9f2f561d/.system_generated/logs/transcript_full.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    try {
      const parsed = JSON.parse(line);
      if (parsed.tool_calls) {
        for (const call of parsed.tool_calls) {
          if ((call.name === 'replace_file_content' || call.name === 'multi_replace_file_content') && call.args && call.args.TargetFile && (call.args.TargetFile.includes('CinematicStory.jsx') || call.args.TargetFile.includes('CTASection.jsx') || call.args.TargetFile.includes('MissionVision.jsx'))) {
            console.log("Found edit for:", call.args.TargetFile);
            console.log(JSON.stringify(call.args, null, 2));
          }
        }
      }
    } catch (e) {}
  }
}

processLineByLine();
