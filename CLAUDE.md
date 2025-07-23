# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm start             # Start development server (port 8000)
npm run dev           # Alias for npm start

# Build
npm run build         # Build production site (requires NODE_OPTIONS=--openssl-legacy-provider)

# Deploy
npm run deploy        # Build and deploy to GitHub Pages (requires AIR_TABLE_KEY env var)

# Other
npm run serve         # Serve built site locally
```

## Architecture Overview

This is a Gatsby 2.x static site for Urbica, a design and development company. The site uses older dependencies that require the legacy OpenSSL provider flag.

### Key Architectural Decisions

1. **Internationalization**: The site supports English and Russian with automatic language detection based on browser settings. All components use the `withIntl` HOC for translations.

2. **Styling**: Uses styled-components with a distinctive dark theme. The design uses 30px as the base font size with a custom monospace font (DecimaMonoPro).

3. **Component Organization**: Components are organized by page/section in `src/components/`. Each major section (Header, Hero, Footer, etc.) has its own directory with an index.js file.

4. **Data Flow**: No global state management. Data is passed through props and managed at the component level. Static data is stored in configuration files (`projects.js`, `technologies.js`).

### External Services

- **Airtable**: Contact form submissions are sent to Airtable. Requires `AIR_TABLE_KEY` environment variable.
- **Yandex Metrika**: Analytics tracking (ID: 31411338) with webvisor and clickmap enabled.
- **Sentry**: Error tracking in production (DSN configured in gatsby-config.js).

### Important Implementation Details

1. **Language Routing**: The `LanguageRedirect` component in `pages/index.js` automatically redirects users to `/en` or `/ru` based on browser language.

2. **Contact Form**: Located in `src/components/Contacts/ContactForm.js`, it submits to Airtable and includes bot protection via a hidden email field.

3. **Responsive Design**: Uses react-media for responsive behavior. Main breakpoint is 768px.

4. **ESLint**: Configured but widely disabled across files with `/* eslint-disable */`. The project uses Airbnb config.

5. **No Tests**: The project has no test files or testing framework configured.

### Development Considerations

- The project uses Gatsby 2.15.28 with React 16.8.6 - these are significantly outdated versions
- All build commands require `NODE_OPTIONS=--openssl-legacy-provider` due to webpack compatibility issues
- The site deploys to GitHub Pages via GitHub Actions on push to master branch
- Sharp dependency was recently updated to v0.34.3 for Node.js 22 compatibility

### File Structure Patterns

- Pages are in `src/pages/` with language-specific versions (e.g., `en.js`, `ru.js`)
- Shared components are in `src/components/`
- Static configuration data is in `src/` root (projects.js, technologies.js)
- Internationalization strings are in `src/i18n/`
- All styling is done via styled-components within component files
