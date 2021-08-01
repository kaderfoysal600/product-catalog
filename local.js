//https://www.youtube.com/playlist?list=PLyrs5AgsUPcXhsGbS66MV3sjLy59udu8-
//storage

//database
//Getting from server/without server
//local storage
//data store in local

//Setting and getting item from localStorage

localStorage.setItem('firstName', 'samim');
localStorage.setItem('lastName', 'Hasan');
console.log(localStorage.getItem('firstName'));
localStorage.setItem('age', 20);
console.log(typeof localStorage.getItem('age'));

const person = {
  firstName: 'samim',
  lastName: 'Hasan'
};

localStorage.setItem('person', JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem('person', person)));

//clearing localStorage
localStorage.clear();
   
