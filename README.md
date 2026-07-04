# Out of Office Run Club

Two-page website for Out of Office Run Club: a Sunday morning social running community based around Kharadi, Pune

Live site: https://out-of-office-run-club.netlify.app

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Netlify Next.js runtime

## Pages

- `/` - Home page with hero, next-run bib card, club intro, photo grid, and WhatsApp CTA.
- `/schedule` - Run calendar with completed/upcoming runs, current route, and WhatsApp CTA.

## Project Structure

```text
app/
  layout.tsx          Root layout, metadata, fonts, nav, footer
  page.tsx            Home page
  globals.css         Tailwind directives and global styles
  schedule/page.tsx   Schedule page
components/
  BibCard.tsx         Race-bib style next-run card
  Footer.tsx          Footer links and meet point
  Nav.tsx             Header navigation and join CTA
public/photos/        Run club images used on the home page
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

If PowerShell blocks `npm`, use:

```bash
npm.cmd run dev
```

## Scripts

- `npm run dev` - Start the local development server.
- `npm run build` - Create a production build.
- `npm run start` - Start the production server after building.
- `npm run lint` - Run Next.js linting.

## Updating Content

- Home page content lives in `app/page.tsx`.
- Schedule entries live in the `runs` array in `app/schedule/page.tsx`.
- Route cards live in the `routes` array in `app/schedule/page.tsx`.
- Navigation CTA link lives in `components/Nav.tsx`.
- Footer social links live in `components/Footer.tsx`.

## Photos

Home page photos are loaded from `public/photos/`.

Current expected files:

- `public/photos/kharadi_crew.JPG`
- `public/photos/warmup.png`

Use landscape images where possible. A `4:3` crop such as `1600x1200` or `1200x900` works best for the current grid.

## Deployment

The project is configured for Netlify with `netlify.toml`.

Build command:

```bash
npm run build
```

Publish directory:

```text
.next
```

Netlify uses `@netlify/plugin-nextjs` from the project dependencies.
