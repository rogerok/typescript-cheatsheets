interface User {
  username: string;
}

const obj: User = {
  username: "123"
} as const;

const func2 = (user: User) => {
  //todo
  user.username = "321";
  // здесь значение поля поменяется и тайпскрипт ругаться не будет
};

const func3 = (user: Readonly<User>) => {
  //todo
  user.username = "321";
  // здесь значение поля поменяется и тайпскрипт ругаться не будет
};
