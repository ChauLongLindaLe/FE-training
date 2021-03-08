const { expect } = require('@jest/globals');
const {functions, Account , enoughMoney} = require('./index');

test('Adds 2+2 to equal 4', () =>{
    expect(functions.add(2,2)).toBe(4);
})

test('new Account is created', () => {
  const acc = new Account('Linda', 200 , 'open');
  expect(acc.accName).toBe('Linda');
  expect(acc.balance).toBe(200);
  expect(acc.status).toBe('open');
});

test('Withdraw no money if there are insufficient funds', () => {
    const acc = new Account('Linda', 200 , 'open');
    const withdrawlAmount = 300;
    expect(enoughMoney(acc.balance, withdrawlAmount)).toBeFalsy();
    expect(acc.balance).toEqual(acc.balance);
})

test('Withdraw money if sufficient funds', () => {
    const acc = new Account('Linda', 600 , 'open');
    const withdrawlAmount = 300;
    expect(enoughMoney(acc,withdrawlAmount)).toBeTruthy();
    expect(acc.balance).toEqual(300);
})


// Deposit, close account 
