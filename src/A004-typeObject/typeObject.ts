const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC: string;
  [key: string]: unknown;//index signature
} = {
  chaveA: "Valor A",
  chaveB: "Valor B",
  chaveC: "Valor C",
  chaveD: "Valor D",
  chaveE: "Valor E",
};

objetoA.chaveE = "Oher value";
objetoA.chaveB = "New key";
objetoA.chaveF = "Oher F value";
objetoA.chaveG = "New key G";

console.log(objetoA);
