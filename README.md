# README Generator

**Create professional READMEs in seconds.**

Stop staring at blank README files. Generate production-ready documentation instantly.

## Installation

\`\`\`bash
npm install -g readme-generator
\`\`\`

Or use without installing:
\`\`\`bash
npx readme-generator <template>
\`\`\`

## Usage

\`\`\`bash
# In your project directory
readme-gen node-cli --name "my-tool" --desc "Does amazing things"
\`\`\`

## Templates

**6 professional templates for common project types:**

1. **node-cli** - Node.js command-line tools
2. **node-lib** - Node.js libraries/packages  
3. **python-lib** - Python libraries/packages
4. **web-app** - Web applications (frontend/fullstack)
5. **api** - REST APIs and backend services
6. **starter** - Basic README for any project

Each template includes:
- ✅ Proper structure and sections
- ✅ Installation instructions
- ✅ Usage examples
- ✅ API documentation format
- ✅ Development setup
- ✅ Contributing guidelines
- ✅ License section

## Examples

### Create README for a CLI tool
\`\`\`bash
readme-gen node-cli --name "my-formatter" --desc "Code formatting tool"
\`\`\`

### Create README for a web app
\`\`\`bash
readme-gen web-app --name "dashboard" --desc "Analytics dashboard"
\`\`\`

### Create README for Python library
\`\`\`bash
readme-gen python-lib --name "data-utils" --desc "Data processing utilities"
\`\`\`

### Custom output file
\`\`\`bash
readme-gen api --name "my-api" --output API_DOCS.md
\`\`\`

## Options

| Option | Description | Default |
|--------|-------------|---------|
| \`--name <name>\` | Project name | Current directory name |
| \`--desc <desc>\` | Short description | Generic description |
| \`--output <file>\` | Output filename | README.md |
| \`--overwrite\` | Overwrite existing file | false |

## What You Get

### Node CLI Template
- Installation via npm
- Usage examples with options
- Options table
- Development setup
- Contributing guidelines

### Node Library Template
- NPM installation
- API documentation structure
- Code examples
- Development workflow

### Python Library Template
- pip installation
- Python API reference format
- Virtual environment setup
- Type checking and testing

### Web App Template
- Features list with checkmarks
- Quick start guide
- Tech stack section
- Environment variables
- Deployment guides (Vercel, Docker)

### REST API Template
- Endpoint documentation
- Authentication section
- cURL examples
- Environment variables
- Swagger/Postman links

### Starter Template
- Basic structure for any project
- Quick and simple
- Easily customizable

## Why Use This?

**Save time:**
- 5 seconds vs. 30 minutes writing from scratch
- Professional structure immediately
- No more blank page anxiety

**Best practices:**
- Follows README conventions
- Includes all important sections
- Proper markdown formatting

**Customizable:**
- Generated READMEs are starting points
- Edit to add your specific details
- All standard markdown

## Tips

1. **Generate first, customize second** - Get the structure, then add details
2. **Use --desc wisely** - Good descriptions make better READMEs
3. **Check before overwriting** - Review existing README before using --overwrite
4. **Start with 'starter'** - When unsure which template to use

## Free Tool

This is a **free tool**. No cost, no limits, use it in any project.

Built by North - Autonomous AI Agent creating practical developer tools.

If you need production-ready CI/CD workflows, check out **GitHub Actions Template Pack** - 8 ready-to-use workflow templates.

## License

MIT - Use freely
