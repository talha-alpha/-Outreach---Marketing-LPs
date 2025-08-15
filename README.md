# Outreach Marketing Landing Page

A modern, responsive single-page Next.js application built with Tailwind CSS for Alpha Squad's automotive eCommerce infrastructure services.

## Features

- 🚀 **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for modern, responsive design
- 📱 **Mobile-first** responsive design
- ⚡ **Performance optimized** with modern React patterns
- 🎯 **Single page application** with smooth scrolling
- 📝 **Contact form** for lead generation

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: JavaScript (JSX)
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd outreach-marketing-lps
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & Tailwind imports
│   ├── layout.jsx         # Root layout component
│   └── page.jsx           # Main page component
├── components/             # React components
│   ├── Hero.jsx           # Hero section
│   ├── Problems.jsx       # Problems showcase
│   ├── Solutions.jsx      # Solutions & metrics
│   ├── Metrics.jsx        # Performance metrics
│   ├── Contact.jsx        # Contact form
│   └── Footer.jsx         # Footer
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies & scripts
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- Primary colors: Blue theme
- Dark colors: Dark theme for contrast

### Content
Update the content in each component file to match your business needs.

### Styling
Modify `app/globals.css` for custom CSS classes and global styles.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project and deploy the `out` folder:
```bash
npm run build
npm run export
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to Alpha Squad.
