# Game Engine bằng TypeScript

##  Mô tả

Đây là bài tập xây dựng một **game engine đơn giản** bằng TypeScript chạy trên trình duyệt, gồm:

- **Lớp cơ bản `Node`** để quản lý vị trí và kích thước
- **`Sprite`** để hiển thị hình ảnh
- **`Button`** để xử lý nút bấm tương tác
- **`Engine`** để tạo canvas, quản lý vòng lặp `requestAnimationFrame`, gọi `onLoad()` mỗi frame
- Một game mẫu `GameScene` sử dụng các thành phần trên để điều khiển nhân vật di chuyển

---

##  Ý tưởng hoạt động

- Khi người dùng bấm nút di chuyển (trái / phải / lên / xuống), nhân vật sẽ **di chuyển mượt từng chút một** cho đến khi đi đủ 40px thì tự dừng lại.
- Game engine sử dụng Gameloop() để tín toán dt. Việc sử dụng dt giúp game di chuyển đúng theo thời gian thực, không bị phụ thuộc vào FPS cao hay thấp.

## cách chạy 
- Cài live-server bằng npm install -g live-server.
- Chuyển đổi code qua js bằng npx tsc.
- Chạy bằng live-server.

