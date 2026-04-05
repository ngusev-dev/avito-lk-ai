FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci


FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json* ./
COPY src ./src
COPY tsconfig.json* ./
COPY tsconfig.*.json ./
COPY vite.config.ts ./
COPY index.html ./
RUN npm run build


FROM node:20-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
RUN  npm install serve@^14.2.6 --omit=dev
EXPOSE 4173
COPY --from=build /app/dist ./dist
CMD ["npx", "serve", "-s", "dist", "-l", "4173"]
