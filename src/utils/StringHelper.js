function numberWithDot(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function numberWithK(x) {
  return (x / 1000).toFixed(0) + "K";
}

export { numberWithDot, numberWithK };
