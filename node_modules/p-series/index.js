'use strict';
const pReduce = require('p-reduce');

module.exports = iterable => {
	const ret = [];
	return pReduce(iterable, (_, fn) => {
		return Promise.resolve().then(fn).then(val => {
			ret.push(val);
		});
	}).then(() => ret);
};
