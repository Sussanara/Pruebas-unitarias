const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
let total = sum(14, 9);
expect(total).toBe(23);
});

test ('Pasar de 1 dóllar a Yen',() => {
let total = fromDollarToYen(1.2);
expect (total).toBe(127.9);
});

test ('Pasar de1 Yen a Pound',() => {
    let total = fromYenToPound(127.9);
    expect (total).toBe(0.8);
});