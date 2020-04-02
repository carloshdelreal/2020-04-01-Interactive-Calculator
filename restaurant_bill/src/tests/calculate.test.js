import calculateBill from '../scripts/calculate'


test('calculates the exact value to pay', () => {
  const people = 2;
  const totalBill = 10;
  const extraTip = 0;
  const result = 5;
  const bill = calculateBill({ people, totalBill, extraTip })
  expect(bill).toBe(result);
});

test('calculates the exact value to pay', () => {
  const people = 2;
  const totalBill = 9;
  const extraTip = 0;
  const result = 4.5;
  const bill = calculateBill({ people, totalBill, extraTip })
  expect(bill).toBe(result);
});