export const typeGuard = () => {
  type CarBrand2 = "bmw" | "lada";

  interface CarBase2 {
    year: number;
    brand: CarBrand2;
  }

  interface BmwBase extends CarBase2 {
    climateControl: boolean;
    brand: "bmw";
    model: "x5" | "x7";
  }

  interface Bmwx5 extends BmwBase {
    value: string;
    model: "x5";
  }

  interface Bmwx7 extends BmwBase {
    value: number;
    model: "x7";
  }

  type Bmw2 = Bmwx5 | Bmwx7;

  interface LadaBase extends CarBase2 {
    brand: "lada";
    conditioner?: boolean;
    model: "priora" | "vesta";
  }

  interface Vesta extends LadaBase {
    conditioner?: boolean;
    model: "vesta";
  }

  interface Priora extends LadaBase {
    conditioner?: boolean;
    model: "priora";
  }

  type Lada2 = Vesta | Priora;
  type Car2 = Bmw2 | Lada2;

  const isLadaVesta = (car: Car2): car is Vesta => {
    return car.brand === "lada" && car.model === "vesta";
  };

  const fn = (car: Car2) => {
    if (car.brand === "bmw" && car.model === "x5") {
      console.log("bmw x5");
    }
    if (isLadaVesta(car)) {
      console.log("vesta");
    }
  };
  fn({ model: "vesta", brand: "lada", year: "2002" });
  /* 
  создаем функцию, которая проверяет является ли машина
  моделью веста.
  если не указывать в возврате ф-ции car is Vesta, то типы
  подвязываться не будут и мы не сможем узнать результат
*/
};
