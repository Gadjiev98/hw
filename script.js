'use strict';

let money = prompt("Ваш бюджет за месяц?", ' '),
   time = prompt("Введите дату в формате YYYY-MM-DD", ' ');

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let answer1 = prompt("Введите обязательную статью расходов в этом месяце", ' '),
    answer2 = prompt("Во сколько обойдется?", ' '),
    answer3 = prompt("Введите обязательную статью расходов в этом месяце", ' '),
    answer4 = prompt("Во сколько обойдется?", ' ');

    appData.expenses.answer1 = answer2;
    appData.expenses.answer3 = answer4;

    alert(appData.budget / 30);
