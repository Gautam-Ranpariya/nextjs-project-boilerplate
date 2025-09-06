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
