const _ = require('./_js')

const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)

const mult = curry((a,b) => a*b)

console.log(mult(3)(2));
console.log(mult(3,2));

const map = curry(_.map)
const filter = curry(_.filter)
const reduce = curry(_.reduce)

const products = [
	{name: '반팔티', price: 15000},
	{name: '긴팔티', price: 20000},
	{name: '핸드폰케이스', price: 15000},
	{name: '후드티', price: 30000},
	{name: '바지', price: 25000}
];

console.log(
	_.go(
		products,
		products => filter(p => p.price < 20000)(products),
		products => map(p => p.price)(products),
		prices => reduce((a, b) => a + b)(prices)
	)
);

const total_price = _.pipe(
	map(p=>p.price),
	reduce((a, b) => a + b)
);

console.log(
	_.go(
		products,
		products => filter(p => p.price < 20000)(products),
		total_price
	)
);



const a = curry( ()=>{} )

const curry = x => y => z=> f(z)