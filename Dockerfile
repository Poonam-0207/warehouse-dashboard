# Use a lightweight Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]
