type TypePerson = {
  name: string;
  lastname: string;
  fullname(): string;
};

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
