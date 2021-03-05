const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Account(accName, balance){
    this.transations = [];
    this.balance = balance;
    this.accName = accName;
}

function openNewAccount(){
    rl.question("What is it that you like to be called?", function(name){
        rl.question(`Welcome, ${name}. Please enter an opening amount in Dubloons ( minimum of 200)`, function(openingBalance){
            if(openingBalance > 199){
                let acc = new Account(name, openingBalance);
                acc.balance -= 99;
                console.log(`Congratulations on your new account! We have deducated our incredibly humble fee. Your balance is ${acc.balance}`)
            } else{
                console.log('cheap much? try again');
                openNewAccount();
            }
        })
    })
}

rl.question("Predatory Loans!  \nWhen you can't borrow money from your family~! \n What would you like do today? \n 1) Open an account \n 2) cry a little", function(userInput){
 if(userInput === "1"){
    console.log("You won't regret it!")
    openNewAccount()
 }else{
     console.log('Im sorry to hear')
     rl.close();
 } 
});


rl.question("What is your name ? ", function(name) {
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});


rl.on("close", function() {
    console.log("\n We really hope that you don't read the fine-print!");
    process.exit(0);
});
rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});