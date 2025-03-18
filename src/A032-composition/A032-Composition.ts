export class Car {
  private readonly motor = new Motor();
  turnOn(): void {
    this.motor.turnOn();
  }
  speedUp(): void {
    this.motor.speedUp();
  }
  turnOff(): void {
    this.motor.turnOff();
  }
}

export class Motor {
  turnOn(): void {
    console.log("Motor esta ligado...");
  }
  speedUp(): void {
    console.log("Motor esta acelerando...");
  }
  turnOff(): void {
    console.log("Motor esta desligado...");
  }
}
const car = new Car();

car.turnOn();
car.speedUp();
car.turnOff();
