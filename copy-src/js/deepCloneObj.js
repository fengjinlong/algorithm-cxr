const o = {
  name: 'xxx',
  liat: [1,2],
  info: {
    title: '111',
    arr: [4,5]
  }
}
function deep(obj) {
  if (!obj) return
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      newObj[key] = deep(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
let oo = deep(o)
o.info.arr.push(6)
console.log(oo)