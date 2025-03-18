export class Escritor {
  private _tools: Tools | null = null;
  constructor(private _nome: string) {}
  set tools(tools: Tools | null) {
    this._tools = tools;
  }
  get nome(): string {
    return this._nome;
  }
  get tools(): Tools | null {
    return this._tools;
  }
  write(): void {
    if (this.tools === null) {
      console.log("I can't write without tools");
      return;
    }
    this.tools.write();
  }
}

export abstract class Tools {
  constructor(private _nome: string) {}
  abstract write(): void;
  get nome(): string {
    return this._nome;
  }
}
export class Pencil extends Tools {
  write(): void {
    console.log(`${this.nome} be writing...`);
  }
}
export class Typewriter extends Tools {
  write(): void {
    console.log(`${this.nome} be writing...`);
  }
}

// Exemplo de uso:
const escritor = new Escritor("John");
const pencil = new Pencil("HB Pencil");
const typewriter = new Typewriter("Old Typewriter");

escritor.write(); // Deve exibir "I can't write without tools"

escritor.tools = pencil;
escritor.write(); // Deve exibir "HB Pencil be writing..."

escritor.tools = typewriter;
escritor.write(); // Deve exibir "Old Typewriter be writing..."
