const assert = require('chai').assert
const countOnly = require('../countOnly')

describe ('#Count Only', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  it('Jason should only be present once', () => {
    assert.equal(result1["Jason"], 1)
  });
  it('Karima should return undifined', () => {
    assert.equal(result1["Karima"], undefined)
  });
  it('Fang should return 2', () => {
    assert.equal(result1["Fang"], 2)
  });
})

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);