function myLog(msg) {
    console.log(">" + msg);
}
var numbers = new Array();

numbers[0] = 1;
numbers[1] = 2;

numbers[2] = 3;

numbers.push(4);
numbers.push(5);

for (var i = 1; i < numbers.length; i++)
    myLog(numbers[i]);

console.log("-----");
numbers.forEach(myLog);

console.log("-----");
numbers.forEach(function show(n) {
    myLog("#" + n);
});
console.log("-----");
numbers.forEach((n) => {
    myLog("@" + n);
});

var newNumbers = numbers.filter((n) => { return (n > 2); });

newNumbers.forEach(myLog);
console.log("-----");
numbers
    .map((n) => {
        return n * 2;
    })
    .filter((n) => {
        return (n > 2);
    }).forEach(myLog);

var sum = numbers.map((n) => {
    return n * 2;
}).filter((n) => {
    return (n > 6);
}).reduce((a, n) => {
    return a + n;
});

myLog(sum);

var contact = new Object();

contact.name = "peter";
contact.phone = 12345;

contact = { "name": "john", "phone": 145646357 };

console.log(contact);

var contactList = [{
        "name": "john",
        "phone": 145646357
    },
    {
        "name": "johny",
        "phone": 257245
    },
    {
        "name": "peter",
        "phone": 784794
    },
];
console.log("=============");

function contactSearch(list,name){
    list.filter((contact) => {
        return contact.name.match(name)
    }).forEach((contact) =>{
        console.log(contact);
    })
}

contactSearch(contactList,"peter");