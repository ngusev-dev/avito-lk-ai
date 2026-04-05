FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --include=dev

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
USER node
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json ./
COPY tsconfig.json ./
COPY server.ts ./
COPY src ./src
COPY data ./data
EXPOSE 8080
CMD ["npm", "start"]
