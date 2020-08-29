const _ = require('./_js')

var users = [
  { id: 1, name: 'ID', age: 36 },
  { id: 2, name: 'BJ', age: 32 },
  { id: 3, name: 'JM', age: 32 },
  { id: 4, name: 'PJ', age: 27 },
  { id: 5, name: 'HA', age: 25 },
  { id: 6, name: 'JE', age: 26 },
  { id: 7, name: 'JI', age: 31 },
  { id: 8, name: 'MP', age: 23 }
];

console.log('-----------------1------------------')
// 1. 30세 이상인 users를 거른다.
var temp_users = []
for(var  i = 0; i< users.length; i++) {
  if(users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users)

console.log('-----------------2------------------')
// 2. 30세 이상인 users의 names를 수집한다.
var names = []
for(var i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name)
}
console.log(names)

console.log('-----------------3------------------')
// 3. 30세 이상인 users의 age를 수집한다.
var ages = []
for(var i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age)
}
console.log(ages)

console.log('---------------3-1------------------')
// 3-1. filter로 refactoring
console.log(_.filter(users, (user) => user.age >= 30))

console.log('---------------3-2------------------')
// 3-2. map 으로 refactoring
var under_30 = _.filter(users, (user) => user.age < 30)
console.log(_.map( under_30, (user) => user.age))

console.log(_.map( _.filter(users, (user) => user.age < 30), (user) => user.age))   // 1줄 mode

console.log('---------------4------------------')
// 4. curry, curryr
var add = _.curry((a, b) => a + b)
var add10 = add(10)
console.log(add10(5))
console.log(add10(3))

var sub = _.curryr((a, b) => a - b )

var sub10 = sub(10)
console.log(sub10(3))
console.log(sub10(5))

console.log('---------------5------------------')
// 5. get
var user1 = users[0]
var get_name = _.get('name')
console.log(get_name(user1))

console.log(_.map(_.filter(users, (user) => user.age < 30), _.get('name')))
