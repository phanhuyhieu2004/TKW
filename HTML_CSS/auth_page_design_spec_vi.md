# ĐẶC TẢ THIẾT KẾ CHI TIẾT: TRANG ĐĂNG KÝ / ĐĂNG NHẬP (AUTH GATE)
*Dự án: FlexiForm - Động Cơ Biểu Mẫu | Phiên bản thiết kế: Premium Cosmic Obsidian 1.0*

Tài liệu này đặc tả chi tiết từng điểm ảnh (pixel-perfect), phông chữ, màu sắc, hiệu ứng động và luồng thao tác người dùng (User Flow) cho **Trang thứ hai (Auth Gate - Đăng ký / Đăng nhập)** của FlexiForm sử dụng giao diện Tiếng Việt cao cấp.

---

## 🎨 1. HỆ THỐNG MÀU SẮC & PHÔNG CHỮ (Obsidian Glass Nexus)
*   **Vibe chủ đạo:** Cinematic, bảo mật tuyệt đối, tinh gọn và tốc độ cao.
*   **Nền (Background):** Gradient Obsidian tối (`#030303` đến `#08080C`). 
    *   *Hiệu ứng ánh sáng nền:* Một vệt sáng tỏa rộng (Ambient Light) màu Tím Neon (`#8B5CF6`) nằm ẩn phía sau góc trái thẻ Card, và một vệt sáng màu Xanh Cyan (`#00F0FF`) nằm ở góc phải thẻ Card. Hai vệt sáng này chuyển động nhịp thở (pulse) cực nhẹ để chiếu sáng lăng kính kính mờ phía trước.
*   **Thẻ Kính Mờ Refraction (The Auth Card):**
    *   Nền Card: `rgba(10, 10, 15, 0.65)` kết hợp `backdrop-filter: blur(24px)`.
    *   Đường viền: `1px solid rgba(255, 255, 255, 0.08)` phản chiếu ánh sáng.
    *   Đổ bóng chìm trong thẻ: `shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`.
*   **Phông chữ (Typography):**
    *   Tiêu đề thẻ: Phông chữ **Outfit** hình học cứng cáp, tracking-tighter.
    *   Nhãn nhập liệu (Labels) & Văn bản phụ: Phông chữ **Inter** sạch sẽ, dễ đọc.

---

## 🧭 2. BỐ CỤC CHI TIẾT GIAO DIỆN TIẾNG VIỆT (SPLIT-SCREEN 60/40)
Bố cục chia màn hình (Split-Screen) bất đối xứng cực kỳ thời thượng trên máy tính (md trở lên), tự động co về 1 cột trên điện thoại để tối ưu trải nghiệm di động.

### ◀️ KHỐI BÊN TRÁI: 60% MÀN HÌNH - KHÔNG GIAN ĐỒ HỌA ĐỘNG (THE MATRIX ART)
*   **Ý tưởng thị giác:** Một không gian nghệ thuật trừu tượng để gây ấn tượng mạnh và tạo niềm tin cho người dùng.
*   **Đồ họa trung tâm:** Sơ đồ mạng lưới Node liên kết (Schema Logic Matrix) hiển thị dưới dạng 3D lơ lửng, các điểm kết nối tự động nhấp nháy phát sáng nhẹ nhàng theo chu kỳ như nhịp thở của hệ thống.
*   **Vùng chữ chạy (Dynamic Subtitle - Typewriter):** Một dòng chữ màu xám nhạt tự động gõ chữ liên tục, luân phiên thay đổi các châm ngôn công nghệ hoặc cam kết giá trị:
    *   *Dòng 1:* *"FlexiForm giải phóng doanh nghiệp khỏi những dòng code biểu mẫu tẻ nhạt."*
    *   *Dòng 2:* *"Bảo mật dữ liệu tuyệt đối. Quyền sở hữu thuộc về bạn 100%."*
    *   *Dòng 3:* *"Kiến tạo và vận hành logic biểu mẫu nhanh như tư duy."*

---

### ▶️ KHỐI BÊN PHẢI: 40% MÀN HÌNH - THẺ XÁC THỰC KÍNH MỜ (AUTH BOX)
Thẻ kính mờ nổi bật ở trung tâm phần màn hình bên phải, bao gồm các thành phần:

