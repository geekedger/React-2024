const sanitizeDescription = (description: string): string => {
  // Заменяем управляющие символы на пробелы и добавляем пробелы после знаков препинания
  const cleanDescription = Array.from(description)
    .filter((char) => {
      const code = char.charCodeAt(0);
      return code > 31 && code < 127; // Оставляем только видимые символы
    })
    .join('');

  // Добавляем пробелы после точек и других знаков препинания, если их нет
  const spacedDescription = cleanDescription.replace(/([.!?])(?=\S)/g, '$1 ');

  return spacedDescription;
};

export default sanitizeDescription;
