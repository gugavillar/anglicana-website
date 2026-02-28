FROM node:20-slim AS base
WORKDIR /app
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS build

ARG VITE_MICROSOFT_CLARITY
ARG VITE_GOOGLE_ANALYTICS

ENV VITE_MICROSOFT_CLARITY=$VITE_MICROSOFT_CLARITY
ENV VITE_GOOGLE_ANALYTICS=$VITE_GOOGLE_ANALYTICS

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/.output ./.output

EXPOSE 3000

CMD ["./.output/server/index.mjs"]