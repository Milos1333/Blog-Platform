import { categories } from "./categoriesData";

export const dummyBlogs = Array.from({ length: 0 }, (_, i) => {
  const categoryObj = categories[i % categories.length];
  return {
    id: i + 1,
    title: `Blog Post #${i + 1}`,
    description: `Ovo je opis za blog broj ${i + 1}.`,
    creator: `Autor ${i + 1}`,
    date: `2025-05-${String((i % 30) + 1).padStart(2, "0")}`,
    image: `https://picsum.photos/seed/${i + 1}/300/200`,
    categoryId: categoryObj.id,
    category: categoryObj.name, // DODAJ OVO
  };
});
