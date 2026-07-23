# ĐẶC TẢ THIẾT KẾ CHI TIẾT: KHÔNG GIAN QUẢN TRỊ & KIẾN TẠO SƠ ĐỒ (ADMIN WORKSPACE)
*Dự án: FlexiForm - Động Cơ Biểu Mẫu | Phiên bản thiết kế: Premium Cosmic Obsidian 2.0 (Bản địa hóa)*

Tài liệu này đặc tả chi tiết từng khu vực giao diện, sơ đồ phân bổ màn hình (Layout), phông chữ, màu sắc và luồng tương tác thời gian thực cho **Trang thứ ba (Admin Workspace - Bảng điều khiển quản trị và thiết kế sơ đồ Node)** theo chuẩn thiết kế tối giản thượng lưu (Visual Density: 4).

---

## 🎨 1. CONCEPT & HỆ THỐNG MÀU SẮC (Developer-first Workspace)
*   **Vibe chủ đạo:** Chính xác, chuyên nghiệp, mạnh mẽ và gọn gàng tuyệt đối.
*   **Cấu trúc phân vùng (Anti-Card Overuse):** Áp dụng quy tắc **DASHBOARD HARDENING** của `design-taste-frontend`. Loại bỏ hoàn toàn các thẻ card đóng hộp rườm rà. Toàn bộ không gian làm việc được phân tách bằng các đường kẻ 1px màu xám tối (`border-zinc-800 / border-zinc-900`) chạy dọc và ngang màn hình, tạo nên một kết cấu phẳng lỳ, liền mạch như một bảng điều khiển của tàu vũ trụ.
*   **Hệ màu sắc tối giản:**
    *   Màu nền tổng thể: Đen Obsidian sâu thẳm (`#030303`).
    *   Màu phân vùng Workspace: Zinc-950 (`#09090B`).
    *   Đường nét kết nối (Edges): Xanh Cyan (`#00F0FF`) và Tím Neon (`#8B5CF6`).

---

## 🧭 2. BỐ CỤC CHIA 3 PHÂN VÙNG (3-PANE LAYOUT)
Màn hình được chia làm 3 cột chức năng rành mạch từ trái qua phải, tối ưu hóa diện tích hiển thị trên máy tính:

```text
+------------------------------------------------------------------------------------+
|  [LOGO] Dự án v   |   Thanh công cụ Canvas (Thêm Node, Chạy thử, Xuất Schema)      |
+-------------------+-------------------------------------------------+--------------+
|                   |                                                 |              |
|  CỘT 1 (20%)      |   CỘT 2 (60%)                                   |  CỘT 3 (20%) |
|  Thư mục động cơ  |   Trình thiết kế Sơ đồ Node trực quan           |  Thuộc tính  |
|  & Biểu mẫu       |   (React Flow Canvas - Boundless Grid)          |  & Trợ lý AI |
|                   |                                                 |              |
|                   |                                                 |              |
|                   |                                                 |              |
+-------------------+-------------------------------------------------+--------------+
```

---

### 📂 CỘT 1 (BÊN TRÁI - 20% DIỆN TÍCH): THƯ MỤC BIỂU MẪU & LOGIC
Nơi quản lý toàn bộ các biểu mẫu và động cơ rẽ nhánh đang có của doanh nghiệp.
*   **Phía trên:** Dropdown lựa chọn dự án hiện tại với viền Zinc-800 mờ.
*   **Ô tìm kiếm:** Thiết kế phẳng, placeholder: `Tìm kiếm động cơ...`.
*   **Danh sách Động cơ (List Items):**
    *   Các dòng chữ phẳng nằm xen kẽ bằng đường kẻ mỏng 1px dưới chân.
    *   Mỗi dòng gồm Tên biểu mẫu (ví dụ: *"Tuyển dụng Nhân sự"* hoặc *"Đăng ký Thành viên"*) và một **chấm tròn chỉ trạng thái hoạt động (Status Dot)** màu xanh lá nhấp nháy phát sáng nhẹ theo chu kỳ nhịp thở thời gian thực.

---

