# Project: Cửa sổ Modal Tương tác (Interactive Modal Windows)

Đây là một dự án front-end đơn giản minh họa cách tạo ra các cửa sổ modal (pop-up) tương tác bằng HTML, CSS và JavaScript thuần (vanilla JS). Giao diện được thiết kế hiện đại, responsive và hỗ trợ cả chế độ Sáng & Tối (Light & Dark Mode) tự động.



## 📜 Giới thiệu

Dự án này xây dựng một trang web đơn giản với 3 nút bấm, mỗi nút sẽ mở một cửa sổ modal khác nhau với nội dung liên quan đến bán hàng (Khuyến mãi, Sản phẩm mới, Hỗ trợ). Người dùng có thể đóng modal bằng nhiều cách khác nhau, mang lại trải nghiệm mượt mà và thân thiện.

---

## ✨ Tính năng nổi bật

* **🖥️ Giao diện Hiện đại:** Sử dụng CSS Variables, Flexbox và hiệu ứng `transition` để tạo ra một giao diện sạch sẽ, chuyên nghiệp.
* **🌗 Chế độ Sáng & Tối (Dark Mode) tự động:** Giao diện tự động chuyển đổi giữa nền sáng và tối dựa trên cài đặt hệ thống của người dùng (`prefers-color-scheme`).
* **📱 Responsive Design:** Tự động điều chỉnh bố cục để hiển thị tốt trên các thiết bị di động.
* **🖱️ Tương tác Đa dạng:** Người dùng có thể đóng modal bằng 3 cách:
    * Nhấn vào nút dấu `&times;`.
    * Nhấn vào lớp phủ mờ (overlay) bên ngoài.
    * Nhấn phím `Escape` trên bàn phím.
* **✍️ CSS Nâng cao:** Sử dụng pseudo-element (`::before`) để tạo ra một "header ảo" mà không cần thêm thẻ HTML, giữ cho cấu trúc gọn gàng.

---

## 🚀 Công nghệ sử dụng

* **HTML5:** Cho cấu trúc và nội dung trang.
* **CSS3:**
    * CSS Variables để quản lý theme.
    * Flexbox cho bố cục.
    * Media Queries cho responsive design.
    * Pseudo-elements (`::before`).
    * Transitions cho hiệu ứng mượt mà.
* **JavaScript (ES6+):**
    * JavaScript thuần (Vanilla JS), không dùng thư viện.
    * Thao tác với DOM (DOM Manipulation).
    * Xử lý sự kiện (Event Listeners).

---

## 🔧 Cài đặt và sử dụng

Đây là một dự án tĩnh, bạn không cần cài đặt phức tạp.

1.  **Clone repository này về máy của bạn:**
    ```bash
    git clone https://github.com/SaiCTruong/Modal-Shop.git
    ```
2.  **Đi đến thư mục dự án:**
    ```bash
    cd Modal-Shop
    ```
3.  **Mở file `index.html` trong trình duyệt của bạn.**

Đó là tất cả! Trang web sẽ hoạt động ngay lập tức.

---

## 📂 Cấu trúc thư mục

```
/ 
├── index.html 
├── style.css
└── script.js 
``` 
---

## ✍️ Tác giả

* **Phạm Công Trường** - [SaiCTruong](https://github.com/SaiCTruong)
