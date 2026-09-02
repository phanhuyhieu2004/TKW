# FlexiFlow – AI-Native Workflow & Incentive Engine
## Tài liệu Giới thiệu Sản phẩm (Product Blueprint v1.0 - Final)
*Dùng cho: Bảo vệ đồ án / Portfolio / Phỏng vấn kỹ thuật / Demo doanh nghiệp*

---

## 1. Một câu định nghĩa sản phẩm (Elevator Pitch)

> **FlexiFlow là nền tảng AI-native Workflow & Incentive Engine giúp doanh nghiệp xây dựng quy trình thưởng và phê duyệt động bằng metadata, tự động hóa bằng AI và hỗ trợ ra quyết định từ dữ liệu thời gian thực.**

**Câu neo (Anchor Statement):**

> "FlexiFlow biến quy trình thưởng và phê duyệt từ thứ phải lập trình thành thứ có thể mô tả bằng tiếng Việt."

---

## 2. Bài toán dự án giải quyết (The Problem)

### Trước khi có FlexiFlow:
```
HR muốn đổi chính sách thưởng
↓
Viết email/ticket cho IT
↓
IT lên lịch, code, test, deploy
↓
2 tuần sau mới áp dụng được
```

Đây là bài toán thật của mọi doanh nghiệp có đội Sales hoặc quy trình phê duyệt nội bộ.

### Sau khi có FlexiFlow:
```
HR mô tả bằng tiếng Việt
↓
AI hiểu, sinh metadata
↓
Workflow chạy ngay
↓
5 phút
```

---

## 3. Tính năng cốt lõi (Core Features)

### 📌 A. AI Copilot – Sinh Workflow từ Ngôn ngữ Tự nhiên

**Pipeline thực tế (giải thích được khi phỏng vấn):**

```
Input (tiếng Việt):
"Nếu doanh số >100M → thưởng 15% → trưởng phòng duyệt"

↓ Gửi lên LLM (Gemini / GPT-4o) với Structured Output Prompt

↓ LLM trả về JSON đã được schema hóa:

{
  "condition": {
    "field": "revenue",
    "operator": ">",
    "value": 100000000
  },
  "bonusRate": 0.15,
  "approvalLevel": "manager"
}

↓ Schema Validation (backend kiểm tra trước khi lưu)

↓ React Flow nhận JSON → Tự động render Node trên Canvas
```

**Giới hạn rõ ràng (nên nói thẳng khi phỏng vấn):**
- AI có thể hiểu sai các yêu cầu phức tạp hoặc mơ hồ
- Người dùng cần review lại workflow trên Canvas trước khi kích hoạt
- MVP chỉ hỗ trợ tiếng Việt và các điều kiện đơn giản (so sánh số, chuỗi)

---

### 📌 B. Workflow Canvas – Trình thiết kế sơ đồ trực quan (React Flow)

```
Node 1: Trigger (Sales gửi deal)
↓
Node 2: Condition (revenue > 100,000,000?)
↓            ↓
Node 3: YES   Node 4: NO
(Thưởng 15%) (Không thưởng)
↓
Node 5: Approval (Trưởng phòng duyệt)
↓
Node 6: Accounting (Kế toán giải ngân)
```

Tính năng:
- Kéo thả Node, nối Edge thời gian thực
- Inline editing điều kiện
- Chạy thử workflow với dữ liệu test
- Lưu cấu hình dưới dạng Metadata JSON

---

### 📌 C. Metadata Formula Engine – Công thức động không cần code

**Concept cốt lõi (đây là điểm kỹ thuật mạnh nhất):**

Thay vì hard-code:
```javascript
// ❌ Hard-coded - phải sửa code mỗi khi đổi chính sách
if (revenue > 100000000) {
  bonus = revenue * 0.15;
}
```

FlexiFlow dùng Metadata:
```json
// ✅ Configurable - HR tự chỉnh không cần IT
{
  "condition": { "field": "revenue", "operator": ">", "value": 100000000 },
  "bonusFormula": "revenue * bonusRate",
  "bonusRate": 0.15
}
```

Backend đọc Metadata và **parse biểu thức bằng expression parser** (ví dụ: thư viện `expr-eval` hoặc custom parser tự viết) để tính toán an toàn tại runtime. **Không dùng `eval()` trực tiếp** vì lý do bảo mật (code injection).

