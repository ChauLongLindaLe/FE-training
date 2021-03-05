const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//TODO: close acc, shop charges

function Account(accName, balance){
    this.transations = [];
    this.balance = balance;
    this.accName = accName;
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
}

function openNewAccount(){
    rl.question("What is it that you like to be called?   ", function(name){
        rl.question(`Welcome, ${name}. Please enter an opening amount in Dubloons ( minimum of 200):    `, function(openingBalance){
            if(openingBalance > 199){
                let acc = new Account(name, Number(openingBalance));
                acc.balance -= 99;
                console.log(`Congratulations on your new account! We have deducated our incredibly humble fee. Your balance is ${acc.balance} dubloons `)
                console.log(acc.balance);
                mainMenu(acc)
            } else{
                console.log('cheap much? try again');
                openNewAccount();
            }
        })
    })
}

function withdraw(acc){
    rl.question(`Your current balance is ${acc.balance} Dubloons. How much would you like to withdraw today?`, function(withdrawAmount){
        acc.withdraw(Number(withdrawAmount));
         rl.question(`Balance is now: ${acc.balance} Return to main menu? \n 1) Yes - return to main menu \n 2) Leave  `, function(userInput){
            userInput === '1' ? mainMenu(acc) : rl.close();
        })
    })
}

function deposit(acc){
    rl.question(`Your current balance is ${acc.balance} Dubloons. How much would you like to deposit today?  `, function(depositAmount){
        acc.deposit(Number(depositAmount));
        rl.question(`Balance is now: ${acc.balance} Return to main menu? \n 1) Yes - return to main menu \n 2) Leave  `, function(userInput){
            userInput === '1' ? mainMenu(acc) : rl.close();
        })
        
    })
}

function mainMenu(acc){
    rl.question("Predatory Bank!  \nWhen you can't borrow money from your family~! \n What would you like do today? \n 1) Open an account \n 2) Withdraw money \n 3) Deposit money \n 4) Leave   ", function(userInput){
     switch(userInput){
        case "1":
            console.log("\n You won't regret it! \n");
            openNewAccount();
            break;
        case "2":
            withdraw(acc);
            break;
        case "3":
            deposit(acc);
            break;
        default:
         console.log("That's not valid")
         rl.close();
     } 
    });
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