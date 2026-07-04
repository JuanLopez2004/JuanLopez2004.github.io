const fs = require('fs');
const path = require('path');

// Function to add globals.css link to HTML files
function addGlobalsCssToHtml(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if globals.css is already referenced
  if (content.includes('href="/src/app/globals.css"')) {
    console.log(`✓ globals.css already referenced in ${filePath}`);
    return;
  }
  
  // Add the globals.css link after the viewport meta tag
  const updatedContent = content.replace(
    '<meta name="viewport" content="width=device-width, initial-scale=1"/>',
    '<meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" href="/src/app/globals.css" />'
  );
  
  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`✓ Added globals.css to ${filePath}`);
  } else {
    console.log(`⚠ Could not add globals.css to ${filePath}`);
  }
}

// Copy globals.css to output directory
function copyGlobalsCss() {
  const srcPath = path.join(__dirname, '../src/app/globals.css');
  const destDir = path.join(__dirname, '../out/src/app');
  const destPath = path.join(destDir, 'globals.css');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // Copy the file
  fs.copyFileSync(srcPath, destPath);
  console.log('✓ Copied globals.css to output directory');
}

// Recursively find all index.html files under a directory
function findHtmlFiles(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtmlFiles(full, results);
    } else if (entry.name === 'index.html') {
      results.push(full);
    }
  }
  return results;
}

// Process HTML files
function processHtmlFiles() {
  const outDir = path.join(__dirname, '../out');
  const htmlFiles = findHtmlFiles(outDir);

  htmlFiles.forEach(file => {
    addGlobalsCssToHtml(file);
  });
}

// Main execution
console.log('🔧 Running post-build script...');
copyGlobalsCss();
processHtmlFiles();
console.log('✅ Post-build script completed!');
