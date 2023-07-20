interface User2 {
  id: string;
  data: string;
}

const fn1 = () => {
  return { id: 1, data: "value" };
};

//вернет тип возвращаемого функцией значения
type ResultFunc = ReturnType<typeof fn>;

const obj: ResultFunc = {
  data: "s",
  id: 2
};
// возвращает типы аргументов в массиве
type FnArgs = Parameters<typeof fn>;

const args: FnArgs = ["1", 2];
