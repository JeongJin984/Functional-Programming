const products = [
	{name: '반팔티', price: 15000},
	{name: '긴팔티', price: 20000},
	{name: '핸드폰케이스', price: 15000},
	{name: '후드티', price: 30000},
	{name: '바지', price: 25000}
];

function* productsF() {
	yield {name: '반팔티', price: 15000}
	yield {name: '긴팔티', price: 20000}
	yield {name: '핸드폰케이스', price: 15000}
	yield {name: '후드티', price: 30000}
	yield {name: '바지', price: 25000}
}

const map = (f, iter) => {
	let res = [];
	for (const a of iter) {
		res.push(f(a))
	}
	return res
}

console.log(map(({name, price}) => ({name, price: price*2}), productsF()));

let m = new Map()
m.set('a', 10)
m.set('b', 20)
console.log(new Map(map(([k, a]) => [k, a*2], m)));
