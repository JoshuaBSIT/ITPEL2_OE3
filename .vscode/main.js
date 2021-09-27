//create name value pairing
const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelButton = document.querySelector('#btn-clear');
const addButton = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let myTotalExpenses = 0;

const clear = () =>{
    reasonInput.value = '';
    amountInput.value = '';
};

const presentToast =() => {
    const toast = document.createElement('ion-toast');
    toast.message = 'Please enter reason and amount!.';
    toast.duration = 2000;

    document.body.appendChild(toast);
    return toast.present();
}


cancelButton.addEventListener('click', clear);

//Add Expenses button event
addButton.addEventListener('click', () => {   
    const reasonEntered = reasonInput.value; 
    const amountEntered = amountInput.value;

    if(
        reasonEntered.trim().length <= 0 ||
        amountEntered <= 0 || 
        amountEntered.trim().length <= 0
        ){
            presentToast();
            return;
    }
    console.log(reasonEntered, amountEntered);

    const newExpenses = document.createElement('ion-item');
    newExpenses.textContent = reasonEntered + ': P' + amountEntered;
    expensesList.appendChild(newExpenses);
    

    myTotalExpenses += +amountEntered;
    totalExpensesOutput.textContent = myTotalExpenses;  

    clear(); 
});
