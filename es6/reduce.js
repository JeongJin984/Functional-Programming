const nums = [1,2,3,4,5];

const products = [
	{name: '반팔티', price: 15000},
	{name: '긴팔티', price: 20000},
	{name: '핸드폰케이스', price: 15000},
	{name: '후드티', price: 30000},
	{name: '바지', price: 25000}
];


let total = 0;
for(const n of nums) {
	total = total + n;
}

console.log(total);

const reduce = (f, acc, iter) => {
	if(!iter) {
		iter = acc[Symbol.iterator]();
		acc = iter.next().value;
	}
	for(const a of iter) {
		acc = f(acc, a);
	}
	return acc
}

console.log(reduce((a,b) => a + b, [1,2,3,4,5]));

console.log(reduce((total_price, products) => total_price + products.price, 0, products))