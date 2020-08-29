const reduce = (f, acc, iter) => {
	if(!iter) {
		iter = acc[Symbol.iterator]();
		acc = iter.next().value;
	}
	for(const f of iter) {
		acc = f(acc, f);
	}
	return acc
}

const go = (...args) => reduce((a, f) => f(a), args)

const pipe = (...fs) => (a) => go(a, ...fs)

const f = pipe(
	a => a + 1,
	a => a + 10,
	a => a + 100,
)

console.log(f(0));