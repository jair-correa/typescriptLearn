type Adder = {
  (x: number): number; //assinatura de metodo
  (x: number, y: number): number;
  (...arg: number[]): number;
};

/*
Aqui estamos definindo um tipo de função com diferentes assinaturas (sobrecarga):

(x: number): number; → Aceita apenas um número x e retorna um número.

(x: number, y: number): number; → Aceita dois números x e y, retornando um número.

(...arg: number[]): number; → Aceita uma quantidade variável de números e retorna um número.

Isso significa que qualquer função que seja atribuída a Adder precisa ser compatível com essas assinaturas.


*/

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};


/*

Aqui está a função adder, que segue as regras do tipo Adder. Vamos detalhar seu funcionamento:

Parâmetros da função
x: number → Obrigatório.

y?: number → Opcional (indicado pelo ?).

...args: number[] → Rest parameter (...args), permitindo passar múltiplos números.

Lógica da função
Se houver mais de dois argumentos (args.length > 0):

Usa reduce() para somar todos os valores em args.

Soma isso com x e y (caso y seja undefined, assume 0).

Caso contrário (apenas x e possivelmente y):

Retorna a soma de x com y (ou 0, se y for undefined).
*/

//Exemplo de uso

console.log(adder(5));        // 5
console.log(adder(5, 3));     // 8
console.log(adder(5, 3, 2));  // 10
console.log(adder(1, 2, 3, 4, 5)); // 15
