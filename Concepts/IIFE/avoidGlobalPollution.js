//greet() is hoisted and available in global scope to be called anytime
function greet(){
    const username = 'Alice';
    console.log('Hello, '+ username);
}

greet();
console.log(typeof greet);

//welcome is not hoisted and cant be called so avoids polluting global scope
(function welcome(){
    const name = 'Borderland';
    console.log('Welcome, '+ name);
})();
console.log(typeof welcome);
welcome();