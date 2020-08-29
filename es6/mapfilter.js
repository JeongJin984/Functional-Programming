const map = (f, iter) => {
	let res = [];
	for (const a of iter) {
		res.push(f(a))
	}
	return res
}

const filter = (iter, f) => {
	let res = []
	for(const a of iter) {
		if(f(a)) res.push(a)
	}
	return res
}

const products = [
	{name: '반팔티', price: 15000},
	{name: '긴팔티', price: 20000},
	{name: '핸드폰케이스', price: 15000},
	{name: '후드티', price: 30000},
	{name: '바지', price: 25000}
];

