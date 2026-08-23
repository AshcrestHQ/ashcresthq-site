# Contributing to AshcrestHQ Site

Thank you for your interest in contributing to the official **AshcrestHQ** website! We welcome contributions from developers, designers, and technical writers of all experience levels.

---

## 🤝 Code of Conduct

All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to ensure a respectful and productive collaborative environment.

---

## 🛠️ How to Contribute

### 1. Reporting Bugs
- Check existing [GitHub Issues](https://github.com/AshcrestHQ/ashcresthq-site/issues) to avoid duplicate reports.
- If your issue is new, open a bug report using the provided **Bug Report** template.
- Include clear steps to reproduce, expected behavior, and environment details (Node version, OS, browser).

### 2. Suggesting Enhancements
- Open a feature request issue using the **Feature Request** template.
- Explain the motivation behind the enhancement and how it benefits the AshcrestHQ community.

### 3. Submitting Code Changes

1. **Fork & Clone**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ashcresthq-site.git
   cd ashcresthq-site
   ```

2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Make Your Changes**:
   - Follow existing code patterns (Next.js App Router, Tailwind CSS v4, Framer Motion).
   - Ensure all interactive elements have semantic HTML and responsive styling.

5. **Lint & Build Verification**:
   Before committing, verify that your changes pass linting and static build:
   ```bash
   npm run lint
   npm run build
   ```

6. **Commit & Push**:
   Use clear, descriptive commit messages adhering to Conventional Commits:
   - `feat: add project category filter`
   - `fix: resolve mobile layout overflow in hero section`
   - `docs: update deployment architecture diagram`

   ```bash
   git add .
   git commit -m "feat: description of changes"
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**:
   - Direct your PR to the `main` branch of `AshcrestHQ/ashcresthq-site`.
   - Provide a clear summary of changes and reference any linked issues.

---

## 🎨 Tech Stack & Conventions

- **Framework**: Next.js 16 (App Router)
- **UI & Styling**: Tailwind CSS v4, Lucide React icons
- **Animations**: Framer Motion
- **Static Export**: Configured with `output: 'export'` for Cloudflare Pages edge hosting.

Thank you for helping build **AshcrestHQ**! 🚀
