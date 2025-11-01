# 🚀 Next.js TypeScript Boilerplate

A production-ready **Next.js + TypeScript** starter template with:

- ⚡ Next.js 15 + React 18 + TypeScript
- 🎨 Tailwind CSS 4 + Prettier (with Tailwind plugin)
- ✅ ESLint (Next.js rules + TypeScript support)
- 🧪 Jest + React Testing Library
- 🔄 Husky (pre-commit hooks for linting & testing)
- 🌍 i18n with `next-intl`
- 🔧 Pre-configured GitHub Actions (CI/CD pipeline)

---

## 📦 Quick Start

1. **Clone the repo**

```bash
git clone https://github.com/Gautam-Ranpariya/nextjs-project-boilerplate
cd nextjs-project-boilerplate

```

2. **Install dependencies**

```bash
npm install
```

3. **Run the dev server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Version Conflict

Currently, the project must use **React 18** because `@testing-library/react` does not yet support React 19.

### Required Versions

- **react**: `^18.3.1`
- **react-dom**: `^18.3.1`

### Reason

The latest version of `@testing-library/react` has a peer dependency on React `^18.0.0`.  
Using React 19.x will cause dependency resolution failures during installation and in CI/CD builds (e.g., Vercel).

### Resolution

1. Update `package.json` to enforce the correct versions:
   ```json
   {
     "dependencies": {
       "react": "^18.3.1",
       "react-dom": "^18.3.1"
     }
   }
   ```

## Optional (integrate with ESLint)

eslint-plugin-prettier
eslint-config-prettier

## ⚙️ Vercel Local Configuration & CI/CD Setup

This boilerplate includes a **fully configured CI/CD pipeline** to deploy automatically to **Vercel**.

### 🛠️ 1. Configure Vercel Locally

1. **Install Vercel CLI (optional with npx)**

```bash
npm install -g vercel
```

> 💡 Or just use `npx vercel` without global install.

2. **Login to Vercel**

```bash
vercel login
```

3. **Link your project**

```bash
vercel link
```

- Choose your **scope**: select your **personal account** to keep deployments protected.
- Choose **existing project** or **create a new project**.

4. **Verify configuration**
   Check `.vercel/project.json`:

```json
{
  "projectId": "prj_xxxxxxxx",
  "orgId": "team_xxxxxxxx",
  "projectName": "nextjs-ts-boilerplate"
}
```

> ⚠ `.vercel/project.json` is **local only** and **never commit** it. `.vercel/` is in `.gitignore`.

---

### 👤 Don’t Have a Vercel Account?

