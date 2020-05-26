export class Jugador {
  hp: number;
  clasificacion: string;

  constructor() {
    this.hp = 100;
    this.clasificacion = "Jugador"
  }

  recibeDanio(danio: number) {
    if (danio >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - danio
    }
    return this.hp;
  }

}
