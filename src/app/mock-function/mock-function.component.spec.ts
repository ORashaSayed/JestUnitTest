//Mock Functions
// Mock functions allow you to test the links between code by erasing the actual implementation of a function, 
// capturing calls to the function (and the parameters passed in those calls), 
// capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.

var items=[42];
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
expect(mockCallback.mock.results[0].value).toBe(42);


// //.mock property
// All mock functions have this special .mock property, which is where data about how the function
//  has been called and what the function returned is kept.
//  The .mock property also tracks the value of this for each call, so it is possible to inspect this as well:

const myMockProp = jest.fn();

const a = new myMockProp();
const b = {};
const bound = myMockProp.bind(b);
bound();

console.log(myMockProp.mock.instances);
// > [ <a>, <b> ]


//Mock Return Values
//Mock functions can also be used to inject test values into your code during a test:
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true


//Mock functions are also very effective in code that uses a functional continuation-passing style. 
//Code written in this style helps avoid the need for complicated stubs that recreate the behavior of the real component
// they're standing in for, in favor of injecting values directly into the test right before they're used.


const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(num => filterTestFn(num));

console.log(result);
// > [11]
console.log(filterTestFn.mock.calls);
// > [ [11], [12] ]


//Mocking custom matchers 

const mockFunc = jest.fn((cb,ca) => {
});

// > true
// The mock function was called at least once
expect(mockFunc).toHaveBeenCalled();

// The mock function was called at least once
expect(mockFunc.mock.calls.length).toBeGreaterThan(0);



// The first arg of the last call to the mock function was `42`
// (note that there is no sugar helper for this specific of an assertion)
expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);

// A snapshot will check that a mock was invoked the same number of times,
// in the same order, with the same arguments. It will also assert on the name.
expect(mockFunc.getMockName()).toBe('a mock name');
