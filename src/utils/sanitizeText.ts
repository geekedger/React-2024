const sanitizeDescription = (description: string): string => {
  const cleanDescription = Array.from(description)
    .filter((char) => {
      const code = char.charCodeAt(0);
      return code > 31 && code < 127;
    })
    .join("");
  const spacedDescription = cleanDescription.replace(/([.!?])(?=\S)/g, "$1 ");
  return spacedDescription;
};
export default sanitizeDescription;
