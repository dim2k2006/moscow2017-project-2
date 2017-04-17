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

## Methods

### loadData()

Load data to local storage if it is empty. For demo purpose only

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
