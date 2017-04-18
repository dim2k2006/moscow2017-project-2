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
  - Идентификатор аудитории. Чтобы получить расписания для всех аудитория, то необходимо указать пустую строку

Возвращает promise, который возвращает объект содержащий информацию о расписании лекций в заданный интервал дат и в заданной аудитории.

Также в полученном объекте есть информация о школах, лекторах и аудиториях.









```js
$().cropper({
  autoCrop: false,
  ready: function () {
    // Do something here
    // ...

    // And then
    $(this).cropper('crop');
  }
});
```
