# Sử dụng image Node.js
FROM node:22-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và cài đặt dependencies
COPY package*.json ./
RUN npm install --production

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Lệnh mặc định khi chạy container
CMD ["npm", "start"]
