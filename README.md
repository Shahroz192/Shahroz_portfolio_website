# 🚀 Shahroz Butt's Portfolio Website

A modern, responsive portfolio website built with cutting-edge technologies to showcase skills, projects, and experience as an AI & Machine Learning Developer.

## 🎯 About This Project

This portfolio website serves as a professional showcase for Muhammad Shahroz Butt, an AI & Machine Learning Developer with expertise in:
- Computer Vision
- LLM Deployment
- MLOps

The website features a clean, dark-themed design with smooth animations and responsive layout that works on all devices.

## ✨ Technology Stack

This portfolio is built with:

### 🎯 Core Framework
- **⚡ Next.js 15** - The React framework for production with App Router
- **📘 TypeScript 5** - Type-safe JavaScript for better developer experience
- **🎨 Tailwind CSS 4** - Utility-first CSS framework for rapid UI development

### 🧩 UI Components & Styling
- **🧩 shadcn/ui** - High-quality, accessible components built on Radix UI
- **🎯 Lucide React** - Beautiful & consistent icon library
- **🌈 Framer Motion** - Production-ready motion library for React

### 🗄️ Database & Backend
- **🗄️ Prisma** - Next-generation Node.js and TypeScript ORM
- **🔌 Socket.IO** - Real-time communication library

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio running.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx         # Main portfolio page
│   ├── layout.tsx       # Root layout
│   └── ...
├── components/          # Reusable React components
│   └── ui/              # shadcn/ui components
├── hooks/               # Custom React hooks
└── lib/                 # Utility functions and configurations
```

## 🎨 Portfolio Sections

### 🏠 Home
Professional introduction with a code-themed decoration showing key information.

### 👤 About
Education details including university, degree, coursework, and CGPA.

### 💼 Experience
Professional experience with key achievements and responsibilities.

### 🛠️ Projects
Showcase of key projects with:
- Project titles and descriptions
- Technologies used
- Key achievements and results

### 🧠 Skills
Comprehensive skill display organized by categories:
- Core Programming
- Machine Learning
- Deep Learning
- MLOps & Deployment
- LLM & AI Engineering
- Data Engineering
- Development Tools

### 📞 Contact
Contact information with:
- Email
- Phone
- Location
- Social media links (GitHub, LinkedIn)

## 🎯 Key Features

- **📱 Fully Responsive** - Works on mobile, tablet, and desktop
- **🌙 Dark Theme** - Modern dark-themed UI with cyan accent colors
- **🧭 Smooth Navigation** - Scroll-based navigation highlighting active sections
- **⚡ Real-time Features** - Socket.IO integration for potential real-time enhancements
- **🎨 Beautiful UI** - shadcn/ui components with hover animations and transitions
- **🚀 Performance Optimized** - Built with Next.js for optimal performance

## 🛠️ Development

### Available Scripts

- `npm run dev` - Starts the development server with hot reloading
- `npm run build` - Builds the application for production
- `npm start` - Starts the production server
- `npm run lint` - Runs ESLint for code quality checks
- `npm run db:push` - Pushes Prisma schema to database
- `npm run db:generate` - Generates Prisma client
- `npm run db:migrate` - Runs Prisma migrations
- `npm run db:reset` - Resets the database

## 🤝 Customization

To customize this portfolio for your own use:

1. Update content in `src/app/page.tsx`
2. Modify contact information
3. Add your own projects and skills
4. Update personal information (name, title, etc.)
5. Adjust styling in Tailwind CSS classes

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Adaptive navigation (hamburger menu on mobile)
- Properly sized touch targets
- Optimized spacing for all screen sizes

## 🎨 UI/UX Features

- Smooth scrolling navigation
- Interactive hover states on buttons and cards
- Animated code snippet decoration
- Section highlighting as you scroll
- Back-to-top functionality
- Consistent color scheme and typography

## 🚀 Deployment

This portfolio can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS
- DigitalOcean
- Self-hosted Node.js server

For production deployment:
1. Update any environment variables as needed
2. Run `npm run build` to create optimized build
3. Deploy the `.next` directory and `package.json`

---

Built with ❤️ using modern web technologies