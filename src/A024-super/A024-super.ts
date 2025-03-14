export class Colaborador {
  
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
    public cargo: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return (
      this.nome +
      " " +
      this.sobrenome +
      " " +
      this.idade +
      " anos de idade " +
      this.cpf +
      " " +
      this.cargo +
      " "
    );
  }
}

export class Employee extends Colaborador {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public setor: string,
  ) {
    super(nome, sobrenome, idade, cpf,setor);
  }
  getNomeCompleto(): string {
    console.log("FAZENDO ALGO ANTES");
    const result = super.getNomeCompleto();
    return result + "OK";
  }
}

export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): string {
    return this.colaboradores.map((c) => `${c.nome} - ${c.cargo}`).join(", ");
  }

  getNomeCompleto(): string {
    return `Esses são os colaboradores de hoje: ${this.mostrarColaboradores()}. Empresa: ${this.nome}, CNPJ: ${this.cnpj}`;
  }
}

export class Cliente extends Empresa {
  getNomeCompleto(): string {
    return `Isso vem do cliente: ${this.nome}, CNPJ: ${this.cnpj}`;
  }
}

// Criando instâncias
const empresa = new Empresa("Facebook", "11.111.111/0001-11");
const employee = new Employee(
  "Jonas",
  "Tibario",
  30,
  "402.996.537-32",
  "Escrevente",
);
const cliente = new Cliente("João Bosco", "00.000.000/0001-00");

// Adicionando colaboradores
employee.getNomeCompleto();
console.log(empresa.getNomeCompleto());
console.log(employee.getNomeCompleto());
console.log(cliente.getNomeCompleto());

//import { log, trace } from 'console';
//
//export class Empresa {
//  readonly nome: string;
//  private readonly colaboradores: Colaborador[] = [];
//  protected readonly cnpj: string;
//
//  constructor(nome: string, cnpj: string) {
//    this.nome = nome;
//    this.cnpj = cnpj;
//  }
//  public adicionarColaborador(colaborador: Colaborador): void {
//    this.colaboradores.push(colaborador);
//  }
//
//  public mostrarColaborador(): void {
//    for (const colaborador of this.colaboradores) {
//      console.log(colaborador);
//    }
//  }
//  getNomeCompleto(): string {
//    return (
//      `Esses sao os colaboradores de hoje` +
//      this.nome +
//      ` seu cnpj é` +
//      this.cnpj +
//      "" +
//      this.mostrarColaborador
//    );
//  }
//}
//
//export class Employe extends Empresa {
//  getNomeCompleto(): string {
//    console.log("FAZENDO ALGO ANTES");
//    return super.getNomeCompleto();
//  }
//}
//export class Cliente extends Empresa {
//  getNomeCompleto(): string {
//    return "Isso vem do cliente" + this.nome + "" + this.cnpj;
//  }
//}
//
//const empresa = new Empresa("Facebook", "11.111.111/00001-11");
//const employe = new Employe('Jonas','21.158.0001/12')
//const cliente = new Cliente("Joao Bosco", "00.000.000.0001/00");
//
//console.log(empresa.mostrarColaborador());
//console.log(employe.getNomeCompleto());
//console.log(cliente.getNomeCompleto());
