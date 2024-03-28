var customerName = 'bob';

function upperCaseCustomerName() {
    return customerName.toUpperCase();
}
console.log(upperCaseCustomerName());

function setBestCustomer() {
    bestCustomer = 'not bob';
}


function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Ken';
console.log(leastFavoriteCustomer);

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Dan';
}
changeLeastFavoriteCustomer();
