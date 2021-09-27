//create name value pairing
const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelButton = document.querySelector('#btn-clear');
const addButton = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const nameInput = document.querySelector('#input-name');

let myTotalExpenses = 0;

const clear = () =>{
    nameInput.value = '';
    reasonInput.value = '';
    amountInput.value = '';
};

const inputAlert =() => {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Warning';
    alert.subHeader = 'Input Alert';
    alert.message = 'Please enter reason and amount!';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    alert.present();
  }


cancelButton.addEventListener('click', clear);



//Add Expenses button event
addButton.addEventListener('click', () => {   
    
    const reasonEntered = reasonInput.value; 
    const nameEntered = nameInput.value;
    const amountEntered = amountInput.value;

    if(nameEntered.trim().length <= 0 || reasonEntered.trim().length <= 0 || amountEntered <= 0 || amountEntered.trim().length <= 0){
       alert("please input valid reason")
       inputAlert();
        return;
    }
    //console.log(reasonEntered, amountEntered);

    const newExpenses = document.createElement('ion-item');
    newExpenses.textContent = nameEntered + ':' + reasonEntered + ': P' + amountEntered;
    expensesList.appendChild(newExpenses);
    

    myTotalExpenses += +amountEntered;
    totalExpensesOutput.textContent = myTotalExpenses;  

    clear(); 
});
