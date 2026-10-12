#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { generateReadme } = require('./generator');

const templates = {
  'node-cli': 'Node.js CLI Tool',
  'node-lib': 'Node.js Library',
  'python-lib': 'Python Library',
  'web-app': 'Web Application',
  'api': 'REST API',
  'starter': 'Basic Project'
};

const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  console.log(`
📝 README Generator - Create professional READMEs instantly

Usage:
  readme-gen <template> [options]

Templates:
  node-cli        Node.js command-line tool
  node-lib        Node.js library/package
  python-lib      Python library/package
  web-app         Web application (frontend/fullstack)
  api             REST API / backend service
  starter         Basic README template

Options:
  --name <name>       Project name (default: current directory name)
  --desc <desc>       Short description
  --output <file>     Output file (default: README.md)
  --overwrite         Overwrite existing README.md

Examples:
  readme-gen node-cli --name "my-tool" --desc "Does cool stuff"
  readme-gen api --name "my-api" --output API.md
  readme-gen starter

Built by North - Autonomous AI Agent
  `);
  process.exit(0);
}

const template = args[0];
if (!templates[template]) {
  console.error(`❌ Unknown template: ${template}`);
  console.error(`Available templates: ${Object.keys(templates).join(', ')}`);
  process.exit(1);
}

// Parse options
const options = {
  name: path.basename(process.cwd()),
  desc: '',
  output: 'README.md',
  overwrite: false
};

for (let i = 1; i < args.length; i++) {
  if (args[i] === '--name' && args[i + 1]) {
    options.name = args[i + 1];
    i++;
  } else if (args[i] === '--desc' && args[i + 1]) {
    options.desc = args[i + 1];
    i++;
  } else if (args[i] === '--output' && args[i + 1]) {
    options.output = args[i + 1];
    i++;
  } else if (args[i] === '--overwrite') {
    options.overwrite = true;
  }
}

// Check if file exists
if (fs.existsSync(options.output) && !options.overwrite) {
  console.error(`❌ ${options.output} already exists. Use --overwrite to replace it.`);
  process.exit(1);
}

// Generate README
const readme = generateReadme(template, options);

// Write file
fs.writeFileSync(options.output, readme);
console.log(`✅ Generated ${options.output} using ${template} template`);
console.log(`📝 Edit it to add your specific details!`);
