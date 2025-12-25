// Minimal Prisma config compatible with modern Prisma CLI and without
// requiring 'prisma/config' or 'dotenv' during `npm install`.
// The Prisma CLI will still read `prisma/schema.prisma` by default.

const config = {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    // Use runtime env var directly; Prisma will resolve DATABASE_URL.
    url: process.env.DATABASE_URL,
  },
};

export default config;
