# ĐẶC TẢ THIẾT KẾ CHI TIẾT: CỔNG XÁC THỰC (AUTH GATE) - BẢN DIỆT "MÙI AI" (DE-AI-SLOP)
*Dự án: FlexiForm | Phiên bản thiết kế: Premium Cosmic Obsidian 2.0 (Premium Agency Standard)*

Tài liệu này ghi nhận đợt kiểm toán giao diện (UI Audit) và đưa ra các quy tắc thiết kế nghiêm ngặt để **loại bỏ hoàn toàn các clichéd (mùi AI)** khỏi Trang 2, đưa giao diện tiệm cận chất lượng nghệ thuật của các startup công nghệ hàng đầu thế giới (Linear, Vercel, Stripe).

---

## 🚫 1. KIỂM TOÁN GIAO DIỆN: 4 ĐIỂM SÁO RỖNG AI (AI TELLS) CẦN DIỆT TẬN GỐC

| Điểm sáo rỗng trên Mockup | Tại sao nó trông "sặc mùi AI"? | Giải pháp Lột xác Thượng lưu (De-AI-slop) |
|---------------------------|----------------------------------|--------------------------------------------|
| **1. Đồ họa lưới mạng Plexus bên trái** | Hình lưới chấm tròn kết nối 3D là "quốc dân" sáo rỗng của AI vẽ tech. Nó vô hồn, sến súa và không ăn nhập gì với tính năng rẽ nhánh Node của FlexiForm. | **XÓA BỎ HOÀN TOÀN.** Thay thế bằng sơ đồ phẳng vector dạng 2D phẳng lì (flat vector), mô phỏng một nhánh logic thực tế (ví dụ: `Đầu vào ──► Điều kiện ──► Đầu ra`) sắc nét, tối giản. |
| **2. Viền Neon Glow sáng chói quanh Card** | Dải viền phát sáng Cyan/Purple bẹt và rực rỡ quá mức tạo cảm giác như "bàn phím LED gaming" rẻ tiền, mất đi tính sang trọng của doanh nghiệp. | **CẤM OUTER GLOW.** Thay thế viền neon bằng một đường viền mảnh đơn sắc 1px màu xám tối (`border-zinc-800`) hoặc kính trong suốt mảnh (`rgba(255,255,255,0.08)`). Chỉ duy nhất ô input đang active mới có viền Cyan mảnh phát sáng. |
| **3. Hàng 3 tính năng "vô thưởng vô phạt" ở chân trang** | Các khối *Bảo mật, Xác thực, Đồng bộ* với icon hình tròn (khiên, tia sét, đám mây) là khuôn mẫu AI Landing Page rẻ tiền. Trang login của Apple, Stripe hay Vercel tuyệt đối không nhét cái này ở chân trang. | **XÓA BỎ TOÀN BỘ HÀNG CHÂN TRANG.** Trang Đăng nhập là một cổng thông tin duy nhất và tập trung. Việc bỏ hàng này giúp giao diện có khoảng trống thở khổng lồ, tạo sự tự tin và tập trung tuyệt đối. |
| **4. Màu sắc nền quá sặc sỡ và chói mắt** | Dải màu tím/cyan chuyển động quá rực rỡ làm mỏi mắt và giảm độ tương phản của chữ. | **DESATURATE màu nền.** Hạ tông màu nền xuống mức tối đa. Nền là một màu off-black đen sâu thẳm (`#030303`), ánh sáng tím/cyan chỉ xuất hiện như một làn sương cực kỳ mờ ảo ở phía xa (`opacity: 0.15`), không được lấn át nội dung. |

---

## 🎨 2. THIẾT KẾ MỚI SAU KHI LỘT XÁC (ART GALLERY STANDARD)

### A. Khối Đồ Họa Logic Trực Quan Bên Trái (Thoáng - Sắc nét)
*   **Bố cục:** Không còn những chấm tròn 3D vô nghĩa. Thay vào đó là một sơ đồ phân nhánh phẳng (Flat Vector Logic Schema) được vẽ cực kỳ gọn gàng bằng các nét mảnh màu xám trắng:
    ```text
    [ Biểu mẫu tuyển dụng ] ───► ( Bộ lọc tự động ) ───► [ Duyệt ] (Màu xanh dịu)
                                         │
                                         └───► [ Từ chối ] (Màu xám mờ)
    ```
*   Sơ đồ này tĩnh, chỉ có các đường dây nối mảnh phát sáng Cyan nhấp nháy cực nhẹ. 
*   **Văn bản tiêu đề bên trái (Editorial Typography):** Dòng chữ Outfit đậm và dày màu trắng, căn lề trái vững chãi:
    *   **"Kiến tạo biểu mẫu. Kiểm soát dữ liệu."** (Size chữ lớn, sang trọng).

### B. Thẻ Xác Thực Kính Mờ Bên Phải (Ultra-Minimalist Card)
*   **Chất liệu:** Tấm kính mờ phẳng lì, không có viền hào quang phát sáng bên ngoài. Viền card chỉ là một đường zinc-800 mảnh 1px.
*   **Nội dung bên trong thẻ:**
    *   Logo chữ F tối giản màu trắng (không phát sáng neon xanh).
    *   Tiêu đề **"Chào mừng trở lại"** màu trắng tinh.
    *   **2 Ô nhập liệu sạch sẽ (Labels sitting above inputs):**
        *   Ô 1: Nhãn `TÀI KHOẢN` (màu xám tối) / Input nền đen trong suốt phẳng, viền xám mờ.
        *   Ô 2: Nhãn `MẬT KHẨU` / Input tương tự ô 1. Nút `Hiện` màu xám mờ nằm chìm tinh tế.
    *   Đường dẫn `Quên mật khẩu?` đặt kín đáo màu xám nhạt dưới góc phải.
*   **Nút Đăng nhập:** Bo góc vuông vắn hơn (6px), màu xanh Cyan desaturated (giảm độ chói), chữ đen. Khi bấm, nút hơi lún xuống 1px (`active:translate-y-[1px]`), không có hào quang phát sáng xung quanh.
*   **Dòng switch dưới cùng:** `"Chưa có tài khoản? Đăng ký ngay"` màu xám trắng mờ.

---

## ⚡ 3. LUỒNG TƯƠNG TÁC (MICRO-INTERACTIONS)
1.  **Focus Input:** Khi người dùng click vào ô nhập liệu, đường viền của riêng ô đó chuyển sang màu xanh Cyan mảnh 1px và sáng lên dịu nhẹ. Các ô khác giữ nguyên viền xám tối.
2.  **3D Flip:** Khi bấm đăng ký, thẻ kính mờ lật 3D trục Y 180 độ. Chuyển động xoay mượt mà, tĩnh lặng và chắc chắn nhờ spring physics (damping cao, không bị lắc qua lắc lại).
