const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Account(accName, balance){
    this.transations = [];
    this.balance = balance;
    this.accName = accName;
    this.withdraw = function(amount){
        console.log(this.balance -= amount);
        this.transations.push({
            type: "withdrawl",
            amount: amount,
        })
    }
}

function openNewAccount(){
    rl.question("What is it that you like to be called?   ", function(name){
        rl.question(`Welcome, ${name}. Please enter an opening amount in Dubloons ( minimum of 200):    `, function(openingBalance){
            if(openingBalance > 199){
                let acc = new Account(name, openingBalance);
                acc.balance -= 99;
                console.log(`Congratulations on your new account! We have deducated our incredibly humble fee. Your balance is ${acc.balance} dubloons `)
                mainMenu(acc)
            } else{
                console.log('cheap much? try again');
                openNewAccount();
            }
        })
    })
}

function withdraw(acc){
    rl.question(`Your current balance is ${acc.balance}. How much would you like to withdraw today?`, function(withdrawAmount){
        acc.withdraw(withdrawAmount);
    })
}

function mainMenu(acc){
    rl.question("Predatory Bank!  \nWhen you can't borrow money from your family~! \n What would you like do today? \n 1) Open an account \n 2) Withdraw money \n 3) cry a little   ", function(userInput){
     switch(userInput){
        case "1":
            console.log("\n You won't regret it! \n");
            openNewAccount();
            break;
        case "2":
            withdraw(acc);
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