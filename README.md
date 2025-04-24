# Colleen Neal Therapy Website (colleenneal.com)

This repository contains the source code for the official website of Colleen Neal, LPC, a professional counselor serving the Greater Clear Lake Area.

## Project Overview

The website provides information about Colleen Neal's counseling services, areas of specialization, treatment approaches, background, and contact details. It aims to be a professional, reliable, and user-friendly resource for potential and existing clients.

The site is built using modern web technologies with a focus on performance, maintainability, and responsive design.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (v14+ with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [React](https://reactjs.org/)
*   **Styling:** [Styled Components](https://styled-components.com/) (with ThemeProvider)
*   **Mapping:** [Leaflet](https://leafletjs.com/) via [React-Leaflet](https://react-leaflet.js.org/) (Open source alternative)
*   **Package Manager:** npm

## Project Structure

The project follows the standard Next.js App Router structure:

```
.
├── app/                 # Main application routes and layouts
│   ├── (pages)/         # Route groups (e.g., about-us, contact, counseling)
│   │   └── page.tsx     # Page component for each route
│   ├── layout.tsx       # Root layout (HTML structure, providers, Header/Footer)
│   ├── page.tsx         # Home page component
│   └── globals.css      # Global CSS styles (resets, base typography, etc.)
├── components/          # Reusable React components
│   ├── (page-specific)/ # Components specific to a page (e.g., home, counseling)
│   │   └── *.tsx
│   ├── Header.tsx       # Site header component
│   ├── Footer.tsx       # Site footer component
│   ├── MainContainer.tsx # Layout helper for sticky footer
│   └── ThemeProviderWrapper.tsx # Client wrapper for styled-components ThemeProvider
├── lib/                 # Utility functions, libraries, configuration
│   ├── registry.tsx     # Styled-components registry for Next.js SSR
│   └── theme.ts         # Theme definition for styled-components (colors, etc.)
├── public/              # Static assets (images, fonts, PDFs)
│   └── *.png / *.jpg    # Image assets served directly
├── types/               # Custom TypeScript type definitions
│   └── styled.d.ts      # Type augmentation for styled-components theme
├── .env.local           # Environment variables (if needed, e.g., API keys - **DO NOT COMMIT**)
├── .gitignore           # Files/folders ignored by Git
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies and scripts
├── README.md            # This file
└── tsconfig.json        # TypeScript configuration
```

*   **`app/`**: Contains all routing logic. Each folder represents a URL segment. `layout.tsx` defines shared UI for a segment and its children, while `page.tsx` defines the unique UI for a specific route.
*   **`components/`**: Houses all React components. Shared components (like `Header`, `Footer`) are at the top level, while components used only on specific pages are grouped into subdirectories (e.g., `components/home`).
*   **`lib/`**: Contains helper modules, including the `styled-components` theme and the necessary registry setup for SSR compatibility with the App Router.
*   **`public/`**: Static files are served directly from here. `/logo.png` in the code refers to `public/logo.png`.
*   **`types/`**: Holds custom TypeScript definitions, particularly for augmenting the `styled-components` theme.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:3000`.

## Key Features Implemented

*   **Responsive Design:** Layouts adapt to different screen sizes (mobile, tablet, desktop) using media queries within styled-components.
*   **Component-Based Structure:** UI is broken down into reusable React components.
*   **CSS-in-JS:** Styling is managed via `styled-components`, allowing for dynamic styling based on props and theme.
*   **Interactive Elements:** Click-to-expand lists on the Counseling page provide detailed information without cluttering the initial view.
*   **Interactive Map:** An OpenStreetMap (via Leaflet) showing the office location is embedded on the Contact page.
*   **Dynamic Content:** Some content (like the copyright year) is generated dynamically.
*   **Client-Side Interactivity:** Uses React hooks (`useState`) for managing UI state (e.g., mobile menu, contact form, expandable lists).

## Deployment

The application is intended for deployment at [colleenneal.com](https://colleenneal.com). Deployment can be handled via platforms like [Vercel](https://vercel.com/) (recommended for Next.js) or other Node.js hosting providers.

## Future Considerations

*   **Contact Form Backend:** Implement an actual backend API endpoint or serverless function to handle contact form submissions (e.g., send an email).
*   **CMS Integration:** For easier content updates (especially for services, specialties, bio), consider integrating a Headless CMS (like Contentful, Strapi, Sanity).
*   **Accessibility Audit:** Perform a thorough accessibility review (WCAG guidelines) and implement any necessary improvements.
*   **Performance Optimization:** Analyze bundle sizes and optimize image loading further if needed.
*   **SEO Enhancements:** Implement more detailed structured data (Schema.org) and refine meta tags for better search engine visibility.
*   **PDF Form Handling:** If PDFs need to be submitted online, investigate secure solutions or HIPAA-compliant form services. 