**Khi chính sách đổi từ 15% → 20%:**
- Không cần sửa code
- Không cần deploy lại
- HR chỉnh con số trong giao diện → Hệ thống áp dụng ngay

---

### 📌 D. Transaction Grid – AG-Grid xử lý dữ liệu lớn

Use case thực tế:
```
10,000 giao dịch doanh số
↓
Lọc theo: Phòng ban / Tháng / Nhân viên
↓
Inline edit: Sửa doanh số trực tiếp trên bảng
↓
AG-Grid đọc Metadata Formula → Tính lại tiền thưởng ngay (Client-side)
↓
Batch Approval: Tick chọn 100 dòng → Duyệt hàng loạt 1 click
```

Tại sao AG-Grid?
- Row Virtualization: Chỉ render các dòng đang hiển thị trong viewport, giúp xử lý hiệu quả tập dữ liệu lớn (~10k+ records tùy cấu hình phần cứng)
- Column Grouping: Nhóm theo phòng ban, tính tổng tự động
- Inline Editing + Real-time Recalculation

---

### 📌 E. Rule-based Insight Engine – Phát hiện bất thường

**Cách định nghĩa đúng khi phỏng vấn:**
> "Rule-based kết hợp Statistical Threshold: so sánh dữ liệu hiện tại với lịch sử và áp dụng ngưỡng cảnh báo, không dùng ML model."

**Tầng 1 – Rule-based (đơn giản, giải thích được ngay):**
```
Nếu doanh số tháng hiện tại > 3x trung bình 3 tháng trước
→ ⚠️ Cảnh báo bất thường
```

**Tầng 2 – Statistical Threshold (khi được hỏi sâu hơn):**
```
Doanh số tháng hiện tại: 600M
Trung bình 3 tháng trước (μ): 120M
Độ lệch chuẩn (σ): 15M

Z-score = (600M - 120M) / 15M = 32

Ngưỡng cảnh báo: Z > 3
→ ⚠️ Phát hiện bất thường
```

**Tại sao chọn cách này thay vì ML?**
- Không cần training data
- Dễ giải thích cho người dùng phi kỹ thuật
- Đủ hiệu quả cho MVP với dữ liệu giao dịch có chu kỳ tháng
- Có thể nâng cấp lên Isolation Forest ở Phase 2 nếu cần

---

### 📌 F. Employee Portal – Cổng thông tin Nhân viên

Nhân viên Sales có thể:
- Xem KPI cá nhân theo tháng (biểu đồ line chart)
- Xem chi tiết tính thưởng (hiển thị công thức đã áp dụng)
- Theo dõi tiến độ phê duyệt (trạng thái Node hiện tại)
- Ký xác nhận bảng thưởng bằng chữ ký điện tử nét vẽ tay

---

## 4. Kiến trúc kỹ thuật (Technical Architecture)

```
Frontend (React + TypeScript)
├── React Flow (Workflow Canvas)
├── AG-Grid (Transaction Grid)
├── Recharts (Analytics Charts)
└── Signature Pad (Electronic Sign)

Backend (Spring Boot / Java)
├── Metadata Engine (JSON formula parser + evaluator)
├── Workflow State Machine (xử lý trạng thái Node)
├── LLM Integration (Gemini API → Structured JSON output)
└── Rule-based Insight Engine (Z-score anomaly detection)

Database (MySQL)
├── workflows (cấu hình Node JSON)
├── transactions (dữ liệu giao dịch)
├── approvals (lịch sử phê duyệt)
└── users / roles (phân quyền)
```

---

## 4b. Luồng dữ liệu (Data Flow)

*Câu hỏi phỏng vấn thường gặp: "Dữ liệu chạy như thế nào trong hệ thống?"*

