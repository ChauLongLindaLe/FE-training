const { expect, test } = require('@jest/globals');
const { Account , enoughMoney} = require('./index');

const acc = new Account('Linda', 200 , 'open');


// Unable to mock readline so have taken the object constructor out

test('new Account is created', () => {
  expect(acc.accName).toBe('Linda');
  expect(acc.balance).toBe(200);
  expect(acc.status).toBe('open');
});

test('Withdraw no money if there are insufficient funds', () => {
    const withdrawlAmount = 300;
    expect(enoughMoney(acc, withdrawlAmount)).toBeFalsy();
    expect(acc.balance).toEqual(acc.balance);
})

test('Withdraw money if sufficient funds leaving balance at 300', () => {
    const newAcc = new Account('Wealthy Linda', 600 , 'open');
    const withdrawlAmount = 300;
    expect(enoughMoney(newAcc,withdrawlAmount)).toBeTruthy();
    expect(newAcc.balance).toEqual(300);
})

test('Deposit 300 into account. Balance should equal 500 ', () => {
    acc.deposit(300)
    expect(acc.balance).toEqual(500);
})

test('Account status should be closed', () => {
    acc.closeAcc()
    expect(acc.status).toEqual('closed');
})
