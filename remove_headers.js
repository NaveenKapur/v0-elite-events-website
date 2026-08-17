const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync('./app');

let count = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // A non-greedy regex to remove the <header> block.
  // It handles everything from <header to </header>.
  // We assume there's no nested <header>.
  const regex = /[\t ]*<header[\s\S]*?<\/header>\n?/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Removed header from', file);
    count++;
  }
});

console.log('Total files modified:', count);
