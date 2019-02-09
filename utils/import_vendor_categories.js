const newList = require('./lists/newVendors');
const oldList = require('./lists/vendors');
const fs = require('fs');

console.log(newList.vendors.length);
console.log(oldList.vendors.length);

const jsonOut = oldList.vendors.map((vendor) => {
  const findNew = newList.vendors.find(vendorNew => vendor.url.includes(vendorNew.url) || vendor.title.includes(vendorNew.title));
  return {
    ...vendor,
    categories: {
      retail: findNew.retail,
      foodAndBev: findNew.foodAndBev,
      service: findNew.service,
      entertainment: findNew.entertainment,
      travel: findNew.travel,
      education: findNew.education,
    },
  };
});

const final = jsonOut.filter(item => !!item);

if (final.length === oldList.vendors.length, final.length) {
  fs.writeFileSync('./lists/checkVendors.json', JSON.stringify({ vendors: final }, null, 4));
} else {
  throw new Error('Couldn`t check all vendors!');
}

