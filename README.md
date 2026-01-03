# Fintech Website - Next.js TypeScript

A modern fintech website built with Next.js 14, TypeScript, and Tailwind CSS.

## Project Structure

```
fintech-website/
├── public/                 # Static assets
│   └── fintech-logos/     # Fintech company logos
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── components/        # React components
│   │   └── ui/            # UI components (Button, Card, etc.)
│   └── lib/               # Utility functions
│       └── utils.ts       # Helper functions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui components (Button, Card)
- Lucide React icons
- Responsive design
- Clean project structure

## Build

```bash
npm run build
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Custom components with class-variance-authority

