type Chars = 'a' | 'b' |  'c';
/**
 *
 * never означает, что данное значение нам не подходит и мы не добавляем его в тип
 */
type RemoveC<T> = T extends 'c' ? never : T;

type WithoutC = RemoveC<Chars>
