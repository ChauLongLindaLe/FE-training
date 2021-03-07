const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Account(accName, balance, state){
    this.transations = [];
    this.balance = balance;
    this.accName = accName;
    this.state = state;
    this.withdraw = function(amount){
        this.balance -= amount
        this.transations.push({
            type: "withdrawl",
            amount: amount,
        })
    }
    this.deposit = function(amount){
        this.balance += amount
        this.transations.push({
            type: "deposit",
            amount: amount,
        })
    }
    this.debit = function(amount){
        this.balance -= amount
        this.transations.push({
            type: "debit",
            amount: amount,
        })
    }
    this.closeAcc= function(){
        this.balance = 0;
        this.status = closed;
        this.transations = [];
        console.log('\n You account is now closed. Please don\'t read the small print')
        rl.close();
    }
}

function openNewAccount(){
    rl.question("\n What is it that you like to be called?   ", function(name){
        rl.question(`\n Welcome, ${name}. Please enter an opening amount in Dubloons ( minimum of 200):    `, function(openingBalance){
            if(openingBalance > 199){
                let acc = new Account(name, Number(openingBalance, 'active'));
                acc.balance -= 99;
                console.log(`\n Congratulations on your new account! We have deducated our incredibly humble fee. Your balance is ${acc.balance} dubloons `)
                mainMenu(acc)
            } else{
                console.log('\n cheap much? try again');
                openNewAccount();
            }
        })
    })
}

function withdraw(acc){
    rl.question(`\n Your current balance is ${acc.balance} Dubloons. How much would you like to withdraw today?`, function(withdrawAmount){
        acc.withdraw(Number(withdrawAmount));
         rl.question(`\n Balance is now: ${acc.balance} Return to main menu? \n 1) Yes - return to main menu \n 2) Leave  `, function(userInput){
            userInput === '1' ? mainMenu(acc) : rl.close();
        })
    })
}

function deposit(acc){
    rl.question(`\n Your current balance is ${acc.balance} Dubloons. How much would you like to deposit today?  `, function(depositAmount){
        acc.deposit(Number(depositAmount));
        rl.question(`Balance is now: ${acc.balance} Return to main menu? \n 1) Yes - return to main menu \n 2) Leave  `, function(userInput){
            userInput === '1' ? mainMenu(acc) : rl.close();
        })
    })
}
function shopping(acc){
    rl.question(`\n Interested in insurance? We sell all sorts here. \n 1) House insurance - 300Dubloons \n 2) Mortgage - 250Dubloons \n 3) Keychain - 3Dubloons \n 4) Return to main menu `, function(itemPurchased){
        switch(itemPurchased){
        case "1":
            acc.debit(300)
            console.log(`\n House is safe now - Balance is now ${acc.balance} \n`);
            break;
        case "2":
            acc.debit(250)
            console.log(`\n Mortgages are your friends - Balance is now ${acc.balance} \n`);
            break;
        case "3":
            acc.debit(3)
            console.log(`\n Keychain is yours! - Balance is now ${acc.balance} \n`);
            break;
        case "4":
            mainMenu(acc);
            break;
        default:
         console.log("That's not valid")
         rl.close();
     } 
        rl.question(`\n Balance is now: ${acc.balance} Return to main menu? \n 1) Yes - return to main menu \n 2) Leave  `, function(userInput){
            userInput === '1' ? acc.closeAcc(acc) : rl.close();
        })
        
    })
}

function closeAcc(acc){
        rl.question(`\n Are you sure you want to close your account? \n 1) Yes \n 2) return to main menu  `, function(userInput){
        userInput === '1' ? closeAcc(acc) : mainMenu(acc);
    })
}

function mainMenu(acc){
    if(acc){
        rl.question("\n ~~~ Predatory Bank! ~~~  \nWhen you can't borrow money from your family~! \n What would you like do today?  \n 1) Withdraw money \n 2) Deposit money \n 3) Buy Insurance \n 4) Close Account \n 5) Leave  ", function(userInput){
         switch(userInput){
            case "1":
                withdraw(acc);
                break;
            case "2":
                deposit(acc);
                break;
            case "3":
                shopping(acc);
                break;
            case "4":
                closeAcc(acc);
                break;
            default:
             console.log("That's not valid")
             rl.close();
         } 
        });
    } else{
        rl.question("\n ~~~ Predatory Bank! ~~~  \nWhen you can't borrow money from your family~! \n What would you like do today? \n 1) Open an account \n 2) Leave  ", function(userInput){
            userInput === '1' ? openNewAccount() : rl.close;
        })
    };
}


rl.on("close", function() {
    console.log("\n ~ Take your money elsewhere ~ \n");
    process.exit(0);
});
rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});

mainMenu();

const functions ={
    add: (num1,num2,) => num1 + num2,
}

module.exports = functions;