/**
 * 类型字面量（type literal）
 * 使用const声明基本类型的值，TypeScript会推到范围最窄的类型
 */
const a = true; // type true
const b = 12; // type 12
const c = 'hello'; // type 'hello'
const d = Symbol('d'); // typeof d（unique symbol 类型）
const e: unique symbol = Symbol('e'); // typeof e

// 结构化类型（鸭子类型）

/**
 * 并集类型和交集类型
 * 联合类型和交叉类型
 * https://blog.csdn.net/azl397985856/article/details/106394200
 */
type Cat = {
  name: string;
  purrs: boolean;
};
type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

const f: CatOrDogOrBoth = {
  name: 'Donkers',
  purrs: true,
  barks: true
};
const g: CatAndDog = {
  name: 'Domino',
  purrs: true,
  barks: true,
  wags: true
};

/**
 * 当数组离开定义时所在的作用域后，将最终确定一个类型
 */

function buildArray() {
  const a = []; // any[]
  a.push(1); // any[]
  a.push('x'); // any[]
  return a; // (string | number)[]
}

const h = buildArray(); // (string | number)[]

/**
 * 元组
 * 长度固定、各索引位上的值具有固定的已知类型
 */
const i: [string, string, number?] = ['lin', 'zijun']; // 可选
const j: [number, boolean, ...string[]] = [1, true, 'x', 'y']; // 剩余元素

/**
 * 只读数组/元组
 */
type A = readonly string[];
type B = ReadonlyArray<string>;
type C = Readonly<string[]>;

type D = readonly [number, string];
type E = Readonly<[number, string]>;

/**
 * null：缺少值
 * undefined：尚未赋值的变量
 * void：没有return语句的函数
 * never：永不返回的函数
 */

/**
 * 枚举
 * enum：可通过值访问枚举
 * const enum：只能通过键访问枚举
 */
