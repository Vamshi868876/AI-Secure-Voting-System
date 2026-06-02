# Contributing to AI-Secure-Voting-System

## Welcome! 👋

We're excited you want to contribute to our Secure Voting System!

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

### Prerequisites
- Python 3.11+
- Node.js 18+
- Webcam for testing
- Docker (optional)

### Development Setup

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/AI-Secure-Voting-System.git
cd AI-Secure-Voting-System

# Backend setup
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend setup (new terminal)
cd frontend
npm install
npm run dev
```

## Development Workflow

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes with tests
3. Commit: `git commit -m "feat: description"`
4. Push and create PR

## Code Style

- Python: PEP 8
- JavaScript: ESLint config
- Type hints required
- Docstrings for functions

## Testing

```bash
# Backend tests
cd backend
pytest tests/ -v

# Frontend tests
cd frontend
npm test
```

## PR Checklist

- [ ] Tests written and passing
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] No new warnings
- [ ] CHANGELOG.md updated

## Questions?

- 🐛 [Report Issues](https://github.com/Vamshi868876/AI-Secure-Voting-System/issues)
- 💬 [Discussions](https://github.com/Vamshi868876/AI-Secure-Voting-System/discussions)
- 📧 Email: vamshi@example.com

Thank you for contributing! 🙏
