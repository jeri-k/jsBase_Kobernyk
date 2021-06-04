// 1.  Объект user содержит три свойства. Свойство data содержит пять свойств, один из которых содержит массив
// friends. Завершите запись функции addFriend, которая принимает объект user и имя друга(friend),
// и добавляет имя друга(friend) в массив friends. Функция должна возвращать массив friends.

//
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    user.data.friends.push(friend)

}

addFriend(user, 'Nazar')
console.log(user)


// 2. Допишите функцию countOnline

let users = [
    {
        age: 27,
        online: false
    },
    {
        age: 32,
        online: true
    },
    {
        age: 48,
        online: false
    },
    {
        age: 19,
        online: true
    }
];

function countOnline() {
    let count = Object.keys(users).filter(a => users[a].online).length
    return count
}

console.log(countOnline(users))


// 3. Используйте метод some внутри функции checkPositive, чтобы проверить, является ли какой-либо
// элемент в arr положительным. Функция должна возвращать логическое значение.

function checkPositive(arr) {
    return arr.some(val => val > 0)
}

console.log(checkPositive([-1, -2, -3, -4, 5]))


//
// 4. Массив watchList содержит объекты с информацией о нескольких фильмах. Используйте map, чтобы извлечь заголовок и рейтинг из списка наблюдения и сохранить новый массив в переменной рейтинга.
//     В результате, должен получится новый массив объектов, но каждый из объектов содержит 2 поля: title и imdbRating


let watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

function titleAngRating(arr) {
    let res = arr.map(value => ({
        title: value.Title,
        imdbRating: value.imdbRating

    }))
    return res
}


console.log(titleAngRating(watchList))

// 5. Массив watchList содержит объекты с информацией о нескольких фильмах. Используйте filter и
// map для возврата нового массива объектов только с title и rating, но где imdbRating больше или равен 8.0.
//     Результат должен быть таким же как и в 4м задании - массив объектов на 2 поля, но отфильтрованный,
//     чтобы рейтинг был больше или равен 8.0

function fil(arr) {
    let int = arr.filter(value => value.imdbRating >= 8)
    let out = int.map(value => ({
        title: value.Title,
        imedbRating: value.imdbRating
    }))
    return out
}

console.log(fil(watchList))


// 6. Массив watchList содержит объекты с информацией о нескольких фильмах. Используйте reduce,
//     чтобы найти средний рейтинг IMDB фильмов, снятых режиссером Кристофером Ноланом.
//     Вспомните из предыдущих заданий filter и map. Вам может потребоваться создать другие переменные,
//     но сохраните окончательное среднее значение в переменную AverageRating. Обратите внимание,
//     что значения рейтинга сохраняются в виде строк в объекте и должны быть преобразованы в числа,
//     прежде чем они будут использованы в любых математических операциях.

function calcRet(arr) {
    let creatArr = []
    let outObjName = arr.filter(value => value.Director === 'Christopher Nolan')
    let outValRating = outObjName.map(value => creatArr.push(value.imdbRating)
    )
    creatArr = creatArr.map(Number)

    return `Середня оцінка фільмів: ${creatArr.reduce((a, b) => a + b) / creatArr.length}`


}

console.log(calcRet(watchList))




