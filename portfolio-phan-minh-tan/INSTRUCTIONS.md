# Hướng dẫn sử dụng Portfolio

## 🚀 Cách chạy project

### Yêu cầu hệ thống
- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn

### Bước 1: Cài đặt dependencies
```bash
npm install
```

### Bước 2: Chạy development server
```bash
npm run dev
```

### Bước 3: Mở trình duyệt
Truy cập: http://localhost:3000

## 📝 Tùy chỉnh thông tin

### Thay đổi thông tin cá nhân
Chỉnh sửa file `src/data/portfolioData.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: "Tên của bạn",
    title: "Chức danh mới",
    introduction: "Giới thiệu ngắn",
    aboutMe: "Mô tả chi tiết"
  },
  contact: {
    email: "email@example.com",
    phone: "0123456789",
    location: "Địa chỉ",
    linktree: "https://linktr.ee/yourusername"
  }
  // ...
};
```

### Thêm dự án mới
Thêm vào mảng `projects`:

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

### Thay đổi kỹ năng
Chỉnh sửa mảng `skills`:

```typescript
{
  name: "Tên kỹ năng",
  level: 85, // 0-100
  category: "technical" // hoặc "soft"
}
```

## 🎨 Tùy chỉnh giao diện

### Thay đổi màu sắc
Chỉnh sửa file `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... thay đổi các màu khác
  }
}
```

### Thay đổi font
Thay đổi trong `tailwind.config.js`:

```javascript
fontFamily: {
  'inter': ['Inter', 'sans-serif'],
  'poppins': ['Poppins', 'sans-serif'],
}
```

## 🚀 Deploy lên Vercel

### Bước 1: Push code lên GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Bước 2: Kết nối với Vercel
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập bằng GitHub
3. Import repository
4. Deploy tự động

### Bước 3: Cấu hình domain (tùy chọn)
- Thêm custom domain trong Vercel dashboard
- Cấu hình DNS records

## 📱 Responsive Design

Website đã được tối ưu cho:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌙 Dark Mode

- Tự động theo hệ thống
- Toggle button ở header
- Lưu preference trong localStorage

## ⚡ Performance

- Lazy loading components
- Optimized images
- Code splitting
- Minified CSS/JS

## 🔧 Troubleshooting

### Lỗi thường gặp

1. **Port 3000 đã được sử dụng**
   ```bash
   npm run dev -- --port 3001
   ```

2. **Lỗi TypeScript**
   ```bash
   npm run build
   ```

3. **Lỗi TailwindCSS**
   ```bash
   npx tailwindcss init
   ```

## 📞 Hỗ trợ

Nếu gặp vấn đề, hãy:
1. Kiểm tra console trong DevTools
2. Xem file README.md
3. Tạo issue trên GitHub

---

**Chúc bạn thành công! 🎉**
