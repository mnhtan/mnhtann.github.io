# Portfolio - Phan Minh Tân

Website portfolio hiện đại được xây dựng bằng React, TypeScript và TailwindCSS với thiết kế responsive và dark mode.

## 🚀 Tính năng

- **Responsive Design**: Tương thích với mọi thiết bị (mobile, tablet, desktop)
- **Dark Mode**: Chế độ tối/sáng với toggle
- **Smooth Animations**: Sử dụng Framer Motion cho hiệu ứng mượt mà
- **Modern UI**: Thiết kế hiện đại với TailwindCSS
- **TypeScript**: Code type-safe và dễ bảo trì
- **SEO Optimized**: Meta tags và semantic HTML

## 📋 Nội dung

- **Hero Section**: Giới thiệu cá nhân với avatar và CTA buttons
- **About**: Thông tin chi tiết và thông tin liên hệ
- **Skills**: Kỹ năng chuyên môn và mềm với progress bars
- **Projects**: Các dự án đã thực hiện với GitHub links
- **Education**: Thông tin học vấn và mục tiêu
- **Contact**: Form liên hệ và social links
- **Footer**: Copyright và quick links

## 🛠️ Công nghệ sử dụng

- **React 18** - UI Framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool (thay thế Create React App)

## 📦 Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd portfolio-phan-minh-tan
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt

## 🏗️ Build cho production

```bash
npm run build
```

## 🚀 Triển khai trên Vercel

1. Push code lên GitHub
2. Kết nối repository với Vercel
3. Deploy tự động

## 📝 Tùy chỉnh

### Thay đổi thông tin cá nhân

Chỉnh sửa file `src/data/portfolioData.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: "Tên của bạn",
    title: "Chức danh",
    // ...
  },
  // ...
};
```

### Thay đổi màu sắc

Chỉnh sửa file `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Thay đổi màu chủ đạo
      }
    }
  }
}
```

### Thêm dự án mới

Thêm vào mảng `projects` trong `portfolioData.ts`:

```typescript
{
  id: "project-id",
  title: "Tên dự án",
  description: "Mô tả dự án",
  year: 2024,
  technologies: ["React", "TypeScript"],
  githubUrl: "https://github.com/username/project"
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Scheme

- **Primary**: Blue (#3b82f6)
- **Dark Mode**: Dark grays
- **Light Mode**: White and light grays

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 👤 Tác giả

**Phan Minh Tân**
- Email: mtann0603@gmail.com
- GitHub: [@yourusername](https://github.com/yourusername)
- Linktree: [linktr.ee/javis_mtan](https://linktr.ee/javis_mtan)

---

⭐ Nếu bạn thích project này, hãy cho một star nhé!
