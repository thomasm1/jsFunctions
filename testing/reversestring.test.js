 

const reverseString = require('./reversestring');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();  // just to see if function defined

test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});
 
test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});
