# Cấu trúc Project Portfolio

```
portfolio-phan-minh-tan/
├── public/                     # Static files
│   ├── manifest.json          # PWA manifest
│   └── favicon.ico           # Website icon
├── src/                       # Source code
│   ├── components/           # React components
│   │   ├── Header.tsx        # Navigation & dark mode toggle
│   │   ├── Hero.tsx          # Hero section
│   │   ├── About.tsx         # About section
│   │   ├── Skills.tsx        # Skills section
│   │   ├── Projects.tsx      # Projects section
│   │   ├── Education.tsx     # Education section
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Footer
│   ├── data/                 # Data files
│   │   └── portfolioData.ts  # Portfolio information
│   ├── assets/               # Images, icons, etc.
│   ├── App.tsx              # Main App component
│   ├── index.tsx            # Entry point
│   └── index.css            # Global styles & TailwindCSS
├── index.html               # HTML template (Vite)
├── package.json             # Dependencies & scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # TailwindCSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel deployment config
├── .gitignore               # Git ignore rules
├── README.md                # Project documentation
├── INSTRUCTIONS.md          # Usage instructions
└── PROJECT_STRUCTURE.md     # This file
```

## 📁 Chi tiết các thư mục

### `/public`
Chứa các file tĩnh:
- `manifest.json`: Cấu hình PWA
- `favicon.ico`: Icon website

### `/src/components`
Các React components được tổ chức theo chức năng:

#### `Header.tsx`
- Navigation menu
- Dark mode toggle
- Mobile responsive menu
- Smooth scroll navigation

#### `Hero.tsx`
- Hero section với avatar
- Call-to-action buttons
- Contact information
- Animated elements

#### `About.tsx`
- Personal information
- Contact details
- Quick stats
- Responsive layout

#### `Skills.tsx`
- Technical skills với progress bars
- Soft skills
- Skill categories
- Animated progress bars

#### `Projects.tsx`
- Project cards
- GitHub links
- Technology tags
- Responsive grid layout

#### `Education.tsx`
- Education timeline
- Academic achievements
- Future goals
- Timeline design

#### `Contact.tsx`
- Contact form
- Social links
- Direct contact info
- Form validation

#### `Footer.tsx`
- Copyright information
- Social links
- Quick navigation
- Back to top button

### `/src/data`
Chứa dữ liệu portfolio:
- `portfolioData.ts`: Tất cả thông tin cá nhân, dự án, kỹ năng

### `/src/assets`
Chứa tài nguyên:
- Images
- Icons
- Documents

## 🛠️ Configuration Files

### `package.json`
- Dependencies
- Scripts
- Project metadata

### `vite.config.ts`
- Vite configuration
- Build settings
- Development server

### `tailwind.config.js`
- TailwindCSS configuration
- Custom colors
- Custom fonts
- Dark mode settings

### `tsconfig.json`
- TypeScript configuration
- Compiler options
- Path mapping

### `vercel.json`
- Vercel deployment settings
- Redirects
- Headers

## 🎨 Styling

### Global Styles (`src/index.css`)
- TailwindCSS imports
- Custom CSS variables
- Global animations
- Component classes

### Component Styling
- TailwindCSS utility classes
- Responsive design
- Dark mode support
- Hover effects

## 📱 Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile-First Approach
- Base styles cho mobile
- Progressive enhancement
- Touch-friendly interactions

## 🌙 Dark Mode

### Implementation
- CSS custom properties
- TailwindCSS dark mode
- localStorage persistence
- System preference detection

### Color Scheme
- Light: White background, dark text
- Dark: Dark background, light text
- Primary colors consistent

## ⚡ Performance

### Optimizations
- Lazy loading
- Code splitting
- Optimized images
- Minified assets

### Build Process
- Vite for fast development
- TypeScript compilation
- CSS optimization
- Asset optimization

## 🔧 Development

### Scripts
- `npm run dev`: Development server
- `npm run build`: Production build
- `npm run preview`: Preview build

### Development Workflow
1. Edit components in `/src/components`
2. Update data in `/src/data/portfolioData.ts`
3. Test responsive design
4. Build and deploy

---

**Lưu ý**: Tất cả thông tin cá nhân có thể được tùy chỉnh trong file `src/data/portfolioData.ts`
