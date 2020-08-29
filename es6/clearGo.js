const _ = require('./_js')

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
		products => _.filter(p => p.price < 20000, products),
		products => _.map(p => p.price, products),
		prices => _.reduce((a, b) => a + b, prices)
	)
);