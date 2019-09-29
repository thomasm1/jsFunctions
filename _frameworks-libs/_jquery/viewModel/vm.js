var vm = new Vue({
    // options
  })

  //   data object
var data = { a: 1 }

//   object is added to a Vue instance
var vm = new Vue({
  data: data
})

// Get property on the instance
// returns the one from the original data
vm.a == data.a // => true

// Set property on the instance
// also affects the original data
vm.a = 2
data.a // => 2

// vice-versa
data.a = 3
vm.a // => 3