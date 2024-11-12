# Next.js + Tauri Desktop Application

This project is a desktop application built with [Next.js](https://nextjs.org/) for the frontend and [Tauri](https://tauri.app/) for the native desktop runtime.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12.0 or later)
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri Prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

To run the application in development mode:

```bash
npm run tauri dev
```

This command will start both the Next.js development server and the Tauri development window.

## Building

To create a production build of your application:

```bash
npm run tauri build
```

This will create a bundled and optimized version of your app in the `src-tauri/target/release` directory.

## Project Structure

- `/src-tauri`: Contains the Rust code for the Tauri backend
- `/pages`: Next.js pages
- `/public`: Static assets
- `/styles`: CSS styles
- `next.config.js`: Next.js configuration
- `src-tauri/tauri.conf.json`: Tauri configuration

## Customization

### Tauri Configuration

You can customize the Tauri part of your application by editing `src-tauri/tauri.conf.json`. This file controls aspects like window size, application metadata, and allowed APIs.

### Next.js Configuration

The Next.js part can be customized through `next.config.js`. Note that for Tauri compatibility, we use the static export feature of Next.js:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // other configurations...
};

module.exports = nextConfig;
```

## Learn More

To learn more about Next.js and Tauri, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tauri Documentation](https://tauri.app/v1/guides/)
- [Tauri + Next.js Guide](https://tauri.app/v1/guides/getting-started/setup/next-js)
