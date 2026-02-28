FROM node:20-alpine AS build

ARG VITE_MICROSOFT_CLARITY
ARG VITE_GOOGLE_ANALYTICS
ENV VITE_MICROSOFT_CLARITY=$VITE_MICROSOFT_CLARITY
ENV VITE_GOOGLE_ANALYTICS=$VITE_GOOGLE_ANALYTICS

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM gcr.io/distroless/nodejs20-debian12
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/.output ./.output
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json .

EXPOSE 3000
CMD ["./.output/server/index.mjs"]
