/* enum UserRole {
  USER = "user",
  ADMIN = "admin"
}

enum UserRoles {
  USER = "user",
  ADMIN = "admin"
}
 */
/*
для тайпскрипта эти два энама являются разными значениями
т.к. компилятор превращает их в объекты.
const enum являетс фунцкцией
энам можно заменить обычным объектом
*/

const UserRole = {
  ADMIN: "admin",
  USER: "user"
} as const;

//type UserRoleType = typeof UserRole[keyof typeof UserRole];
type ValueOf<T> = T[keyof T];
type UserRoleType = ValueOf<typeof UserRole>;

const fn = (role: UserRoleType) => {};

fn("admin");
