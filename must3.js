var User = {
  count: 1,
  action: {
    getCount: function () {
      return this.count
    }
  }
}

var getCount = User.action.getCount

setTimeout(() => {
  console.log('result1', User.action.getCount())
})

console.log('result2', getCount())