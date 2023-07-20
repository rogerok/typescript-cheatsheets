type Chars = 'a' | 'b' | 'c';
/**
 *
 * never означает, что данное значение нам не подходит и мы не добавляем его в тип
 */
type RemoveC<T> = T extends 'c' ? never : T;

type WithoutC = RemoveC<Chars>

/**
 * благодаря Omit мы сохраняем автокомлпит и тайпскрипт подтягивает возможные варианты юниона
 */

type Size = 'xs' | 'sm' | Omit<string, 'xs' | 'sm'>;

const size: Size = 'xs';

/**
 * generic для этого типа
 *
 */

type UnionAutocomplete<T extends string> = T | Omit<string, T>;
type Size2 = UnionAutocomplete<'xs' | 'sm'>;
const size2: Size2 = 'xs';