```
[1] Admin nhập lệnh tiếng Việt
        ↓
[2] AI Copilot (LLM API)
    → Parse → Structured JSON
        ↓
[3] Schema Validation (Backend)
    → Kiểm tra tính hợp lệ của JSON
        ↓
[4] Workflow Engine lưu vào DB
    (bảng: workflows)
        ↓
[5] React Flow đọc JSON
    → Render Node/Edge trên Canvas
        ↓
[6] Sales Transaction được import (CSV/manual)
    → Lưu vào bảng: transactions
        ↓
[7] Metadata Formula Engine
    → Đọc công thức từ workflow
    → Expression Parser tính bonus
    → Ghi kết quả vào transactions.bonus_amount
        ↓
[8] AG-Grid đọc transactions
    → Hiển thị, cho phép Inline Edit
    → Recalculate client-side ngay khi sửa
        ↓
[9] Approval State Machine
    → Manager duyệt → cập nhật status
    → Ghi vào bảng: approvals
        ↓
[10] Employee Portal
    → Query transactions + approvals
    → Hiển thị KPI, bonus, trạng thái
    → Thu thập chữ ký điện tử
        ↓
[11] Rule-based Insight Engine
    → Chạy định kỳ (batch / trigger)
    → So sánh transaction hiện tại vs lịch sử
    → Sinh cảnh báo nếu vượt ngưỡng
```

---

## 5. So sánh với đối thủ (Competitive Positioning)

|                           | n8n / Zapier | CaptivateIQ / Spiff | **FlexiFlow** |
|---------------------------|:---:|:---:|:---:|
| Workflow trực quan        | ✅  | ❌  | ✅  |
| Công thức thưởng động     | ❌  | ✅  | ✅  |
| AI sinh workflow từ text  | ⚠️  | ❌  | ✅  |
| Metadata Engine           | ⚠️  | ⚠️  | ✅  |
| AG-Grid hiệu năng cao     | ⚠️  | ⚠️  | ✅  |
| Self-hosted / On-premise  | ✅  | ❌  | ✅  |
| Insight / Cảnh báo        | ❌  | ❌  | ✅  |

**Vùng trắng (Blue Ocean) của FlexiFlow:**
> Không một công cụ nào đồng thời có: Workflow Canvas trực quan + Metadata Formula Engine + AI Copilot tiếng Việt + AG-Grid thời gian thực + Self-hosted.

---

## 6. Giá trị mang lại (Business Value)

### Tiết kiệm thời gian
- Đổi chính sách thưởng: Từ 2 tuần → 5 phút
- Phê duyệt hàng loạt: Từ email qua lại → 1 click

### Giảm sai sót
- Công thức tính toán nhất quán, không phụ thuộc vào Excel thủ công
- Lịch sử phê duyệt đầy đủ, audit trail rõ ràng

### Không phụ thuộc đội IT
- HR/Sales Ops tự cấu hình quy trình
- IT chỉ cần setup ban đầu

---

## 7. Kịch bản Demo (Wow Scenario)

**Tình huống: Giám đốc Sales muốn tạo chương trình thưởng mới trong 5 phút.**

```
Bước 1 (Admin - AI Copilot):
Gõ: "Team Sales tháng 6, nếu đạt >150M thưởng 18%, trưởng phòng duyệt, kế toán ký"

↓ AI sinh JSON → Canvas tự render 4 Node kết nối nhau

Bước 2 (Admin - Review Canvas):
Kiểm tra workflow trên màn hình, chỉnh ngưỡng 150M → 120M bằng click

↓ Kích hoạt workflow

Bước 3 (AG-Grid):
Import file Excel doanh số tháng 6
AG-Grid đọc Metadata → Tự tính thưởng cho 200 nhân viên ngay lập tức

Bước 4 (Approval):
Trưởng phòng nhận thông báo, mở danh sách, batch approve 1 click

Bước 5 (Employee Portal):
Nhân viên mở portal, thấy thưởng đã được duyệt, ký xác nhận bằng tay
```

**Mục tiêu:** Giảm thời gian từ vài ngày/tuần xuống còn vài phút trong điều kiện dữ liệu đầu vào hợp lệ.

---

## 8. Giới hạn MVP (Honest Scope)

Để tránh over-promise khi phỏng vấn, nói thẳng những gì MVP KHÔNG làm:
- Không tích hợp trực tiếp với ERP/HRM bên ngoài (chỉ import CSV/Excel)
- AI Copilot chỉ hỗ trợ quy trình có cấu trúc đơn giản (1-2 điều kiện)
- Không tự gửi email/Slack thông báo (chỉ hiển thị trong hệ thống)
- Chữ ký điện tử chưa có giá trị pháp lý theo Luật Giao dịch điện tử

---

*Tài liệu này được dùng làm nguồn tham khảo chính cho toàn bộ quá trình thiết kế, phát triển và trình bày dự án FlexiFlow.*