#### A. Phần Đầu Thẻ (Header Card)
*   **Logo:** Icon chữ **"F"** liên kết điểm sáng màu xanh Cyan phát sáng nhẹ ở trung tâm.
*   **Tiêu đề chính (Outfit):** **"Chào mừng trở lại"** (ở giao diện Đăng nhập) hoặc **"Khởi tạo Không gian"** (ở giao diện Đăng ký).
*   **Mô tả phụ (Inter):** *"Đăng nhập để quản lý và vận hành động cơ biểu mẫu của bạn."* (Màu xám nhạt).

#### B. Khung Nhập Liệu Chặt Chẽ (Quy tắc labels trên inputs)
*   **Ô nhập 1 (Tài khoản):**
    *   *Nhãn (Label):* **"Tên đăng nhập hoặc Email"** (Chữ in hoa nhỏ, sitting above input, màu xám trắng).
    *   *Ô Input:* Nền đen kính mờ trong suốt (`bg-black/40`), viền màu xám đậm. Khi click vào (Focus), viền lập tức chuyển sang xanh Cyan phát sáng và có một lớp bóng đổ mịn màu Cyan bao quanh.
    *   *Placeholder:* `ten.dang.nhap@company.com` (Màu xám tối).
*   **Ô nhập 2 (Mật khẩu):**
    *   *Nhãn (Label):* **"Mật khẩu"**
    *   *Ô Input:* Tương tự ô nhập 1 nhưng có thêm nút **"Hiện/Ẩn"** (nút bấm dạng text trong suốt mờ nhạt ở góc phải ô input, không dùng emoji, hover vào sẽ hiện màu trắng).
*   **Liên kết phụ bên dưới:**
    *   Bên trái: Ô checkbox custom mảnh màu xanh Cyan kèm chữ **"Duy trì đăng nhập"**.
    *   Bên phải: Đường dẫn **"Quên mật khẩu?"** màu xanh Cyan desaturated (hover sẽ gạch chân chữ).

#### C. Nút Hành Động Xác Thực (Spring Action CTA)
*   **Nút bấm chính:** **"Đăng nhập hệ thống →"** (ở Đăng nhập) hoặc **"Kích hoạt tài khoản →"** (ở Đăng ký).
*   **Visual:** Nền màu xanh Cyan rực rỡ, chữ đen, bo góc 8px.
*   **Hiệu ứng xúc giác (Tactile Feedback):** 
    *   Khi hover: Nút nhấc lên nhẹ và tỏa bóng phát sáng Cyan.
    *   Khi click (:active): Nút co nhẹ lại 2% (`scale-[0.98]`) để tạo cảm giác bấm vật lý thật.
    *   Trạng thái tải dữ liệu (Loading): Chữ biến mất, một thanh chạy tiến trình (Skeletal Loader) màu trắng chạy mượt mà dọc theo nút từ trái qua phải để thông báo hệ thống đang xác thực JWT.

---

## 🔄 3. LUỒNG THAO TÁC XOAY 3D (3D CARD FLIP FLOW)
Để tạo cảm giác tương tác cực kỳ cao cấp, khi người dùng click vào liên kết chuyển đổi giữa Đăng ký và Đăng nhập:

```mermaid
sequenceDiagram
    autonumber
    actor User as Người dùng
    participant Box as Auth Card Container

    User->>Box: Click "Chưa có tài khoản? Đăng ký ngay"
    Note over Box: Kích hoạt hiệu ứng Xoay 3D (GSAP 3D Flip)<br/>trục dọc (Y-Axis) 180 độ.
    Box->>Box: Mặt sau thẻ (Register Card) xuất hiện đàn hồi
    Note over Box: Toàn bộ form Đăng ký hiện ra với các trường:<br/>Tài khoản, Email, Mật khẩu, Nhập lại mật khẩu.
    User->>Box: Click "Đã có tài khoản? Đăng nhập tại đây"
    Note over Box: Thẻ tự động xoay ngược lại 180 độ về Form Đăng nhập ban đầu.
```

Tất cả các chuyển động xoay này đều chạy ở tần số quét cao của GPU, sử dụng thuộc tính `transform-style: preserve-3d` và `perspective: 1000px` để đảm bảo chuyển động mượt mà 60 FPS trên mọi thiết bị di động.
