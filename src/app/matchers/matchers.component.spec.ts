import { MatchersComponent } from './matchers.component';

//
//Numbers

test('two plus two is four', () => {
  var result = new MatchersComponent().sum(2, 2);
  expect(result).toBeGreaterThan(3);
  expect(result).toBeGreaterThanOrEqual(3.5);
  expect(result).toBeLessThan(5);
  expect(result).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(result).toBe(4);
  expect(result).toEqual(4);
});


//Floating
//For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});


//toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead:

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

//toEqual recursively checks every field of an object or array.
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

//Truthiness
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});


//strings 
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

//Arrays and iterables
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});



//Exceptions 

test('compiling exceptions', () => {
  // expect(new MatchersComponent().compileError()).toThrow();
  // expect(new MatchersComponent().compileError()).toThrow(Error);

  // You can also use the exact error message or a regexp
  // expect(new MatchersComponent().compileError()).toThrow('error');
  // expect(new MatchersComponent().compileError()).toThrow(/error/);
});