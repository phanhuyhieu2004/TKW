# ĐẶC TẢ THIẾT KẾ CÁC TRANG MỞ RỘNG: PHÂN KHÚC DOANH NGHIỆP CAO CẤP (ENTERPRISE EXTENSION SPEC)
*Dự án: FlexiForm - Động Cơ Biểu Mẫu | Phiên bản thiết kế: Premium Cosmic Obsidian 2.0 (Bản địa hóa)*

Tài liệu này đặc tả chi tiết 4 trang giao diện nâng cao phân khúc Doanh nghiệp (Enterprise & Commercial SaaS) của FlexiForm, biến sản phẩm từ một công cụ dựng Form đơn thuần trở thành một **Hệ điều hành dữ liệu biểu mẫu B2B triệu đô** thực thụ.

---

## 🧭 BỐ CỤC 4 TRANG MỞ RỘNG ĐẲNG CẤP DOANH NGHIỆP

### 📌 TRANG 7: TRUNG TÂM QUẢN LÝ DỮ LIỆU SỐ LƯỢNG LỚN (ADVANCED DATA HUB - AG-GRID STYLE)
*   **Mục tiêu:** Giải quyết bài toán quản trị hàng vạn bản ghi của các doanh nghiệp lớn bằng một lưới dữ liệu siêu hiệu năng.
*   **Layout:** Cột 1 (Sidebar danh sách Form) và Phân vùng trung tâm chiếm 80% diện tích màn hình hiển thị một bảng lưới dữ liệu cực lớn.
*   **Chi tiết thiết kế:**
    *   **Lưới dữ liệu AG-Grid phẳng:** Sử dụng phông chữ Inter cỡ nhỏ dễ đọc. Các hàng cách nhau bằng đường kẻ Zinc-900 1px. Không có bóng viền, tối giản tuyệt đối.
    *   **Tính năng cao cấp:**
        *   Bộ lọc nhanh theo cột (Excel-like Filtering): Lọc theo tên, trạng thái duyệt, bộ phận tuyển dụng.
        *   Batch Action Bar: Khi tick chọn nhiều hàng, một thanh công cụ kính mờ lơ lửng xuất hiện ở đáy màn hình với các nút: `Duyệt hàng loạt (Cyan)`, `Từ chối hàng loạt`, `Xuất Excel chọn lọc`.
        *   Trạng thái tải dữ liệu vô hạn (Infinite Scroll) mượt mà bằng thanh Skeletal Loader.

---

### 📌 TRANG 8: KHÔNG GIAN KẾT NỐI VÀ TỰ ĐỘNG HÓA QUY TRÌNH (INTEGRATION & WEBHOOK ENGINE)
*   **Mục tiêu:** Tạo nên sự khác biệt thương mại bằng cách liên kết FlexiForm với toàn bộ hệ sinh thái phần mềm thế giới.
*   **Layout:** Bố cục 2 cột phẳng Zinc-900.
*   **Chi tiết thiết kế:**
    *   **Cột bên trái (20%):** Quản lý API Keys doanh nghiệp và các endpoint Webhook.
    *   **Cột bên phải (80%):** Kho ứng dụng liên kết (Integration Marketplace) hiển thị dưới dạng các thẻ kính mờ siêu thoáng:
        *   `Slack Integration`: *Tự động gửi thông báo tin nhắn khi có chữ ký mới.*
        *   `Salesforce CRM`: *Đẩy thông tin ứng viên thành một Lead mới trong Salesforce.*
        *   `Google Sheets Live Sync`: *Tự động đồng bộ dòng dữ liệu thời gian thực.*
        *   `Gmail / SMTP`: *Gửi email phản hồi tự động sử dụng máy chủ của doanh nghiệp.*
    *   **Webhook Developer Console:** Khung hiển thị Log Webhook dạng dòng code Fira Code để lập trình viên theo dõi lịch sử gửi nhận payload JSON (phát sáng xanh/đỏ theo trạng thái HTTP 200/500).

---

### 📌 TRANG 9: CẤU HÌNH WHITE-LABEL & TÊN MIỀN RIÊNG (CUSTOM DOMAIN & BRAND PORTAL)
*   **Mục tiêu:** Đòn quyết định để nhượng quyền thương mại (Franchise/Self-hosted White-label), cho phép các doanh nghiệp biến FlexiForm thành sản phẩm mang thương hiệu của riêng họ.
*   **Layout:** Cột điều khiển phẳng lỳ chia theo các tab cấu hình dọc.
*   **Chi tiết thiết kế:**
    *   **Cấu hình Tên miền riêng (Custom Domain):**
        *   Ô nhập: `Nhập tên miền của bạn` (ví dụ: `forms.acmecorp.com`).
        *   Khung hiển thị cấu hình bản ghi DNS mờ ảo, hướng dẫn trỏ bản ghi `CNAME` hoặc `A Record` về IP của FlexiForm.
        *   Nút **`"Kiểm tra kết nối và Kích hoạt SSL →"`** màu xanh Cyan phát sáng nhẹ.
    *   **Thiết lập SMTP Email doanh nghiệp:** Cấu hình máy chủ mail riêng để email xác nhận gửi đi dưới tên miền thương hiệu doanh nghiệp thay vì gửi từ FlexiForm.
    *   **Tải lên bộ nhận diện riêng (Brand Identity):** Thay đổi Logo hiển thị trên Public Form, favicon, và cấu hình bảng màu thương hiệu mặc định cho toàn bộ các form.

---

### 📌 TRANG 10: KHÔNG GIAN THUÊ BAO & QUẢN LÝ THÀNH VIÊN (TENANT & IAM PORTAL)
*   **Mục tiêu:** Quản lý gói cước (SaaS Billing), bản quyền License và phân quyền nhân viên cấp dưới (IAM).
*   **Layout:** 3 phân vùng phẳng ngăn nắp.
*   **Chi tiết thiết kế:**
    *   **Bảng quản lý Bản quyền (License Status):** Hiển thị trạng thái gói dịch vụ (ví dụ: `Enterprise Plan - Key Active`), giới hạn số lượng biểu mẫu được tạo, dung lượng băng thông tệp đính kèm đã sử dụng trong tháng thông qua một thanh tiến trình (Progress Bar) kính mờ Cyan phát sáng tinh tế.
    *   **Quản lý Phân quyền thành viên (IAM Console):**
        *   Danh sách nhân viên quản trị cấp dưới trong công ty.
        *   Dropdown phân quyền chi tiết cho từng người: `Chủ sở hữu (Owner)`, `Trình thiết kế (Designer)`, `Người kiểm duyệt dữ liệu (Viewer)`.
        *   Nút **`"Mời thành viên mới"`** tối giản.