### 🎨 CỘT 2 (TRUNG TÂM - 60% DIỆN TÍCH): KHÔNG GIAN CANVAS THIẾT KẾ NODE (REACT FLOW)
Đây là khu vực "đắt giá" nhất của trang quản trị, nơi sơ đồ Node rẽ nhánh hiển thị vô hạn (Boundless Grid Canvas).
*   **Nền lưới (Dotted Grid):** Một lớp lưới các điểm chấm màu xám trắng siêu mờ ảo (`background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)` với khoảng cách điểm 24px) tạo cảm giác không gian kỹ thuật sâu thẳm.
*   **Các Node Kính mờ Vật lý (Refraction Nodes):**
    Các Node được thiết kế dạng thẻ kính mờ vuông vức, bo góc 6px, viền 1px khúc xạ ánh sáng:
    *   **Node 1 (Đầu vào - Input):** `[Biểu mẫu tuyển dụng]` - Chứa icon văn bản tối giản.
    *   **Node 2 (Logic rẽ nhánh):** `[Bộ lọc tự động]` - Hình thoi màu xám, hiển thị luật logic: `Nếu (Email chứa @company)`.
    *   **Node 3 (Kết quả 1):** `[Duyệt]` - Viền xanh lá mờ, icon dấu tích.
    *   **Node 4 (Kết quả 2):** `[Từ chối]` - Viền xám mờ, icon dấu X.
*   **Các Dây nối Logic (Edges):**
    *   Các đường cong Bezier màu xanh Cyan nối các điểm đầu vào/đầu ra của Node.
    *   **Marching Ants Effect:** Các chấm sáng nhỏ chạy liên tục dọc dây nối để chỉ luồng chảy của dữ liệu.
*   **Thanh điều khiển nổi (Floating Control):** Ở góc dưới bên trái canvas là cụm nút Zoom-in, Zoom-out, Fit-view và bản đồ thu nhỏ (Mini-map) kính mờ tinh tế.

---

### ⚙️ CỘT 3 (BÊN PHẢI - 20% DIỆN TÍCH): THÔNG SỐ NODE & TRỢ LÝ AI COPILOT
Cột chứa các công cụ điều khiển chi tiết và tính năng cấu hình nhanh bằng AI.

#### A. Cấu hình Thuộc tính Node (Node Properties)
*   Hiển thị chi tiết thông số của Node đang được click chọn trên Canvas.
*   **Thiết kế Form phẳng:** Tên nhãn (Label) viết hoa màu xám nhạt nằm phía trên ô input. Ô input nền đen phẳng, bo góc vuông vắn 4px.

#### B. Trợ lý AI Động Cơ (AI Copilot Panel - Cạnh Dưới Cột 3)
*   **Visual:** Một khung kính mờ nằm cố định ở đáy cột 3, có dải sáng tím mờ tỏa ra từ phía sau để tạo điểm nhấn công nghệ.
*   **Ô nhập lệnh Prompt (AI Input):** 
    *   Nơi quản trị viên có thể gõ yêu cầu bằng tiếng Việt tự nhiên để AI tự động vẽ Node.
    *   Placeholder: `"Mô tả logic bạn muốn thêm..."` (ví dụ: *"Nếu tuổi nhỏ hơn 18 thì chuyển hướng sang trang Từ chối"*).
    *   **Nút Kích Hoạt:** Một icon mũi tên Cyan mảnh. Khi bấm gửi, AI sẽ biên dịch thời gian thực và tự động tạo mới các Node, nối dây trực tiếp trên Canvas trung tâm một cách ma thuật.

---

## ⚡ 3. LUỒNG THAO TÁC NGƯỜI DÙNG THỜI GIAN THỰC (USER FLOW)

1.  **Chọn biểu mẫu:** Người dùng click vào một dự án ở Cột 1.
2.  **Khám phá sơ đồ:** Canvas Cột 2 tự động tải sơ đồ Node với hiệu ứng thác đổ mượt mà (Staggered Waterfall Reveal).
3.  **Tương tác kéo thả:** Người dùng có thể click giữ để di chuyển các Node trên lưới canvas. Nhờ thuật toán đàn hồi vật lý (Spring Physics), các dây nối sẽ uốn lượn co giãn một cách cực kỳ êm ái và tự nhiên theo vị trí kéo thả.
4.  **Cấu hình nhanh bằng AI:** Người dùng gõ câu lệnh vào Trợ lý AI ở Cột 3. Canvas trung tâm tự động sinh Node mới, nối dây và tự động căn chỉnh khoảng cách các Node trên lưới (Auto-layout) mà không cần người dùng tự tay sắp xếp.
