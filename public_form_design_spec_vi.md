# ĐẶC TẢ THIẾT KẾ CHI TIẾT: GIAO DIỆN BIỂU MẪU ĐIỀN THẬT (PUBLIC FORM VIEW)
*Dự án: FlexiForm - Động Cơ Biểu Mẫu | Phiên bản thiết kế: Premium Cosmic Obsidian 2.0 (Bản địa hóa)*

Tài liệu này đặc tả chi tiết giao diện hiển thị phía người dùng cuối (End-user) khi điền một biểu mẫu thực tế của doanh nghiệp. Biểu mẫu được dựng dựa trên cấu trúc đã xuất bản của **"Phiếu Đăng ký Ứng tuyển"** theo chuẩn thiết kế tối giản thượng lưu (Visual Density: 3 - Art Gallery Mode).

---

## 🎨 1. CONCEPT MỸ THUẬT & TRẢI NGHIỆM ĐỌC DỮ LIỆU
*   **Vibe chủ đạo:** Immersive (đắm chìm), tinh cậy, tối giản và cực kỳ dễ thao tác trên cả máy tính lẫn điện thoại di động (Mobile Responsive).
*   **Chất liệu Kính mờ cực đỉnh (Frosted Glass Refraction):**
    *   Chiếc form được bọc trong một **tấm kính mờ lớn đặt chính giữa màn hình**, nổi bật trên nền đen Obsidian sâu thẳm (`#030303`).
    *   Độ mờ kính: `rgba(255, 255, 255, 0.03)` kết hợp `backdrop-filter: blur(24px)`.
    *   Đường viền: 1px khúc xạ ánh sáng mờ ảo (`border-white/10`) giúp tấm kính hòa nhập tự nhiên vào nền tối mà không tạo cảm giác hào quang neon gaming giả tạo.

---

## 🧭 2. CHI TIẾT CẤU TRÚC BIỂU MẪU (CENTRAL FORM STRUCTURE)

Màn hình được căn giữa tuyệt đối, dẹp bỏ hoàn toàn các thanh điều hướng quản trị. Người dùng chỉ tập trung vào một việc duy nhất: **Điền biểu mẫu**.

```text
+-----------------------------------------------------------+
|                                                           |
|                 [LOGO ACME CORP] (Góc trái)               |
|                                                           |
|                Phiếu Đăng ký Ứng tuyển                    |
|             Vui lòng điền đầy đủ thông tin                |
|                                                           |
|   Họ và tên *                                             |
|   [ Nhập họ và tên của bạn                       ]        |
|                                                           |
|   Email liên hệ *                                         |
|   [ example@company.com                          ]        |
|                                                           |
|   Số điện thoại                                           |
|   [ Nhập số điện thoại                           ]        |
|                                                           |
|   CV / Hồ sơ ứng tuyển *                                  |
|   +---------------------------------------------------+   |
|   |          Kéo thả file vào đây hoặc Click          |   |
|   +---------------------------------------------------+   |
|                                                           |
|   Chữ ký xác nhận *                                       |
|   [ Sign here _____________________________ Xóa ]         |
|                                                           |
|                   [ GỬI ĐĂNG KÝ → ]                       |
|                                                           |
|      Mọi thông tin được bảo mật bởi FlexiForm.             |
|                                                           |
+-----------------------------------------------------------+
```

---

### A. PHẦN ĐẦU BIỂU MẪU (FORM HEADER)
*   **Logo Doanh nghiệp chủ quản (Brand Identity):** Góc trên cùng bên trái hiển thị Logo tối giản màu trắng của doanh nghiệp đang sử dụng FlexiForm (ví dụ: **Acme Corp**).
*   **Tiêu đề biểu mẫu (Outfit):** **`"Phiếu Đăng ký Ứng tuyển"`** (Chữ trắng tinh, size chữ lớn).
*   **Dòng mô tả phụ (Inter):** *"Vui lòng điền đầy đủ thông tin bên dưới"* (Màu xám nhạt).

---

### B. CÁC TRƯỜNG NHẬP LIỆU CƠ BẢN (LABELS SITTING ABOVE INPUTS)
Tuân thủ nghiêm ngặt quy chuẩn khoảng cách và nhãn nằm trên ô nhập của `design-taste-frontend`:
1.  **Trường Họ và tên:**
    *   *Nhãn:* **`Họ và tên *`** (Dấu sao màu đỏ đứt đoạn chỉ trường bắt buộc).
    *   *Ô nhập:* Nền đen trong suốt phẳng, viền xám tối Zinc-800.
    *   *Placeholder:* `Nhập họ và tên của bạn`.
2.  **Trường Email liên hệ:**
    *   *Nhãn:* **`Email liên hệ *`**
    *   *Placeholder:* `example@company.com`.
3.  **Trường Số điện thoại:**
    *   *Nhãn:* **`Số điện thoại`** (Không bắt buộc).
    *   *Placeholder:* `Nhập số điện thoại`.

---

### C. WIDGET NÂNG CAO (ADVANCED INPUTS)
1.  **Trường Tải Hồ Sơ (CV / Hồ sơ ứng tuyển):**
    *   *Nhãn:* **`CV / Hồ sơ ứng tuyển *`**
    *   *Khung kéo thả:* Nền đen kính mờ đứt đoạn, có icon đám mây tải lên ở giữa.
    *   *Thông điệp:* `Kéo thả file vào đây hoặc click để chọn file`.
2.  **Trường Chữ ký tay (Chữ ký xác nhận):**
    *   *Nhãn:* **`Chữ ký xác nhận *`**
    *   *Vùng ký tên:* Một bảng kính mờ tối giản. Có dòng chữ nghệ thuật *"Sign here"* màu Cyan mờ để chỉ dẫn người dùng ký bằng chuột hoặc màn hình cảm ứng di động.
    *   *Nút chức năng:* Dòng chữ mờ **`Xóa`** ở góc dưới bên phải để người dùng ký lại nếu vẽ sai.

---

### D. NÚT GỬI & CAM KẾT BẢO MẬT (FOOTER ACTIONS)
*   **Nút gửi biểu mẫu (Spring Action CTA):**
    *   Nút bấm: **`"Gửi đăng ký →"`** (Màu Cyan rực rỡ, chữ đen, bo góc 6px).
    *   *Hiệu ứng:* Click co giãn đàn hồi 2% (`scale-[0.98]`). Khi hệ thống tải dữ liệu lên server, thanh tiến trình màu trắng chạy mượt mà dọc nút.
*   **Cam kết bảo mật ở đáy:** 
    *   Dòng chữ nhỏ màu xám desaturated: **`"Mọi thông tin được mã hóa bảo mật tuyệt đối bởi FlexiForm"`** (Tăng độ uy tín và tin cậy cho ứng viên).

---

## ⚡ 3. SỰ ĐỒNG BỘ TUYỆT ĐỐI (THE MIRROR PRINCIPLE)
Trang 6 (Public Form View) chính là **tấm gương phản chiếu chân thực 100%** từ cấu trúc đã dựng ở Trang 4 (Form Builder). Mọi tùy chỉnh về độ nhòe kính mờ (blur), độ trong suốt (opacity), bo góc (radius) hay màu sắc accent (Cyan) được quản trị viên thiết lập ở Trang 4 sẽ ngay lập tức được kết xuất hiển thị đồng bộ tuyệt đối trên Trang 6 này, đảm bảo tính thẩm mỹ nhất quán của thương hiệu.
