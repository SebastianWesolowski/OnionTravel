export default function flexUnit({
  fontSize = '16',
  weight = '400',
  lineHeight = null,
  letterSpacing = -20,
} = {}) {
  const exportLineHeight = () => {
    return `line-height: ${lineHeight}px `;
  };
  const exportLetterSpacing = () => {
    // console.log(letterSpacing);
    // console.log(letterSpacing.indexOf("px"));
    return `letter-spacing: ${letterSpacing / 1000}em`;
  };

  const exportWidth = () => {
    let checkWeight = weight;
    let convertWeight = weight;

    if (typeof weight === "string"){
      checkWeight = weight.toLocaleLowerCase();
    }

    if (checkWeight === 'thin' || checkWeight ===' 100' || checkWeight === 100) { convertWeight = 100;}
    if (checkWeight === 'light' || checkWeight === '300' || weight === 300) {convertWeight = 300;}
    if (checkWeight === 'regular' || checkWeight === '400' || weight === 400) {convertWeight = 400;}
    if (checkWeight === 'medium' || checkWeight === '500' || weight === 500) {convertWeight = 500;}
    if (checkWeight === 'bold' || checkWeight === '700' || weight === 700) {convertWeight = 700;}
    if (checkWeight === 'black' || checkWeight === '900' || weight === 900) {convertWeight = 900;}
    return `font-weight: ${convertWeight};`;
  };

  return `
    font-size: ${fontSize}px;
    ${exportLineHeight()}
    ${exportLetterSpacing()}
    ${exportWidth()}
    `;
}
