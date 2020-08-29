const man = {
  name: 'jscoder',
  age: 22
}

const proxy = new Proxy(man, {
  get(target, key) {
    const val = target[key]
    if (!val) throw new Error(`Property "$(property)" does not exist`)
    return target[key]
  }
})

console.log(proxy.name)
console.log(proxy.age)
console.log(proxy.location)