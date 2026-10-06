function counter(obj) {
     return Object.keys(obj).length; 
}
let user = {
    name: 'Іван',
    age: 30
};
alert (counter(user));