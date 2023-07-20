type Conditional<T> = T extends string ? number : boolean;

const value: Conditional<string> = 2;

type Data = { value: string };
type Car = { model: string };
type DataOrCar<T> = T extends string ? Data : Car;

const func = <T>(arg: T): DataOrCar<T> => {
  throw Error("not implemented");
};
const val = func(123);

/*
В зависимости от передаваемого типа аргумента, 
функция будет возвращать разные типы, которые мы будем знать
снаружи функции мы будем знать какой объект нам вернется,а в функции написать различные
условия выполнения для разных фунцкций
  */
