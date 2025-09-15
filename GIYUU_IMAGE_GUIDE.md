# 🌊 Hướng dẫn thêm hình ảnh Giyuu Tomioka vào Loading Screen

## 📁 Cấu trúc thư mục cần tạo:

```
D:\code\
├── public/
│   └── images/
│       ├── giyuu-tomioka.png      ← Hình ảnh chính (bắt buộc)
│       ├── giyuu-silhouette.png   ← Hình ảnh dự phòng (tùy chọn)
│       └── README.md              ← Hướng dẫn chi tiết
└── src/
    └── components/
        ├── LoadingScreen.tsx      ← Đã được cập nhật
        └── ImageLoader.tsx        ← Component mới
```

## 🖼️ Cách thêm hình ảnh:

### Bước 1: Tìm hình ảnh Giyuu Tomioka
- **Google Images**: Tìm "Giyuu Tomioka transparent PNG"
- **Pinterest**: "Giyuu Tomioka Demon Slayer fan art"
- **DeviantArt**: Fan art chất lượng cao
- **Official artwork**: Từ anime/manga chính thức

### Bước 2: Chuẩn bị hình ảnh
- **Kích thước**: 400x400px hoặc lớn hơn
- **Định dạng**: JPG (khuyến nghị) hoặc PNG (có nền trong suốt)
- **Chất lượng**: Độ phân giải cao, rõ nét
- **Nội dung**: Ảnh profile chuyên nghiệp của bạn

### Bước 3: Đặt hình ảnh vào thư mục
1. Copy hình ảnh vào: `D:\code\public\images\`
2. Đặt tên file: `profile-photo.jpg` (cho JPG) hoặc `profile-photo.png` (cho PNG)
3. (Tùy chọn) Thêm hình dự phòng: `giyuu-silhouette.jpg`

**✨ Tính năng thông minh**: Website sẽ tự động phát hiện định dạng file của bạn!
- Nếu bạn có file JPG, nó sẽ sử dụng JPG
- Nếu bạn có file PNG, nó sẽ sử dụng PNG
- Nếu cả hai đều có, nó sẽ ưu tiên JPG trước

### Bước 4: Kiểm tra kết quả
- Chạy website: `npm run dev`
- Truy cập: `http://localhost:3005/`
- Xem loading screen với hình ảnh mới

## 🎨 Các hiệu ứng đã được thêm:

### ✨ Visual Effects:
- **Glow Effect**: Ánh sáng xanh dương xung quanh hình
- **Border Animation**: Viền xanh với hiệu ứng thở
- **Rotating Glow**: Vòng sáng quay xung quanh
- **Scale Animation**: Hình ảnh xuất hiện với hiệu ứng zoom

### 🔄 Smart Loading:
- **Loading Spinner**: Hiển thị khi đang tải hình
- **Fallback System**: Tự động chuyển sang hình dự phòng nếu lỗi
- **CSS Silhouette**: Hiển thị hình bóng nếu không có hình nào
- **Smooth Transition**: Chuyển đổi mượt mà giữa các trạng thái

## 🛠️ Tùy chỉnh nâng cao:

### Thay đổi kích thước hình ảnh:
```tsx
// Trong LoadingScreen.tsx, dòng 90
<div className="w-64 h-64 mx-auto relative"> // Thay đổi từ w-48 h-48
```

### Thay đổi hiệu ứng glow:
```tsx
// Trong LoadingScreen.tsx, dòng 97-99
style={{
    filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))', // Tăng cường độ
}}
```

### Thêm nhiều hình ảnh:
```tsx
// Thêm vào ImageLoader
<ImageLoader
    src="/images/giyuu-tomioka.png"
    fallbackSrc="/images/giyuu-silhouette.png"
    // Có thể thêm nhiều fallback
/>
```

## 📝 Gợi ý hình ảnh:

### Hình ảnh chính (profile-photo.jpg):
- Ảnh profile chuyên nghiệp của bạn
- Tư thế tự tin, nghiêm túc
- Ánh sáng tốt, rõ nét
- Phù hợp với theme Giyuu Tomioka
- **Định dạng JPG**: Tốt cho hình ảnh có nền

### Hình ảnh dự phòng (giyuu-silhouette.jpg):
- Hình bóng đen của Giyuu
- Đơn giản, dễ nhận biết
- Kích thước nhỏ hơn
- Phù hợp với theme tối

## 🚀 Kết quả cuối cùng:

Khi hoàn thành, loading screen sẽ có:
- ✅ Hình ảnh Giyuu Tomioka chất lượng cao
- ✅ Hiệu ứng glow và animation mượt mà
- ✅ Loading spinner khi tải hình
- ✅ Fallback system thông minh
- ✅ Responsive trên mọi thiết bị
- ✅ Tương thích với theme Giyuu Tomioka

## 🎯 Lưu ý quan trọng:

1. **Bản quyền**: Chỉ sử dụng hình ảnh có bản quyền hợp lệ
2. **Kích thước file**: Tối ưu hóa để website load nhanh
3. **Định dạng**: JPG cho hình có nền (khuyến nghị), PNG cho hình nền trong suốt
4. **Backup**: Luôn có hình dự phòng phòng trường hợp lỗi

Chúc bạn thành công! 🌊⚔️✨
