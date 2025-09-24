# RayGen Solar Farms - Marketing Website

A complete, production-ready single-page marketing website for **RayGen Solar Farms Pvt Ltd**, built with React and Vite.

## Features

- **Modern React Architecture**: Functional components with hooks, React Router for navigation
- **Responsive Design**: Mobile-first approach with clean, accessible UI
- **SEO Optimized**: Meta tags, Open Graph, structured data, and semantic HTML
- **Investment Calculator**: Real-time calculations with exact formulas and validation
- **Professional Styling**: Custom CSS with consistent design system
- **Accessibility**: ARIA attributes, keyboard navigation, focus management
- **Performance**: Optimized images, efficient code splitting, fast loading

## Tech Stack

- **Frontend**: React 18 (functional components, no TypeScript)
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: React Router v6 for client-side navigation
- **Styling**: Plain CSS with CSS custom properties (variables)
- **Currency**: Intl.NumberFormat for Indian rupee formatting
- **Testing**: Jest setup for unit tests (calculator logic)

## Color Scheme

- **Primary**: #000000 (black) - Main text and nav
- **Secondary**: #2C7A53 (green) - Accent buttons, links, highlights
- **Supporting**: Various grays and whites for backgrounds and text

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Sticky navigation with logo and links
│   ├── Footer.jsx      # Footer with links and legal disclaimers
│   ├── Hero.jsx        # Main hero section with CTAs
│   ├── Benefits.jsx    # 3-column benefits grid
│   ├── TrustStrip.jsx  # Key numbers and trust indicators
│   ├── HowItWorks.jsx  # 4-step process explanation
│   ├── Testimonials.jsx # Customer reviews and trust info
│   ├── FAQ.jsx         # Expandable FAQ section
│   ├── ContactForm.jsx # Modal contact form with validation
│   └── *.css          # Component-specific styles
├── pages/              # Route-level page components
│   ├── Home.jsx        # Main landing page (/)
│   ├── Calculator.jsx  # Investment calculator (/calculator)
│   ├── About.jsx       # About page (/about)
│   └── NotFound.jsx    # 404 error page
├── utils/              # Helper functions
│   └── currency.js     # Indian rupee formatting utilities
├── App.jsx             # Main app with router setup
├── App.css             # Global styles and utility classes
├── index.css           # CSS reset and base styles
└── main.jsx            # Application entry point
```

## Installation & Setup

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Key Features

### Investment Calculator (/calculator)
- Toggle between kW and Amount (₹) input modes
- Real-time validation and error handling
- Exact calculation formulas:
  - kW = amount / 60,000
  - annual_payout = amount * 0.0825
  - monthly_payout = annual_payout / 12
  - 15-year projections with year-by-year breakdown
- Indian rupee formatting with proper separators

### Contact Form
- Modal overlay with form validation
- Mock API endpoint setup (POST /api/lead)
- Success/error state handling
- Mobile-responsive design

### Mobile Experience
- Fixed bottom CTA button on mobile
- Responsive navigation (simplified on mobile)
- Touch-friendly button sizes
- Optimized layouts for small screens

### SEO & Performance
- Comprehensive meta tags in `index.html`
- Open Graph and Twitter Card support
- Structured data for search engines
- Semantic HTML with proper heading hierarchy
- Accessible color contrast and focus states

## Content Guidelines

**Important**: The website content strictly avoids mentioning land lease arrangements. All content focuses on "investing in solar assets" and "owning solar farm units" instead.

### Key Messaging
- **Headline**: "Own a solar asset. Earn passive monthly income."
- **Value Prop**: Invest from ₹60,000, get 8.37% annual returns, 15-year locking period
- **Trust Elements**: Professional management, predictable income, transparent operations

### Investment Details
- **Minimum**: ₹60,000 (1 kW)
- **Returns**: 8.37% per annum (₹418.25 monthly per kW)
- **Term**: 15-year locking period with principal return at maturity
- **Target**: Monthly passive income without rooftop solar hassles

## API Integration

The contact form is set up to POST to `/api/lead` with this payload:
```javascript
{
  name: string,
  phone: string,
  email: string,
  city: string,
  amount: string
}
```

Replace the mock endpoint with your actual API URL in `src/components/ContactForm.jsx`.

## Testing

Run the calculator logic tests:
```bash
npm test
```

Tests cover:
- Currency formatting functions
- Investment calculation formulas
- Input validation logic
- Edge cases and error handling

## Deployment

The site is production-ready and can be deployed to:
- **Vercel**: `npm run build` → Upload `dist/` folder
- **Netlify**: Connect repository, set build command to `npm run build`
- **AWS S3**: Upload `dist/` contents to S3 bucket with static hosting
- **Traditional hosting**: Upload `dist/` contents to web server

## Environment Variables

Create `.env` file for any API keys or configuration:
```
VITE_API_URL=https://your-api-domain.com
VITE_CONTACT_EMAIL=info@raygensolar.com
VITE_PHONE_NUMBER=+91-9876543210
```

Access in code: `import.meta.env.VITE_API_URL`

## Browser Support

- Chrome, Firefox, Safari, Edge (modern versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## License

Copyright © 2025 RayGen Solar Farms Pvt Ltd. All rights reserved.

---

**Note**: This website is designed for lead generation and investor education. All investment terms and calculations should be verified with current business policies before going live.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
