function lonelyinteger(a) {
  let lonelyN = a.find((num) => a.indexOf(num) === a.lastIndexOf(num));
  console.log(lonelyN);
  return lonelyN;
}
