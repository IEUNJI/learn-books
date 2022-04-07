/**
 * 函数this类型
 */
export function fancyDate(this: Date) {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}

fancyDate.call(new Date());

/**
 * 函数类型重载
 */

// 简写
type Log1 = (message: string, userId?: string) => void;
// 完整
type Log2 = {
  (message: string, userId?: string): void;
  wasCalled: boolean;
};
