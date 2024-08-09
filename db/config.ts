import { defineDb, defineTable, column } from 'astro:db';

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
});

const Comment = defineTable({
  columns: {
    authorId: column.number({ references: () => Author.columns.id }),
    body: column.text(),
  }
});
const Commit = defineTable({
  columns: {
    path: column.text(),
    date:column.date(),
    content: column.text(),
  }
});
export default defineDb({
  tables: { Comment, Author ,Commit},
});
