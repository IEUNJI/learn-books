// 单例模式的定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

// 单例模式的场景：线程池、全局缓存、浏览器中的 window 对象、唯一的登录浮窗、执行一次的场景。

// 管理单例的逻辑：通过 getSingle 修饰的函数拥有单例的能力
function getSingle(fn) {
  let result;

  return function () {
    return result || (result = fn.apply(this, arguments));
  };
}

// 惰性单例：在合适的时候再创建实例