- [Sign up for free](https://vercel.com/signup)
- [Generate a personal token](https://vercel.com/account/tokens) for CI/CD

---

### 🔐 Configure GitHub Secrets for CI/CD

Add the following **repository secrets** in GitHub:

| Secret Name         | Value Source                |
| ------------------- | --------------------------- |
| `VERCEL_TOKEN`      | Personal token from Vercel  |
| `VERCEL_ORG_ID`     | From `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | From `.vercel/project.json` |

---

### 🚀 GitHub Actions Deployment Step

```yaml
- name: Deploy to Vercel
  env:
    VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
    VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
    VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
  run: npx vercel --prod --token=$VERCEL_TOKEN --org $VERCEL_ORG_ID --project $VERCEL_PROJECT_ID
```

> 💡 Pipeline automatically:
>
> 1. Install Dependencies
> 2. Runs Prettier & ESLint
> 3. Builds Next.js app
> 4. Runs Jest tests
> 5. Deploys to Vercel securely

---

## CI/CD — GitHub Actions & Vercel (for developers)

This repository includes a GitHub Actions workflow (`.github/workflows/ci.yml`) and a `CODEOWNERS` entry to streamline review and deployment to Vercel. Add the following notes for other developers working on this project.

### Workflow overview

- Workflow file: `.github/workflows/ci.yml`
- Node version: 20 (configured in the workflow's `env`)
- Main jobs:
  - `build`: checks out code, installs dependencies, runs Prettier format check, ESLint, and builds the Next.js app
  - `test`: runs after build and executes the Jest test suite
  - `auto-assign`: (runs on PRs) requests review from the designated reviewer unless the PR author is the reviewer
  - `deploy`: triggers when a PR review by the configured reviewer is submitted and approved — performs a Vercel deployment

### Triggers and conditions

- The workflow runs on pushes and pull request events targeting `main`.
- The `deploy` job only runs when a pull request review is submitted and the reviewer is `Ka-ran123` and the review state is `approved`. That makes deployments gated by that specific reviewer.

### CODEOWNERS and auto-assignment

- `CODEOWNERS` sets `@Ka-ran123` as the owner for the repository. This is used by GitHub to suggest reviewers automatically and—combined with the workflow—ensures `Ka-ran123` receives review requests.
- The `auto-assign` step in the workflow also explicitly requests `Ka-ran123` as a reviewer using the GitHub API, but it skips assignment if the PR author is `Ka-ran123` (prevents self-review).

### Required repository secrets

Make sure the following repository secrets are configured (Repository Settings → Secrets & variables → Actions):

- `VERCEL_TOKEN` — A personal token from Vercel (used by CLI deploy)
- `VERCEL_ORG_ID` — Optional but recommended for explicit project targeting
- `VERCEL_PROJECT_ID` — Optional but recommended for explicit project targeting

Note: The `deploy` step in `ci.yml` uses `npx vercel deploy --prod --yes --token ${{ secrets.VERCEL_TOKEN }}`. If you prefer to provide the org/project flags, the README contains the alternate command shown above.

### How to reproduce CI checks locally

To mirror what runs in CI use the npm scripts included in this repo. In PowerShell (Windows) or your shell of choice:

```powershell
# Install dependencies (use your package manager if not npm)
npm install

# Format check (same as CI's format:ci)
npm run format:ci

# Lint
npm run lint

# Build (same as CI build)
npm run build

# Run tests
npm run test
```

If you use Yarn in your environment, replace commands accordingly (e.g., `yarn install`, `yarn format:ci`).

### Local deploy (optional)

You can test a Vercel deployment locally with the Vercel CLI. Be sure to have `VERCEL_TOKEN` available in your environment (or use `vercel login`):

```powershell
# Deploy to Vercel (interactive or non-interactive with token)
npx vercel --prod --token $env:VERCEL_TOKEN
```

### Troubleshooting & notes for contributors

- If your PR isn't triggering the `auto-assign` step, check that the workflow has run successfully and that the event was a PR event (opened, reopened, synchronize, etc.).
- If the `deploy` job is skipped, confirm that the review event was an approval by `Ka-ran123` — the workflow condition checks both the review `state` and `user.login`.
- Build cache: the deploy job attempts to restore `.next` and `node_modules` using `actions/cache`. A cache-miss will re-run install and build steps. If you see unexpected behavior, clear caches in the Actions UI or bump the cache key logic.
- If you want to change the reviewer or add additional owners, update `.github/CODEOWNERS` and the `reviewers` list in `.github/workflows/ci.yml`.
- For CI failures related to dependencies, ensure your local `node` version matches the workflow (Node 20). Use `nvm` / Node version manager to match versions.

### Security considerations

- Keep `VERCEL_TOKEN` secret and scoped appropriately. Prefer tokens with the minimum required permissions.
- The current deploy gate requires an approval from `Ka-ran123`. If you want a more permissive flow, change the `deploy` job conditions in `.github/workflows/ci.yml`.

---

If you'd like, I can also add a short CONTRIBUTING.md describing the PR -> CI -> deploy flow and a template PR checklist. Would you like that added?

## 🛠️ Available Commands

```bash
npm run dev          # Start dev server
npm run build        # Build production app
npm start            # Run production server
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run format:ci    # Check formatting (CI mode)
npm run test         # Run tests with Jest
npm run test:watch   # Run tests in watch mode
```

---

## 📝 License

MIT — free to use, modify, and share 🚀
