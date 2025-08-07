export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // Заменяем пробелы на дефисы
    .replace(/[^\w\-]+/g, '')    // Удаляем все не-слова и не-дефисы
    .replace(/\-\-+/g, '-')      // Заменяем множественные дефисы на один
    .replace(/^-+/, '')          // Удаляем дефисы в начале
    .replace(/-+$/, '');         // Удаляем дефисы в конце
} 