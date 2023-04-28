const {fromDollarToYen, fromYenToPounds, fromEuroToDollar} = require('./app.js');

test('convierte Dollar to Yen', () => {
    expect(fromDollarToYen(1)).toBe(106.58333333333334);
})

test('convierte Euro to Dollar', () => {
    expect(fromEuroToDollar(1)).toBe(1.2);
})

test('convierte Yen to Pounds', () => {
    expect(fromYenToPounds(1)).toBe(0.006254886630179828);
})

