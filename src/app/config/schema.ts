import { boolean, integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
export const Users:any = pgTable('users2', {
  id: serial("id").primaryKey(),
  name: varchar('name').notNull(),
  email:varchar("email").notNull(),
  imageUrl:varchar("imageUrl"),
  subscription:boolean("subscription").default(false),
})