# API Specification: User & Profile Service (CRUD)

## Overview

Tài liệu này mô tả API đầy đủ CRUD cho 2 nhóm chức năng:

* **Profile**
* **Users (List User + CRUD)**

Format mặc định: JSON
Auth: Bearer Token (nếu cần)
Base URL: `https://api.example.com/v1`

---

# 1. Profile API

Quản lý thông tin hồ sơ của người dùng hiện tại.

## 1.1. Lấy thông tin profile

**GET** `/profile`

**Response 200**

```json
{
  "id": 1,
  "name": "Nguyen Van A",
  "email": "a@example.com",
  "avatar": "https://example.com/avatar.png",
  "created_at": "2025-01-01T12:00:00Z"
}
```

---

## 1.2. Cập nhật profile

**PUT** `/profile`

**Request Body**

```json
{
  "name": "Nguyen Van Updated",
  "avatar": "https://example.com/newavatar.png"
}
```

**Response 200**

```json
{
  "message": "Profile updated successfully"
}
```

---

# 2. Users API

Quản lý danh sách người dùng và CRUD.

## 2.1. Danh sách user

**GET** `/users?limit=20&page=1`

**Response 200**

```json
{
  "page": 1,
  "limit": 20,
  "total": 100,
  "data": [
    {
      "id": 1,
      "name": "User A",
      "email": "a@example.com",
      "role": "admin",
      "created_at": "2025-01-01T12:00:00Z"
    },
    {
      "id": 2,
      "name": "User B",
      "email": "b@example.com",
      "role": "user",
      "created_at": "2025-02-01T12:00:00Z"
    }
  ]
}
```

---

## 2.2. Lấy thông tin một user theo ID

**GET** `/users/{id}`

**Response 200**

```json
{
  "id": 10,
  "name": "User X",
  "email": "userx@example.com",
  "role": "user",
  "created_at": "2025-03-10T12:00:00Z"
}
```

---

## 2.3. Tạo mới user (Create)

**POST** `/users`

**Request Body**

```json
{
  "name": "New User",
  "email": "new@example.com",
  "role": "user",
  "password": "123456"
}
```

**Response 201**

```json
{
  "id": 101,
  "message": "User created successfully"
}
```

---

## 2.4. Cập nhật user (Update)

**PUT** `/users/{id}`

**Request Body**

```json
{
  "name": "Updated User",
  "role": "admin"
}
```

**Response 200**

```json
{
  "message": "User updated successfully"
}
```

---

## 2.5. Xóa user (Delete)

**DELETE** `/users/{id}`

**Response 200**

```json
{
  "message": "User deleted successfully"
}
```

---

# 3. Error Response Format

Mọi lỗi sẽ trả về format chuẩn:

```json
{
  "error": true,
  "message": "Error description here",
  "code": 400
}
```

---

# 4. Notes

* Có thể mở rộng thêm: phân trang nâng cao, lọc theo role, search, sort.
* Có thể bổ sung JWT Auth hoặc API Key.
