const {functions, Account} = require('./index');

test('Adds 2+2 to equal 4', () =>{
    expect(functions.add(2,2)).toBe(4);
})

test('new Account is created', () => {
  const obj = new Account('Linda', 200 , 'open');
  expect(obj.accName).toBe('Linda');
  expect(obj.balance).toBe(200);
  expect(obj.status).toBe('open');
});