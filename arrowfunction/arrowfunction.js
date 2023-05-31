const sumar = (a, b) => a + b;

console.log(sumar(9, 9));

const funcionDeVariasLineas = () => {
  console.log("1. funcionDeVariasLineas");
  console.log("2. funcionDeVariasLineas");
  console.log("3. funcionDeVariasLineas");
};

funcionDeVariasLineas();

const arrays = [1, 2, 3, 4, 5];

arrays.forEach((el, index) => {
  console.log(`${el} esta en la posición ${index}`);
});
