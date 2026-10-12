function generateReadme(template, options) {
  const { name, desc } = options;
  const description = desc || 'A great project';
  
  const templates = {
    'node-cli': () => nodeCLI(name, description),
    'node-lib': () => nodeLib(name, description),
    'python-lib': () => pythonLib(name, description),
    'web-app': () => webApp(name, description),
    'api': () => restAPI(name, description),
    'starter': () => starter(name, description)
  };
  
  return templates[template]();
}

function nodeCLI(name, desc) {
  return `# ${name}

${desc}

## Installation

\`\`\`bash
npm install -g ${name}
\`\`\`

## Usage

\`\`\`bash
${name} --help
\`\`\`

### Examples

\`\`\`bash
# Basic usage
${name} <input>

# With options
${name} <input> --option value
\`\`\`

## Options

| Option | Description | Default |
|--------|-------------|---------|
| \`--help\` | Show help | - |
| \`--version\` | Show version | - |

## Development

\`\`\`bash
# Clone repository
git clone https://github.com/yourusername/${name}.git
cd ${name}

# Install dependencies
npm install

# Run locally
node cli.js

# Run tests
npm test
\`\`\`

## License

MIT

## Contributing

Pull requests welcome! Please open an issue first to discuss what you'd like to change.
`;
}

function nodeLib(name, desc) {
  return `# ${name}

${desc}

## Installation

\`\`\`bash
npm install ${name}
\`\`\`

## Usage

\`\`\`javascript
const ${name.replace(/-/g, '')} = require('${name}');

// Basic usage
const result = ${name.replace(/-/g, '')}(input);
\`\`\`

## API

### \`function(input, options)\`

**Parameters:**
- \`input\` (required): Description
- \`options\` (optional): Configuration object

**Returns:** Result description

**Example:**
\`\`\`javascript
const result = function('example', { option: true });
\`\`\`

## Development

\`\`\`bash
# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build
\`\`\`

## License

MIT
`;
}

function pythonLib(name, desc) {
  const pyName = name.replace(/-/g, '_');
  return `# ${name}

${desc}

## Installation

\`\`\`bash
pip install ${name}
\`\`\`

## Usage

\`\`\`python
from ${pyName} import function

# Basic usage
result = function(input)
\`\`\`

## API Reference

### \`function(input, **kwargs)\`

**Parameters:**
- \`input\`: Description
- \`**kwargs\`: Optional keyword arguments

**Returns:** Result description

**Example:**
\`\`\`python
result = function('example', option=True)
\`\`\`

## Development

\`\`\`bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install dependencies
pip install -r requirements-dev.txt

# Run tests
pytest

# Type checking
mypy ${pyName}
\`\`\`

## License

MIT
`;
}

function webApp(name, desc) {
  return `# ${name}

${desc}

## Features

- ✅ Feature 1
- ✅ Feature 2
- ✅ Feature 3

## Demo

[Live Demo](https://your-demo-url.com) | [Screenshots](#screenshots)

## Quick Start

\`\`\`bash
# Clone repository
git clone https://github.com/yourusername/${name}.git
cd ${name}

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
\`\`\`

## Tech Stack

- **Frontend:** React / Vue / Angular
- **Backend:** Node.js / Python / Go
- **Database:** PostgreSQL / MongoDB / MySQL
- **Styling:** Tailwind / CSS Modules / Styled Components

## Environment Variables

Create a \`.env\` file:

\`\`\`env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
API_KEY=your-api-key
SECRET_KEY=your-secret-key
\`\`\`

## Deployment

### Vercel / Netlify
\`\`\`bash
npm run build
# Deploy dist/ folder
\`\`\`

### Docker
\`\`\`bash
docker build -t ${name} .
docker run -p 3000:3000 ${name}
\`\`\`

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing\`)
3. Commit changes (\`git commit -m 'Add amazing feature'\`)
4. Push to branch (\`git push origin feature/amazing\`)
5. Open a Pull Request

## License

MIT
`;
}

function restAPI(name, desc) {
  return `# ${name}

${desc}

## Features

- ✅ RESTful API design
- ✅ Authentication & authorization
- ✅ Input validation
- ✅ Error handling
- ✅ API documentation

## Quick Start

\`\`\`bash
# Clone repository
git clone https://github.com/yourusername/${name}.git
cd ${name}

# Install dependencies
npm install  # or: pip install -r requirements.txt

# Set up environment
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
npm run migrate  # or: python manage.py migrate

# Start server
npm start  # or: python app.py

# API available at http://localhost:3000
\`\`\`

## API Endpoints

### Authentication
\`\`\`
POST   /api/auth/register      Register new user
POST   /api/auth/login         Login user
POST   /api/auth/refresh       Refresh token
\`\`\`

### Resources
\`\`\`
GET    /api/resources          List all resources
POST   /api/resources          Create resource
GET    /api/resources/:id      Get resource
PUT    /api/resources/:id      Update resource
DELETE /api/resources/:id      Delete resource
\`\`\`

## Example Requests

### Register User
\`\`\`bash
curl -X POST http://localhost:3000/api/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{"email": "user@example.com", "password": "password123"}'
\`\`\`

### Get Resources
\`\`\`bash
curl http://localhost:3000/api/resources \\
  -H "Authorization: Bearer <token>"
\`\`\`

## Environment Variables

\`\`\`env
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
JWT_SECRET=your-secret-key
API_KEY=your-api-key
\`\`\`

## Deployment

### Docker
\`\`\`bash
docker build -t ${name} .
docker run -p 3000:3000 --env-file .env ${name}
\`\`\`

### Heroku
\`\`\`bash
heroku create ${name}
git push heroku main
\`\`\`

## Testing

\`\`\`bash
# Run tests
npm test

# Run with coverage
npm run test:coverage
\`\`\`

## Documentation

API documentation available at:
- **Swagger:** http://localhost:3000/api-docs
- **Postman Collection:** [Link to collection]

## License

MIT
`;
}

function starter(name, desc) {
  return `# ${name}

${desc}

## Installation

\`\`\`bash
# Clone this repository
git clone https://github.com/yourusername/${name}.git
cd ${name}

# Install dependencies
npm install  # or: pip install -r requirements.txt
\`\`\`

## Usage

\`\`\`bash
# Run the project
npm start  # or: python main.py
\`\`\`

## Features

- Feature 1
- Feature 2
- Feature 3

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Author

Your Name - [@yourhandle](https://twitter.com/yourhandle)
`;
}

module.exports = { generateReadme };
