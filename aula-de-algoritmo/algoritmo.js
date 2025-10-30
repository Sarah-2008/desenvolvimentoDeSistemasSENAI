let soma = 0;

for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt(`Digite o ${i + 1}º número:`), 10);
  soma += numero;
}

console.log("Soma total:", soma);
