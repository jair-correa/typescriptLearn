type CoresObj = typeof coresObj;
type CoresKey = keyof CoresObj;
const coresObj = {
  vermelho: "red",
  verde: "green",
  azul: "blue",
};

function traduzirCor(cor: CoresKey, cores: typeof coresObj) {
  return cores[cor];
}

console.log(traduzirCor("azul", coresObj));
