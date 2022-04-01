// setTimeout(() => {
// 	console.log('hello')
// }, 1000)      // 1 second delay before 

// // --------------------------------------

// const callback1 = () => {
// 	console.log('hello')
// }

// setTimeout(callback1, 1000)      // 1 second delay
// // --------------------------------------

// console.log('A')

// const callback2 = () => {
// 	console.log('B')
// }

// console.log('C')

// setTimeout(callback2, 1000)

// console.log('D') // ACDB

// --------------------------------------

// console.log('A')

// const callback = () => {
// 	console.log('B')
// }

// console.log('C')

// setTimeout(callback, 0)

// console.log('D') // ACDB(no delay)

// --------------------------------------

// let a = 10

// const callback = () => {
// 	a = 20
// }

// setTimeout(callback, 1000)

// console.log(a) // 10 

// --------------------------------------

// let a = 10

// const callback = () => {
// 	a = 20
// }
// setTimeout(callback, 0)

// console.log(a) // 10

// --------------------------------------

// let a = 10

// const callback = () => {
// 	a = 20
// 	console.log(a)
// }
// setTimeout(callback, 0) // 20 no delay

// --------------------------------------

// const callback = () => {
// 	return "hello"
// }
// setTimeout(callback, 2000) // no output - 2 sec delay

