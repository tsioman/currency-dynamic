ДЗ
Заготовки и тесты находятся в репозитории, смотрите ПР https://github.com/nickovchinnikov/react-js-tutorial/pull/25/files

Чистые функции
Используя чистые функции массивов map/reduce, объектов Objeсt.keys, строк string.split и т.д. получить нужный результат

Лучшая команда (наибольшее кол-во очков), выводим имя
const teams = [
{name: 'Lions', score: 5},
{name: 'Tigers', score: 4},
{name: 'Bears', score: 6},
{name: 'Monkeys', score: 2},
]

const getTopName = (teams) => teams. ...

const result = getTopName(teams)
console.log(`Top team name is ${result}`)
Querystring из объекта
const qsObj = {
page: "2",
pageSize: "10",
total: "205",
somethingElse: "value"
}

// '?page=2&pageSize=10&total=205&somethingElse=value'
const createQs = (qsObj) => ...
const result = createQs(qsObj)
console.log(result)
Объект из querystring
const qs = '?page=2&pageSize=10&total=205&somethingElse=value'

// { page: '2', pageSize: '10', total: '205', somethingElse: 'value' }
const parseQs = (qs) => ...
const result = parseQs(qs)
console.log(result)
Иммутабельность
Получить из A -> B не мутируя оригинальный объект

Поменять объект
const originalTeam = {
size: 15,
name: 'Tampa Bay Roosters',
league: 'Minor'
}

const expectedTeam = {
name: 'New York Badgers',
league: 'Minor',
roster: 25,
}

const originalTeamToExpectedTeam = (originalTeam) => ...
const result = originalTeamToExpectedTeam(originalTeam)
console.log(result)
Поменять массив
const originalArray = [1, 2, 3, 4]

const expectedArray = ['two', 3, 4, 5]

const originalArrayToExpectedArray = (originalArray) => ...
const result = originalArrayToExpectedArray(originalArray)
console.log(result)
Поменять глубокий объект
const originalTeam = {
name: 'Tampa Bay Roosters',
captain: {
name: 'Bryan Downey',
age: 27
}
}

const expectedTeam = {
name: 'Tampa Bay Roosters',
captain: {
name: 'Bryan Downey',
age: 28
}
}

const originalTeamToExpectedTeam = (originalTeam) => ...
const result = originalTeamToExpectedTeam(originalTeam)
console.log(result)
Бонус: используем ramda с заданиями про чистые функции
Бонусное задание: требует прочтения первых 5 глав книги https://github.com/MostlyAdequate/mostly-adequate-guide-ru
Главы на самом деле небольшие
И документации https://ramdajs.com

Напишем compose для поиска имени с наибольшим количеством очков. Вывести нужно только имя!
Заготовка кода
import {
compose,
//...
} from 'ramda'

const teams = [
{name: 'Lions', score: 5},
{name: 'Tigers', score: 4},
{name: 'Bears', score: 6},
{name: 'Monkeys', score: 2},
]

const getTopName = compose(
//...
)

const result = getTopName(teams)
console.log(`Top team name is ${result}`)
Напишем compose для создания query string
import {
compose,
//...
} from 'ramda'

const qsObj = {
page: "2",
pageSize: "10",
total: "205",
somethingElse: "value"
}

// '?page=2&pageSize=10&total=205&somethingElse=value'
const createQs = compose(
//...
)
const result = createQs(qsObj)
console.log(result)
И наоборот - query string -> object

import {
compose,
//...
} from 'ramda'

const queryString = '?page=2&pageSize=10&total=203'

const parseQs = compose(
//...
)

const result = parseQs(queryString)
console.log(result)

Разработку ведем по TDD, всегда тестируем весь наш код!

Супер бонусное задание
Написать свой compose
