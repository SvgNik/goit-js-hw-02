function getElementWidth(content, padding, border) {
  const contentValue = parseFloat(content);
  const puddingVelue = parseFloat(padding);
  const borderVelue = parseFloat(border);

  const totalWidth = contentValue + puddingVelue * 2 + borderVelue * 2;

  return totalWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
