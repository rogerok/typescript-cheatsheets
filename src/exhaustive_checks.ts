export const exhaustiveCheck = () => {
  type CarBrand = "bmw" | "lada" | "toyta";

  interface CarBase {
    year: number;
    brand: CarBrand;
  }

  interface Bmw extends CarBase {
    climateControl: boolean;
    brand: "bmw";
  }

  interface Lada extends CarBase {
    conditioner?: boolean;
    brand: "lada";
  }

  interface Toyota extends CarBase {
    speed?: boolean;
    brand: "toyta";
  }

  type Car = Bmw | Lada | Toyota;

  const exhaustiveCheck = (param: never) => {
    console.log("check the param" + param);
  };

  const todoWithCar = (car: Car) => {
    switch (car.brand) {
      case "bmw":
        console.log("bmw");
        break;
      case "lada":
        console.log("lada");
        break;
      default:
        //exhaustiveCheck(car);
        break;
    }
  };

  /*
Exhaustive check 
В данной функции в кейсе default тайпскрипт никак не отреагировал
на добавление бренда.
эта функция принимает тип never
Без Exhaustive check never означает, что другого типа, который мы
бы не обработали, не существует.

*/
};
