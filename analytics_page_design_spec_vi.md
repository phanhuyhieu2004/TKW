# ĐẶC TẢ THIẾT KẾ CHI TIẾT: THỐNG KÊ & PHÂN TÍCH KẾT QUẢ DỮ LIỆU (SUBMISSIONS ANALYTICS)
*Dự án: FlexiForm - Động Cơ Biểu Mẫu | Phiên bản thiết kế: Premium Cosmic Obsidian 2.0 (Bản địa hóa)*

Tài liệu này đặc tả chi tiết từng khu vực giao diện, sơ đồ phân bổ màn hình (Layout), bảng màu biểu đồ thống kê, phông chữ và các chỉ số đo lường cho **Trang thứ năm (Submissions Analytics - Bảng thống kê và phân tích kết quả dữ liệu)** theo chuẩn thiết kế tối giản thượng lưu (Visual Density: 4).

---

## 🎨 1. CONCEPT & HỆ THỐNG MÀU SẮC (Telemetry & High-End Charts)
*   **Vibe chủ đạo:** Khoa học, chính xác, trực quan và tràn ngập hơi thở công nghệ cao (High-tech Telemetry).
*   **Kiến trúc phân vùng (Anti-Card Clutter):** Kế thừa tuyệt đối từ Trang 3 & 4. Dẹp bỏ toàn bộ các thẻ card đóng hộp rườm rà. Toàn bộ màn hình phân vùng phẳng bằng **các đường kẻ Zinc-900 mảnh 1px** trên nền tối Obsidian (`#030303`), tạo không gian thở tối đa cho các biểu đồ.
*   **Hệ màu biểu đồ (Calibrated Chart Colors):**
    *   Đường lượng truy cập (Views): Tím Neon (`#8B5CF6`) với dải màu gradient mờ nhạt dần xuống đáy biểu đồ.
    *   Đường lượt điền (Submissions): Xanh Cyan (`#00F0FF`) với dải màu gradient mờ nhạt dần xuống đáy.
    *   Bảng màu trung tính: Sử dụng xám tối Zinc-800 cho các đường lưới phụ (Grid lines) dạng đứt nét.

---

## 🧭 2. BỐ CỤC CHIA 3 PHÂN VÙNG THỐNG KÊ (3-PANE ANALYTICS LAYOUT)

```text
+------------------------------------------------------------------------------------+
|  [LOGO] Dự án v   |   Thanh công cụ Analytics (Lọc thời gian, Xuất CSV/Excel)       |
+-------------------+-------------------------------------------------+--------------+
|                   |                                                 |              |
|  CỘT 1 (20%)      |   CỘT 2 (60%)                                   |  CỘT 3 (20%) |
|  Thư mục động cơ  |   Khu vực Biểu đồ Thống kê                      |  Bản ghi     |
|  & Biểu mẫu       |   (Key Metrics, Trend Charts & Funnels)         |  Mới nhất    |
|                   |                                                 |  (Latest)    |
|                   |                                                 |              |
+-------------------+-------------------------------------------------+--------------+
```

---

### 📂 CỘT 1 (BÊN TRÁI - 20%): DANH SÁCH FORM CHỌN PHÂN TÍCH
*   Đồng bộ hoàn toàn với Sidebar của Trang 3 và 4 để giữ vững tính nhất quán thương hiệu.
*   Danh sách biểu mẫu với các chấm trạng thái xanh lá (Đã xuất bản) và xám rỗng (Bản nháp) cùng số phiên bản nhỏ. 
*   Mục đang được chọn và hiển thị dữ liệu: **"Tuyển dụng Nhân sự - v2.4"** (Chữ màu trắng, nền hover nhẹ).

---

### 📊 CỘT 2 (TRUNG TÂM - 60%): KHU VỰC BIỂU ĐỒ & CHỈ SỐ LỚN (CORE WORKSPACE)
Khu vực hiển thị các telemetry metrics được phân bổ từ trên xuống dưới một cách thoáng đãng:

#### A. Hàng 3 Chỉ Số Key Metrics Phẳng (Trên cùng)
Định hình bằng đường kẻ 1px Zinc-900 bao quanh, không đóng hộp, font số Monospace siêu đẹp để tránh nhảy chữ:
1.  **Tổng lượt điền (Total Submissions):** `1,248` 
    *   *Sub-text:* `+12.4%` (Kèm một đường biểu đồ mini-trend line màu xanh Cyan uốn lượn nhỏ bên cạnh).
2.  **Tỷ lệ hoàn tất (Completion Rate):** `84.2%`
    *   *Sub-text:* Cải thiện `+2.1%` so với tuần trước.
3.  **Thời gian trung bình (Avg. Completion Time):** `2m 14s`
    *   *Sub-text:* Icon đồng hồ outline mảnh màu xám.

#### B. Biểu Đồ Xu Hướng Kép (Views vs. Submissions Trend Chart - Giữa Canvas)
*   **Visual:** Một biểu đồ vùng phủ kép (Dual-Line Area Chart) cực rộng hiển thị xu hướng truy cập.
*   **Đường 1 (Lượt xem - Tím Neon):** Đường line mảnh chạy uốn lượn, bên dưới phủ dải màu tím trong suốt 5% đổ xuống trục hoành.
*   **Đường 2 (Lượt điền - Xanh Cyan):** Đường line màu Cyan uốn lượn, bên dưới phủ dải màu Cyan trong suốt 5% đổ xuống trục hoành.
*   **Tooltip tương tác (Floating Tooltip):** Khi di chuột trên biểu đồ, một đường thẳng đứng màu xám nhạt đứt đoạn xuất hiện dọc theo vị trí chuột, hiển thị một hộp thoại kính mờ nhỏ bo góc 4px báo cáo số liệu chính xác của ngày đó.

#### C. Biểu Đồ Phễu Rơi Rớt Dữ Liệu (Drop-off Funnel Chart - Dưới cùng)
*   **Visual:** Biểu đồ phễu ngang biểu diễn tỷ lệ người dùng dừng lại ở từng bước của form.
*   *Bước 1: Mở Form* (100% - màu xám) ──► *Bước 2: Điền Thông Tin* (92% - màu tím) ──► *Bước 3: Tải Hồ Sơ* (86% - màu Cyan) ──► *Bước 4: Ký Xác Nhận* (84.2% - màu Cyan rực rỡ).
*   Giúp admin phát hiện ngay lập tức bước nhập liệu nào đang gây khó khăn nhất cho người điền.

---

### 📋 CỘT 3 (BÊN PHẢI - 20%): DANH SÁCH BẢN GHI MỚI NHẤT & CHI TIẾT
*   **Phía trên:** Thanh tìm kiếm bản ghi phẳng: `Tìm kiếm bản ghi...`.
*   **Danh sách Bản ghi mới nhất (Latest Submissions):**
    *   Các dòng chữ phẳng hiển thị thông tin tóm tắt của người điền mới nhất:
        *   `Nguyễn Văn A` - *Kỹ thuật* - `10 phút trước`
        *   `Trần Thị B` - *Kỹ thuật* - `24 phút trước`
        *   `Lê Văn C` - *Nhân sự* - `1 giờ trước`
*   **Luồng tương tác Slide Drawer:** Khi click vào một dòng bản ghi bất kỳ ở Cột 3, một **ngăn kéo kính mờ (Slide Drawer)** cực lớn sẽ trượt êm ái từ lề phải ra màn hình, hiển thị toàn bộ nội dung mà người đó đã điền (bao gồm ảnh CCCD đã tải lên, chữ ký tay điện tử) dưới dạng một văn bản kính mờ chuẩn chỉ và bóng bẩy.
