// data/dummyBlogs.js
export const dummyBlogs = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post #${i + 1}`,
  description: `Ovo je opis za blog broj ${i + 1}.`,
  creator: `Autor ${i + 1}`,
  date: `2025-05-${String(i + 1).padStart(2, "0")}`,
  image: `https://picsum.photos/seed/${i + 1}/300/200`,
}));
