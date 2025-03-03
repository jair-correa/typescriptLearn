function semRetorno(...args: string[]): void {
  console.log(args.join(""));
}
const pessoa = {
  nome: "Joao",
  sobrenome: "Martinho",
  idade: 30,
  isAdulto: true,
  simbolo: Symbol("pessoa"),
  exibirNome(): void {
    console.log(this.nome + " " + this.sobrenome);
  },
};
semRetorno("Hello", "World");
pessoa.exibirNome();

export { pessoa };
