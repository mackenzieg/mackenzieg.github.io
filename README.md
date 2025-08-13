# Mackenzie Goodwin — Personal Website

This repository contains the source code for my personal website. It’s where I share information about my work, projects, resume, and contact details.

- Live site: [mackenzieg.tech](https://mackenzieg.tech)
- License: MIT (see `LICENSE`)

## Tech stack

- React (Create React App), React Router
- SCSS for styling
- Static pre-render with `react-snap`
- Deployed to GitHub Pages with `gh-pages`

## Local development

Prerequisites:

- Node.js >= 14 (nvm recommended)

Install dependencies:

```bash
npm install
```

Start the dev server (with fast refresh):

```bash
npm start
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Content and structure

- `src/data/about.md`: About page content (Markdown).
- `src/data/projects/projects.js`: Project cards and mapping to details.
  - Add a new project by:
    - Creating a Markdown file in `src/data/projects/` (e.g., `my-project.md`).
    - Adding an entry to `projectCards` and `projectDetails` with a matching `projectId`.
    - Placing images in `public/images/projects/` and referencing them by path.
- `src/data/resume/`:
  - `degrees.js`, `positions.js`, `courses.js`, `skills.js` power the Resume page.
- `src/data/contact.js`: Contact information.
- Public assets:
  - `public/files/`: PDFs and documents (e.g., resume).
  - `public/images/`: Site and project images.
  - Favicons and PWA assets under `public/images/favicon/`.

Routing and pages live under `src/pages/`. Layout and UI components are under `src/layouts/` and `src/components/`.

## Deployment

This site uses a custom domain configured via `public/CNAME` (`mackenzieg.tech`).

1. Ensure `homepage` in `package.json` is set to your domain (already configured).
2. Build and pre-render:
   ```bash
   npm run predeploy
   ```
3. Publish to GitHub Pages:
   ```bash
   npm run deploy
   ```

GitHub Pages should serve the `gh-pages` branch automatically. If needed, confirm your repository’s Pages settings are configured to use the `gh-pages` branch (root).

## Notes

- Update meta tags (title/description/social preview) in `public/index.html`.
- Update analytics (if used) in `src/components/Template/Analytics.js`.
- Linting: `npm run lint`
- Tests: `npm test`

## Acknowledgements

This site started from an open-source template and is MIT licensed. Big thanks to the maintainers and the open-source community.
