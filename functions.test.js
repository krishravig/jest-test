const functions = require('./functions');

test('sum of two numbers', () => {
expect(functions.add(2,3)).toBe(5);
});

test('sub of two numbers', () => {
expect(functions.sub(2,3)).toBe(-1);
});

/* Few Matcher methods
toBe() - check and match with primitive values
not.toBe()
toBeNull()
toBeUndefined()
toBeDefined
toBeTruthy() - not null, defined, 1 are truth values
toBeFalsy() - null, undefined, 0 are false values

*/
test('check the return value of function', () => {
expect(functions.isCheck(null)).toBeFalsy();
});

test('object equality', ()=> {
    expect(functions.createUser()).toEqual({firstName: 'Raman', lastName: 'Krishnan'});
});

test('Test Array equal', ()=> {
    const tempArray = [1,2,3];
    expect(tempArray).not.toBe([1,2,3]);
    expect(tempArray).toEqual([1,2,3]);
})

test('Logical condition check', () => {
expect(50+50).toBeLessThan(500);
expect(50+50).toBeLessThanOrEqual(100);
expect('RaviGanesh').toMatch(/I/i);
});

test('contains the value', ()=> {
    const names = [ 'ram', 'ganesh', 'vinoth'];
    expect(names).toContain('vinoth');
})

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

// test('async api test', () => {
//     expect(functions.fetchUser()).
// })