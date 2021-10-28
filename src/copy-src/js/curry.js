const fn = curry( function (a, b,c) {
  return console.log([a,b,c])
})
fn(1,2,3)
fn(1,2)(3)
fn(1)(2,3)
fn(1)(2)(3)

function curry(fun, arg) {
  // 形参长度
  let len = fun.length
  arg = arg || []
  return function () {
    let _args = [ ...arg ,...arguments]
    if (_args.length < len) {
      return curry.call(this, fun, _args)
    } else {
      return fun.apply(this, _args)
    }
  }
}