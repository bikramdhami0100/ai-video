import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/app/config/schema.ts",
  out: "./drizzle",
  dbCredentials:{
    url:"postgresql://ai-short-video_owner:VMuE37UnKbxj@ep-super-morning-a50zdmmy.us-east-2.aws.neon.tech/ai-short-video?sslmode=require"
  }
});