# Minimalist Portfolio Website

A clean, modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and dark/light theme support.

## Features

- **Minimalist Design** - Clean typography with Geist font and strategic use of whitespace
- **Responsive Layout** - Mobile-first design that works on all devices
- **Theme Toggle** - Seamless dark/light mode switching
- **Smooth Animations** - Subtle scroll-triggered animations and hover effects
- **Static Portfolio Content** - Public portfolio data is edited directly in the frontend
- **Modern Stack** - Built with Next.js 15, TypeScript, and Tailwind CSS

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [v0.dev](https://v0.dev/) - AI-powered development

## Getting Started

```bash
# Clone the repository
git clone https://github.com/felixmacaspac/v0-minimalist-portfolio.git

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

The public portfolio content is read from `features/portfolio/data/portfolio-content.ts`.
Update that file when you want to change the hero, work history, thoughts, contact email, or social links.

The contact form still posts to the backend contact endpoint. If you want a fully static deployment, replace the contact form with a `mailto:` link or connect it to a form service.

## Customization

The portfolio is designed to be easily customizable:

- Update personal information in `features/portfolio/data/portfolio-content.ts`
- Modify colors and styling in `app/globals.css`
- Add or remove sections as needed

## License

Open source and available under the [MIT License](LICENSE).

---

**Built with [v0.dev](https://v0.dev) by Felix Macaspac**
