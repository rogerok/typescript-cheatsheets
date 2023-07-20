interface User3 {
  id: string;
  username?: string;
  age: number;
  birthday: {
    year: number;
    day: number;
    month: number;
  };
}

//опустить поля
type NewUser = Omit<User, "id">;
//берем поля
type SecondUser = Pick<User, "username">;

type Cars = "bmw" | "toyta" | "audi";

// тип в котором мы ходим описать немецкие машины, из главного карс мы их получаем.
// Exclude используются для юнион типов
// Extract используются для юнион типов
type GermanCar = Exclude<Cars, "audi">;
type GermanCar2 = Extract<Cars, "audi">;

type Birthday = User3["birthday"];

const birth: Birthday = {
  day: 1,
  month: 1,
  year: 1
};

// глубокое рекурсивное приведение полей типа к необязательным
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
