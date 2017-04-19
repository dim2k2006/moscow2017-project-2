# ШРИ 2017, Задание 2

## Установка

1. git clone git@github.com:dim2k2006/moscow2017-project-2.git

2. cd moscow2017-project-2

3. npm i && bower i

4. gulp build

> Собранный проект находится в папке static

## Деплой

1. git subtree push --prefix static origin gh-pages

## Описание

> Данный проект представляет собой библиотеку, предоставляющую API для работы с расписанием лекций. 

В качестве места хранения данных используется local storage. 

При инициализации, библиотека проверяет имеются ли данные в local storage, если данные существуют, то используются найденные данные, в противном случае используются заранее подготовленные данные, которые затем записываются в local storage.

Так как интерфейс является ассинхронным, то в качестве базы данных можно использовать любое другое хранилище.

Проект состоит из библиотеки (src/blocks/library/library.js) и остальных блоков необходимых для веб интерфейса.

Библиотека гарантирует корректность и связанность данных:

1. Для одной школы не может быть двух лекций одновременно.

2. В одной аудитории не может быть одновременно двух разных лекций.

3. Вместимость аудитории должна быть больше или равной количеству студентов на лекции.

## Структура базы данных

База данных это объект состоящий из следующих свойств:

- lectures
- schools
- authors
- places

Каждое из вышеперечисленных свойств представляет собой массив объектов с данными.

```js
var data = {
    lectures: [
        {
            "id": 0,
            "title": "Лекция 1. Адаптивная вёрстка",
            "school": [0, 1],
            "author": [1],
            "date": "2016/10/20",
            "time": "14:00",
            "place": 0,
            "isOver": false,
            "resources": "#"
        }
    ],
     
     schools: [
         {
             "id": 0,
             "title": "Школа разработки интерфейсов",
             "student": 30
         }
     ],
     
     authors: [
         {
             "id": 0,
             "title": "Антон Тен",
             "description": "В Яндексе с 2014 года. Ведущий дизайнер продукта в сервисах Переводчик, Расписания и Видео.",
             "photo": "images/vis-author-0.jpg"
         }
     ],
     
     places: [
         {
             "id": 0,
             "title": "Синий кит",
             "address": "ул. Льва Толстого, 16",
             "link": "https://maps.yandex.by/-/C6EciCja",
             "capacity": 60
         }
     ]
}
```

### lectures

- **id**:
  - Тип: `Number`
  - Идентификатор лекции.
  
- **title**:
  - Тип: `String`
  - Название лекции.
  
- **school**:
  - Тип: `Object`
  - Массив с идентификаторами школ для которых читается лекция.
  
- **author**:
  - Тип: `Object`
  - Массив с идентификаторами лекторов которые читают данную лекцию.

- **date**:
  - Тип: `String`
  - Дата лекции.
  
- **time**:
  - Тип: `String`
  - Время лекции.
  
- **place**:
  - Тип: `Number`
  - Идентификатор места в котором проводится лекция.

- **isOver**:
  - Тип: `Boolean`
  - Статус лекции.
  
- **resources**:
  - Тип: `String`
  - Ссылка на материалы лекции.

### schools

- **id**:
  - Тип: `Number`
  - Идентификатор школы.
  
- **title**:
  - Тип: `String`
  - Название школы.

- **student**:
  - Тип: `Number`
  - Количество учеников данной школы.

### authors

- **id**:
  - Тип: `Number`
  - Идентификатор лектора.

- **title**:
  - Тип: `String`
  - Имя и фамилия лектора.

- **description**:
  - Тип: `String`
  - Краткое описание лектора.

- **photo**:
  - Тип: `String`
  - Ссылка на фотогорафию лектора.

### places

- **id**:
  - Тип: `Number`
  - Идентификатор аудитории.

- **title**:
  - Тип: `String`
  - Название аудитории.

- **address**:
  - Тип: `String`
  - Адрес аудитории.
  
- **link**:
  - Тип: `String`
  - Ссылка на карту.
  
- **capacity**:
  - Тип: `Number`
  - Вместимость аудитории.

## Подключение

Подключить файл библиотеки:

```html
<script src="/static/scripts/library.min.js"></script>
```

## Инициализация

```js
var library = new Library();

library.init();
```

## Методы

### getSchedule(dateFrom, dateTo, placeId)

- **dateFrom**:
  - Тип: `String`
  - Начальная дата. Если начальная дата неизвестна, то необходимо указать пустую строку.
  
- **dateTo**:
  - Тип: `String`
  - Конечная дата. Если конечная дата неизвестна, то необходимо указать пустую строку.
  
- **placeId**:
  - Тип: `Number`
  - Идентификатор аудитории. Чтобы получить расписания для всех аудитория, то необходимо указать пустую строку.

Возвращает promise, который возвращает объект содержащий информацию о расписании лекций в заданный интервал дат и в заданной аудитории.

Также в полученном объекте есть информация о школах, лекторах и аудиториях.

Пример использования: 

```js
library.getSchedule('2016/10/12', '2016/12/20', 0).then(function(response) {
    // do something with response
});
```

### getLecture(id)

- **id**:
  - Тип: `Number`
  - Идентификатор лекции. Чтобы получить информацию о всех лекциях, то необходимо указать пустую строку.
  
Возвращает promise, который возвращает массив, содержащий объект с информацией о лекции.

Пример использования:

```js
library.getLecture(5).then(function(response) {
    // do something with response
});
```

### getSchool(id)

- **id**:
  - Тип: `Number`
  - Идентификатор школы. Чтобы получить информацию о всех школах, то необходимо указать пустую строку.
  
Возвращает promise, который возвращает массив, содержащий объект с информацией о школе.

Пример использования:

```js
library.getSchool(1).then(function(response) {
    // do something with response
});
```

### getAuthor(id)

- **id**:
  - Тип: `Number`
  - Идентификатор лектора. Чтобы получить информацию о всех лекторах, то необходимо указать пустую строку.
  
Возвращает promise, который возвращает массив, содержащий объект с информацией о лекторе.

Пример использования:

```js
library.getAuthor(8).then(function(response) {
    // do something with response
});
```

### getPlace(id)

- **id**:
  - Тип: `Number`
  - Идентификатор аудитории. Чтобы получить информацию о всех аудиториях, то необходимо указать пустую строку.
  
Возвращает promise, который возвращает массив, содержащий объект с информацией о аудитории.

Пример использования:

```js
library.getPlace(1).then(function(response) {
    // do something with response
});
```

### expand(list, table, param)

- **list**:
  - Тип: `Object`
  - Массив со списком идентификаторов.
  
- **table**:
  - Тип: `Object`
  - Объект с данными.
  
- **param**:
  - Тип: `String`
  - Параметр который необходимо вернуть.
  
Конвертирует массив со списком идентификаторов в строку содержащую значения данных идентификаторов для переданного параметра.

Пример использования:

```js
var result = library.expand([0, 1], {title: 'schools', data: response.schools}, 'title');

// Переменная result будет содержать строку с названиями школ разделенными запятой.
```

### select(tables)

- **tables**:
  - Тип: `Object`
  - Массив со списком таблиц.
  
Возвращает promise, который возвращает объект, каждое свойство которого является массивом с данными.

Пример использования:

```js
library.select(['lectures']).then(function(response) {
    // do something with response
});
```

### update(table, data)

- **table**:
  - Тип: `String`
  - Название таблицы.
  
- **data**:
  - Тип: `Object`
  - Данные для обновления.
  
Возвращает promise, который возвращает строку с результатом запроса на обновление данных.

Пример использования:

```js
library.update('schools', {id: 0, title: 'Новое название школы', student: 30}).then(function(response) {
    // do something with response
});
```

### insert(table, data)

- **table**:
  - Тип: `String`
  - Название таблицы.
  
- **data**:
  - Тип: `Object`
  - Данные для добавления.
  
Возвращает promise, который возвращает строку с результатом запроса на добавление данных.

Пример использования:

```js
library.insert('authors', {title: 'Имя и фамилия лектора', description: 'Краткое описание лектора', photo: 'Ссылка на фотографию'}).then(function(response) {
    // do something with response
});
```
