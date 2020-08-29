const _ = require('./_js')

const products = [
	{name: '반팔티', price: 15000, quantity: 1},
	{name: '긴팔티', price: 20000, quantity: 2},
	{name: '핸드폰케이스', price: 15000, quantity: 3},
	{name: '후드티', price: 30000, quantity: 4},
	{name: '바지', price: 25000, quantity: 5}
];

const add = (a, b) => a + b

const total_quantity = _.pipe(
	products => _.map(p => p.quantity, products),
	products => _.reduce(add, products)
)

const total_price = _.pipe(
	products => _.map(p => p.quantity * p.price, products),
	products => _.reduce(add, products)
)

console.log(total_quantity(products)); 
console.log(total_price(products)); 

const sum = (f, iter) => _.go(
	iter,
	iter => _.map(f, iter),
	iter =>_.reduce(add, iter)
)

console.log(sum(p => p.quantity, products));
console.log(sum(p => p.quantity * p.price, products));

const csum = _.curry((f, iter) => _.go(
	iter,
	iter => _.map(f, iter),
	iter =>_.reduce(add, iter)
))

const total_price2 = csum(p => p.price * p.quantity)
console.log(total_price2(products));

console.log(csum(u => u.age, [
	{ age: 30 },
	{ age: 20 },
	{ age: 40 }
]));