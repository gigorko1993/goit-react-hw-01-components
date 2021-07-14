const colorRandomaizer = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};
const makeRandomRGBColor = () => {
  const r = colorRandomaizer(0, 255);
  const g = colorRandomaizer(0, 255);
  const b = colorRandomaizer(0, 255);
  const colorRGB = `rgb(${r},${g},${b})`;
  return colorRGB;
};
export default makeRandomRGBColor;
