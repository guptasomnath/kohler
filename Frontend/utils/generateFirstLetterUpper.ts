export const generateFirstLetterUpper = (text: string) => {
    const array = text.split("-");

    let finalText = "";
    array.forEach((item) => {
      let firstLetter = item[0];
      finalText += firstLetter.toLocaleUpperCase();
      finalText += item.substring(1, item.length) + " ";
    });

    return finalText.trim();
  };