interface TypeName {
  name: string;
}
interface TypeLastname {
  lastname: string;
}
interface TypeFullname {
  fullname(): string;
}

type TypePerson = TypeName & TypeLastname & TypeFullname;
interface TypePerson2 extends TypeName, TypeLastname, TypeFullname {}

export class Person implements TypePerson {
  constructor(
    public name: string,
    public lastname: string,
  ) {}
  fullname(): string {
    return this.name + " " + this.lastname;
  }
}
const person = new Person("Joao", "Augusto");
console.log(person.fullname());
