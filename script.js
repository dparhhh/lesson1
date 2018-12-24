'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(money, time);
// console.log(time);
let answerFirst = prompt("Введите обязательную статью расходов в этом месяце"),
	 answerSecond = prompt("Во сколько обойдется?", "");
console.log(answerFirst, answerSecond)
let appData = {
	money,
	timeData: time,
	expenses: {
		answerFirst : answerSecond
	},
	optionalExpenses: "",
	income: "",
	savings: false
};
alert("Ваш бюджет на один день: " + money / 30);

