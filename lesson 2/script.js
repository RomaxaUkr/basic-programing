//Part 1
let count=0;
    console.log('Start count=', count);

let ask=prompt('Do you like football?');
if (ask=='Yes') {
    console.log('Answer is correct');
    count++;
};
let ask1=prompt('Football club from Ukraine');
if (ask1=='Dynamo') {
    console.log('Answer is correct');
    count++;
};
let ask2=prompt('Does it won UEFA cup?');
if (ask2=='Yes'){
    console.log('Answer is correct');
    count++;
};
let ask3=prompt('Which team was champion of Ukrainian Championship in 2019?');
if (ask3=='Shahtar'){
    console.log('Answer is correct');
    count++;
};
let ask4=prompt('Who is captain of Ukrainian National Team?');
if (ask4=='Pyatov'){
    console.log('Answer is correct');
    count++;
};
let ask5=prompt('Will Ukrainian National Team take part in EURO 2021?');
if (ask5=='Yes'){
    console.log('Answer is correct');
    count++;
};
let ask6=prompt('Who is the best Ukrainian football coach?');
if (ask6=='Lobanovskii'){
    console.log('Answer is correct');
    count++;
};
let ask7=prompt('How many team in Ukrainian Premier League?');
if (ask7==12){
    console.log('Answer is correct');
    count++;
};
let ask8=prompt('Who is the best scorer in Ukrainian team?');
if (ask8=='Shevchenko'|| ask8=='Sheva'){
    console.log('Answer is correct');
    count++;
};
let ask9=prompt('Who from Ukrainian team is plays for English Premier League club Manchester City?');
if (ask9=='Zinchenko'|| ask9=='Zina'){
    console.log('Answer is correct');
    count++;
};
if(count>0 && 4>=count){
    console.log(`You answer correct ${count} times. At least you know something about football`)
}
else if(count>4 && 6>=count){
    console.log(`You answer correct ${count} times. No bad`)
}
else if(count>6 && 8>=count){
    console.log(`You answer correct ${count} times. You are follower of Ukraine`)
}
else if(count>8 && 10>=count){
    console.log(`You answer correct ${count} times. You are the Best Fan of Ukrainian Football`)
}
else{
    console.log('You dont know anything about Ukrainian football.')
};
//Part2
//let name = prompt('Введіть імя!');
//if (name == null) {
//    alert('Вхід скасований');
//} else if (name === 'Ім’я') {
//    let password = prompt('Введіть пароль!');
//    if (password === 'ЛОГОС') {
//        alert('Ласкаво просимо!');
//    } else if (password == null) {
//        alert('Вхід скасований');
//    } else {
//        alert('Пароль невірний')
//    }
//} else {
//    alert('Я вас не знаю')
//}
//Part3
/*
let month=+prompt('Please enter the number');
if(month>0 && month<=2){
    alert('Winter')
}
else if(month>2 && month<=5){
    alert('Spring')
}
else if(month>5 && month<=8){
    alert('Summer')
}
else if(month>8 && month<=11){
    alert('Autumn')
}
else if(month==12){
    alert('Winter')
}
else alert('Not posible to know which month is it!')
*/