// json
const user = {id: 11, Name: 'John', job:'doctor' };
const stringify = JSON.stringify(user);

// console.log(user);
// console.log(stringify);

const shop = {
    name : 'Alia Store',
    address : 'Ranbir road',
    profit: 15000,
    products : ['laptop', 'mobile', 'pepsi'],
    owner : {
        name : 'Alia bhatt',
        proffesion: 'acting'
    },
    isExpensive : false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner);

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 
