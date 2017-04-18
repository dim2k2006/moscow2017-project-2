/**
 * Creates a new Library class.
 * @class
 */
var Library = function () {
    var self = this;

    self.dataType = {
        lectures: {
            id: 'number',
            title: 'string',
            school: 'object',
            author: 'object',
            date: 'string',
            time: 'string',
            place: 'number',
            isOver: 'boolean',
            resources: 'string'
        },
        schools: {
            id: 'number',
            title: 'string',
            student: 'number'
        },
        authors: {
            id: 'number',
            title: 'string',
            description: 'string',
            photo: 'string'
        },
        places: {
            id: 'number',
            title: 'string',
            address: 'string',
            link: 'string',
            capacity: 'number'
        }
    };
    self.data = {
        "lectures": [
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
            },
            {
                "id": 1,
                "title": "Лекция 2. Работа с сенсорным пользовательским вводом",
                "school": [0],
                "author": [1],
                "date": "2016/10/27",
                "time": "14:00",
                "place": 1,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 2,
                "title": "Лекция 3. Мультимедиа: возможности браузера",
                "school": [0],
                "author": [2],
                "date": "2016/11/3",
                "time": "14:00",
                "place": 2,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 3,
                "title": "Лекция 4. Нативные приложения на веб-технологиях",
                "school": [0],
                "author": [3],
                "date": "2016/11/10",
                "time": "14:00",
                "place": 0,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 4,
                "title": "Лекция 5. Клиентская оптимизация: базовые знания и лучшие практики",
                "school": [0],
                "author": [4],
                "date": "2016/11/17",
                "time": "14:00",
                "place": 1,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 5,
                "title": "Лекция 6. Клиентская оптимизация: мобильные устройства и инструменты",
                "school": [0],
                "author": [5],
                "date": "2016/11/24",
                "time": "14:00",
                "place": 2,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 6,
                "title": "Лекция 7. Инфраструктура веб-проектов",
                "school": [0],
                "author": [6],
                "date": "2016/12/1",
                "time": "14:00",
                "place": 0,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 7,
                "title": "Лекция 8. Инструменты разработки мобильного фронтенда",
                "school": [0],
                "author": [6],
                "date": "2016/12/1",
                "time": "16:00",
                "place": 2,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 8,
                "title": "Лекция 1. Java Blitz (Часть 1)",
                "school": [1],
                "author": [7],
                "date": "2016/10/19",
                "time": "14:00",
                "place": 1,
                "isOver": true,
                "resources": "#"
            },
            {
                "id": 9,
                "title": "Лекция 2. Git & Workflow",
                "school": [0, 1],
                "author": [8],
                "date": "2016/10/19",
                "time": "16:00",
                "place": 1,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 10,
                "title": "Лекция 3. Java Blitz (Часть 2)",
                "school": [1],
                "author": [7],
                "date": "2016/10/25",
                "time": "14:00",
                "place": 2,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 11,
                "title": "MyFirstApp (Часть 1)",
                "school": [1],
                "author": [9],
                "date": "2016/10/25",
                "time": "16:00",
                "place": 1,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 12,
                "title": "Лекция 5. MyFirstApp (Часть 2)",
                "school": [1],
                "author": [9],
                "date": "2016/11/2",
                "time": "14:00",
                "place": 2,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 13,
                "title": "Лекция 6. ViewGroup",
                "school": [1],
                "author": [10],
                "date": "2016/11/2",
                "time": "16:00",
                "place": 1,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 14,
                "title": "Лекция 7. Background",
                "school": [1],
                "author": [11],
                "date": "2016/11/9",
                "time": "14:00",
                "place": 0,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 15,
                "title": "Лекция 8. RecyclerView",
                "school": [1],
                "author": [12],
                "date": "2016/11/9",
                "time": "16:00",
                "place": 1,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 16,
                "title": "Лекция 9. Service & Broadcasts",
                "school": [1],
                "author": [11],
                "date": "2016/11/16",
                "time": "14:00",
                "place": 0,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 17,
                "title": "Лекция 10. Drawing",
                "school": [1],
                "author": [10],
                "date": "2016/11/16",
                "time": "16:00",
                "place": 2,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 18,
                "title": "Лекция 11. Content provider",
                "school": [1],
                "author": [13],
                "date": "2016/11/23",
                "time": "14:00",
                "place": 0,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 19,
                "title": "Лекция 12. SQL&SQLite",
                "school": [1],
                "author": [13],
                "date": "2016/11/23",
                "time": "16:00",
                "place": 1,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 20,
                "title": "Лекция 13. Fragments (Часть 1)",
                "school": [1],
                "author": [14],
                "date": "2016/11/30",
                "time": "14:00",
                "place": 2,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 21,
                "title": "Лекция 14. Fragments (Часть 2)",
                "school": [1],
                "author": [14],
                "date": "2016/11/30",
                "time": "16:00",
                "place": 2,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 22,
                "title": "Лекция 15. MVP&Co",
                "school": [1],
                "author": [15],
                "date": "2016/12/7",
                "time": "14:00",
                "place": 0,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 23,
                "title": "Лекция 16. Debugging & Polishing",
                "school": [1],
                "author": [16],
                "date": "2016/12/14",
                "time": "14:00",
                "place": 2,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 24,
                "title": "Лекция 1. Идея, исследование, концепт (Часть 1)",
                "school": [2],
                "author": [0],
                "date": "2016/10/18",
                "time": "14:00",
                "place": 0,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 25,
                "title": "Лекция 2. Идея, исследование, концепт (Часть 2)",
                "school": [2],
                "author": [0],
                "date": "2016/10/18",
                "time": "16:00",
                "place": 1,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 26,
                "title": "Лекция 3. Особенности проектирования мобильных интерфейсов",
                "school": [2],
                "author": [17],
                "date": "2016/10/25",
                "time": "14:00",
                "place": 2,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 27,
                "title": "Лекция 4. Продукт и платформа",
                "school": [2],
                "author": [18],
                "date": "2016/11/1",
                "time": "14:00",
                "place": 0,
                "isOver": true,
                "resources": "#"
            },
            {
                "id": 28,
                "title": "Лекция 5. Природа операционных систем",
                "school": [2],
                "author": [17],
                "date": "2016/11/1",
                "time": "16:00",
                "place": 0,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 29,
                "title": "Лекция 6. Прототипирование как процесс",
                "school": [2],
                "author": [19, 20],
                "date": "2016/11/8",
                "time": "14:00",
                "place": 1,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 30,
                "title": "Лекция 7. Инструмент под задачи",
                "school": [2],
                "author": [19, 20],
                "date": "2016/11/8",
                "time": "16:00",
                "place": 1,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 31,
                "title": "Лекция 8. Анимации",
                "school": [2],
                "author": [19, 20],
                "date": "2016/11/15",
                "time": "14:00",
                "place": 2,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 32,
                "title": "Дополнительная лекция. Design Everything",
                "school": [2],
                "author": [21, 22],
                "date": "2016/11/15",
                "time": "16:00",
                "place": 2,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 33,
                "title": "Лекция 9. Развите продукта",
                "school": [2],
                "author": [23],
                "date": "2016/11/22",
                "time": "14:00",
                "place": 0,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 34,
                "title": "Лекция 10. Исследование интерфейсов",
                "school": [2],
                "author": [24],
                "date": "2016/11/29",
                "time": "14:00",
                "place": 1,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 35,
                "title": "Лекция 11. Работа в команде",
                "school": [1, 2],
                "author": [25],
                "date": "2016/12/6",
                "time": "14:00",
                "place": 1,
                "isOver": false,
                "resources": "#"
            },
            {
                "id": 36,
                "title": "Дополнительная лекция. Айдентика",
                "school": [2],
                "author": [26, 27],
                "date": "2016/12/13",
                "time": "14:00",
                "place": 2,
                "isOver": false,
                "resources": "#"
            }
        ],

        "schools": [
            {
                "id": 0,
                "title": "Школа разработки интерфейсов",
                "student": 30
            },
            {
                "id": 1,
                "title": "Школа мобильной разработки",
                "student": 25
            },
            {
                "id": 2,
                "title": "Школа мобильного дизайна",
                "student": 28
            }
        ],

        "authors": [
            {
                "id": 0,
                "title": "Антон Тен",
                "description": "В Яндексе с 2014 года. Ведущий дизайнер продукта в сервисах Переводчик, Расписания и Видео.",
                "photo": "images/vis-author-0.jpg"
            },
            {
                "id": 1,
                "title": "Дмитрий Душкин",
                "description": "Кандидат технических наук, научный сотрудник ИПУ РАН с 2008 по 2013. Пришёл в Яндекс.Картинки в 2014 году, отвечал за мобильную версию и рост производительности сервиса. В 2016 перешёл в Yandex Data Factory, где разрабатывает интерфейсы и дизайн веб-приложений для B2B.",
                "photo": "images/vis-author-1.jpg"
            },
            {
                "id": 2,
                "title": "Максим Васильев",
                "description": "Во фронтенд-разработке с 2007 года. До 2013-го, когда пришёл в Яндекс, работал технологом в студии Лебедева и других компаниях.",
                "photo": "images/vis-author-2.jpg"
            },
            {
                "id": 3,
                "title": "Сергей Бережной",
                "description": "Веб-разработчик в Яндексе с 2005 года. Успел поработать над Поиском, Почтой, Поиском по блогам, Я.ру, Картинками, Видео. Помимо этого, активно занимается развитием внутренних инструментов для создания сайтов.",
                "photo": "images/vis-author-3.jpg"
            },
            {
                "id": 4,
                "title": "Андрей Морозов",
                "description": "Окончил радиофизический факультет Киевского Национального Университета. Автор трёх патентных заявок. В Яндексе с 2014 года, разрабатывает интерфейсы Яндекс.Карт.",
                "photo": "images/vis-author-4.jpg"
            },
            {
                "id": 5,
                "title": "Иван Карев",
                "description": "Окончил факультет ВМК (вычислительной математики и кибернетики) МГУ им. М.В. Ломоносова, занимается веб-программированием с 2007 года. Сначала делал админки для системы фильтрации трафика, затем — интерфейсы онлайн-карт для проекта Космоснимки. В Яндексе начинал с Народа и Я.ру, последние два года занимался главной страницей. В настоящее время специализируется на вопросах производительности: от серверного JS до оптимизации загрузки страницы на клиенте.",
                "photo": "images/vis-author-5.jpg"
            },
            {
                "id": 6,
                "title": "Прокопюк Андрей",
                "description": "В 2008 году впечатлился веб-разработкой из-за скорости воплощения идей и лёгкость их донесения до пользователей. В Яндексе с 2014 года, разрабатывает страницу поисковой выдачи. Любит сложные задачи, интересуется аналитикой, тестированием и новыми способами автоматизировать рутину.",
                "photo": "images/vis-author-6.jpg"
            },
            {
                "id": 7,
                "title": "Эдуард Мацуков",
                "description": "Разрабатываю приложения для Android с 2010 года. В 2014 делал высоконагруженное финансовое приложение. Тогда же начал осваивать АОП, внедряя язык в продакшн. В 2015 разрабатывал инструменты для Android Studio, позволяющие использовать aspectJ в своих проектах. В Яндексе занят на проекте Авто.ру.",
                "photo": "images/vis-author-7.jpg"
            },
            {
                "id": 8,
                "title": "Дмитрий Складнов",
                "description": "Окончил факультет ИТ Московского Технического Университета. В Яндексе с 2015 года, разрабатывает приложение Auto.ru для Android.",
                "photo": "images/vis-author-8.jpg"
            },
            {
                "id": 9,
                "title": "Роман Григорьев",
                "description": "Окончил Самарский университет. Разрабатывает приложения для Android с 2010 года. В Яндексе — с 2012-го. Руководит разработкой мобильных клиентов Яндекс.Диска.",
                "photo": "images/vis-author-9.jpg"
            },
            {
                "id": 10,
                "title": "Алексей Щербинин",
                "description": "Профессионал с глубокими познаниями в графической части Android и всего, что с ней связано. Любит нестандартные задачи и решает их в команде мобильного Яндекс Браузера.",
                "photo": "images/vis-author-10.jpg"
            },
            {
                "id": 11,
                "title": "Алексей Макаров",
                "description": "Выпускник Московского Института Электронной Техники. Android- и Python-разработчик. В команде мобильного Яндекс.Браузера с 2015 года.",
                "photo": "images/vis-author-11.jpg"
            },
            {
                "id": 12,
                "title": "Владимир Тагаков",
                "description": "Энтузиаст разработки под Android, в Яндексе занимается оптимизацией и разработкой мобильного приложения Карт.",
                "photo": "images/vis-author-12.jpg"
            },
            {
                "id": 13,
                "title": "Максим Хромцов",
                "description": "Учится в магистратуре на факультете информатики и вычислительной техники Московского института радиотехники, электроники и автоматики. С 2005 года занимается разработкой приложений (игры, бизнес-приложения) для мобильных устройств на платформах J2ME, Windows Mobile, Android, Symbian, участвовал в разработке веб-приложений на Java EE. В Яндексе с 2010 года, занимается разработкой для мобильных устройств на платформах J2ME и Android.",
                "photo": "images/vis-author-13.jpg"
            },
            {
                "id": 14,
                "title": "Денис Загаевский",
                "description": "Окончил факультет ВМК МГУ им. Ломоносова. Занимается разработкой приложений и игр с 2011 года, в 2012-м сконцентрировался на мобильных платформах Android и iOS. В Яндексе разрабатывает приложения для Android.",
                "photo": "images/vis-author-14.jpg"
            },
            {
                "id": 15,
                "title": "Дмитрий Попов",
                "description": "Окончил факультет ПМТ Вятского государственного университета в 2012 году. В Яндексе с 2015-го, занимается разработкой продуктов медийных сервисов.",
                "photo": "images/vis-author-15.jpg"
            },
            {
                "id": 16,
                "title": "Илья Сергеев",
                "description": "Разрабатывает приложения под мобильные платформы с 2009 года. За это время принял участие более чем в 30 законченных проектах под Android, iOS, и Windows Phone. В Яндексе с 2015 года, занимается разработкой КиноПоиска под Android и iOS.",
                "photo": "images/vis-author-16.jpg"
            },
            {
                "id": 17,
                "title": "Васюнин Николай",
                "description": "Пришёл в Яндекс в 2014 году. Дизайнер продукта в музыкальных сервисах компании, участник команды разработки Яндекс.Радио.",
                "photo": "images/vis-author-17.jpg"
            },
            {
                "id": 18,
                "title": "Сергей Калабин",
                "description": "Пришёл в компанию дизайнером мобильных приложений в 2013-м. Три года занимался музыкальными сервисами Яндекса, сейчас руководит дизайном турецкого направления. Считает что дизайнера должна отличать любовь к людям.",
                "photo": "images/vis-author-18.jpg"
            },
            {
                "id": 19,
                "title": "Сергей Томилов",
                "description": "Серёжа: Профессионально занимается дизайном с 2009 года. В 2010 году переключился на работу исключительно над интерфейсами, по большей части мобильными. В Яндекс пришёл в 2011 году. Участвовал в создании разных продуктов Поиска, Диска, Фоток и Музыки для всех популярных платформ.",
                "photo": "images/vis-author-19.jpg"
            },
            {
                "id": 20,
                "title": "Дарья Старицына",
                "description": "Дизайнер мобильных продуктов. До прихода в компанию занималась интерфейсами мобильных игр. В Яндексе делает Браузер под все платформы. Также успела поработать над экспериментальными голосовыми интерфейсами и мобильной версией главной страницы Яндекса.",
                "photo": "images/vis-author-20.jpg"
            },
            {
                "id": 21,
                "title": "Rijshouwer Krijn",
                "description": "Krijn Rijshouwer is a product designer. “I like to create and work on products that have a positive impact in the world. The thing that attracts me most in doing what I do at Framer, and did before at other companies, is changing the way a lot of people work, live and consume on a daily basis with just the push of a button.",
                "photo": "images/vis-author-21.jpg"
            },
            {
                "id": 22,
                "title": "Treub Jonas",
                "description": "Jonas Treub is a software developer. “I am a creative software developer with experience working on a variety of projects, from small prototypes to large apps for some well-known Dutch clients.”",
                "photo": "images/vis-author-22.jpg"
            },
            {
                "id": 23,
                "title": "Андрей Гевак",
                "description": "В конце 2013 года команда сервиса Яндекс.Музыка начала разработку новой версии. Новой получилась не только «шкурка», то есть дизайн, но и сами возможности. Мы переосмыслили поведение пользователей на сайте и в приложении и иначе оценили потребность людей в новой музыке. В результате этого получилась нынешняя версия music.yandex.ru и её мобильные клиенты. В докладе я расскажу о том, как шёл процесс переосмысления, почему мы сделали именно так, как сделали, и что из этого всего вышло.",
                "photo": "images/vis-author-23.jpg"
            },
            {
                "id": 24,
                "title": "Кондратьев Александр",
                "description": "Занимается исследованиями интерфейсов в Яндексе больше 5 лет. За это время поработал с десятками продуктов Поиска, Карт, Маркета, Почты и других сервисов компании. Заинтересовался интерфейсами в 2005 году, по образованию специалист по защите информации.",
                "photo": "images/vis-author-24.jpg"
            },
            {
                "id": 25,
                "title": "Юрий Подорожный",
                "description": "Руководитель службы разработки мобильных геоинформационных сервисов «Яндекса». Работает над «Яндекс.Картами» и «Яндекс.Метро». Занимается мобильной разработкой более восьми лет.",
                "photo": "images/vis-author-25.jpg"
            },
            {
                "id": 26,
                "title": "Дмитрий Моруз",
                "description": "Работал дизайнером в студии «Трансформер», с 2014 года — дизайнер систем идентификации в Яндексе.",
                "photo": "images/vis-author-26.jpg"
            },
            {
                "id": 27,
                "title": "Ждан Филиппов",
                "description": "Арт-директор коммуникаций Яндекса. В прошлом — арт-директор журналов «CitizenK», «Эрмитаж», «Секрет Фирмы», «Top-Flight», сотрудник «Мастерской Димы Барбанеля». Занимался макетной работой для компаний Readymag, Aliexpress, ONY, Charmer, MINI, Grohe и Мосметрострой.",
                "photo": "images/vis-author-27.jpg"
            }
        ],

        "places": [
            {
                "id": 0,
                "title": "Синий кит",
                "address": "ул. Льва Толстого, 16",
                "link": "https://maps.yandex.by/-/C6EciCja",
                "capacity": 60
            },
            {
                "id": 1,
                "title": "Зеленая комната",
                "address": "ул. Льва Толстого, 16",
                "link": "https://maps.yandex.by/-/C6EciCja",
                "capacity": 40
            },
            {
                "id": 2,
                "title": "Красный шар",
                "address": "ул. Льва Толстого, 16",
                "link": "https://maps.yandex.by/-/C6EciCja",
                "capacity": 50
            }
        ]
    };

    /**
     * Load data to local storage if it is empty. For demo purpose only
     */
    self.loadData = function() {
        var localData = JSON.parse(localStorage.getItem('schedule'));

        if (!localData) {

            self.updateLocalStorage(self.data);

        }
    };

    /**
     * Get schedule at a given date range and place
     * @param {String} dateFrom
     * @param {String} dateTo
     * @param {Number} placeId
     */
    self.getSchedule = function(dateFrom, dateTo, placeId) {
        return new Promise(function(resolve, reject) {
            self.select(['lectures', 'schools', 'authors', 'places']).then(function(response) {
                response.lectures = self.sort(response.lectures.filter(function(item) {
                    var itemDate = new Date(item.date).getTime(),
                        limitDateFrom = new Date(dateFrom).getTime() || 0,
                        limitDateTo = new Date(dateTo).getTime() || Infinity,
                        result = false;

                    if (typeof placeId === 'number') {

                        result = itemDate >= limitDateFrom && itemDate <= limitDateTo && placeId === item.place;

                    } else {

                        result = itemDate >= limitDateFrom && itemDate <= limitDateTo;

                    }

                    return result;
                }));

                resolve(response);
            });
        });
    };

    /**
     * Get lecture by id. If id not defined then return all lectures
     * @param {Number} id
     * @returns {Array}
     */
    self.getLecture = function(id) {
        return new Promise(function(resolve, reject) {
            self.select(['lectures']).then(function(response) {
                var result = [];

                if (typeof id === 'number') {

                    result = response.lectures.filter(function(item) {
                        return item.id === id;
                    });

                } else {

                    result = response.lectures.slice();

                }

                resolve(result);
            })
        });
    };

    /**
     * Get school by id. If id not defined then return all schools
     * @param {Number} id
     * @returns {Array}
     */
    self.getSchool = function(id) {
        return new Promise(function(resolve, reject) {
            self.select(['schools']).then(function(response) {
                var result = [];

                if (typeof id === 'number') {

                    result = response.schools.filter(function(item) {
                        return item.id === id;
                    });

                } else {

                    result = response.schools.slice();

                }

                resolve(result);
            })
        });
    };

    /**
     * Get author by id. If id not defined then return all authors
     * @param {Number} id
     * @returns {Array}
     */
    self.getAuthor = function(id) {
        return new Promise(function(resolve, reject) {
            self.select(['authors']).then(function (response) {
                var result = [];

                if (typeof id === 'number') {

                    result = response.authors.filter(function(item) {
                        return item.id === id;
                    });

                } else {

                    result = response.authors.slice();

                }

                resolve(result.length > 0 ? result : [{title: 'Лектор с идентификатором ' + id + 'не найден.'}]);
            });
        });
    };

    /**
     * Get place by id. If id not defined then return all places
     * @param {Number} id
     * @returns {Array}
     */
    self.getPlace = function(id) {
        return new Promise(function(resolve, reject) {
            self.select(['places']).then(function (response) {
                var result = [];

                if (typeof id === 'number') {

                    result = response.places.filter(function(item) {
                        return item.id === id;
                    });

                } else {

                    result = response.places.slice();

                }

                resolve(result.length > 0 ? result : [{title: 'Место с идентификатором ' + id + 'не найдено.'}]);
            });
        });
    };

    /**
     * Sort data
     * @param {Array} data
     * @returns {Array}
     */
    self.sort = function(data) {
        return data.sort(function(a, b) {
            var aDate = new Date(a.date + ' ' + a.time).getTime(),
                bDate = new Date(b.date + ' ' + b.time).getTime();

            return aDate > bDate ? 1 : -1;
        });
    };

    /**
     * Expand array of id into string
     * @param {Array} list of id
     * @param {Object} table data for filtering
     * @param {String} param for retrieve
     * @returns {string} result string
     */
    self.expand = function(list, table, param) {
        var resultList = [];

        if (list.length > 0 && table.data.length > 0) {

            resultList = list.map(function(requestedId) {

                var resultItem = table.data.filter(function(item) {
                    return item.id === requestedId;
                });

                try {

                    return resultItem[0][param];

                } catch(error) {

                    console.log('Запрашиваемый элемент с id = ' + requestedId + ' не найден таблице '+ table.title +'. ' + '\n' + error.name + ': ' + error.message + '\n' + error.stack);

                    return '';

                }

            });

        }

        return resultList.join(', ');
    };

    /**
     * Validate data
     * @param {String} table
     * @param {Object} data
     * @param {Object} types
     * @returns {Object}
     */
    self.validate = function(table, data, types) {
        for (var field in types[table]) {
            if (types[table].hasOwnProperty(field) && data.hasOwnProperty(field)) {

                if (data[field] !== undefined && typeof data[field] === types[table][field]) {

                    if (types[table][field] === 'string' && data[field].length === 0) {

                        return {type: 'error', msg: 'Указан некорректный тип данных для поля ' + field + ' в таблице ' + table + '.'};

                    } else if (types[table][field] === 'number' && isNaN(data[field])) {

                        return {type: 'error', msg: 'Указан некорректный тип данных для поля ' + field + ' в таблице ' + table + '.'};

                    } else if (field === 'school' && !data[field].length) {

                        return {type: 'error', msg: 'Указан некорректный тип данных для поля ' + field + ' в таблице ' + table + '.'};

                    } else if (field === 'author' && !data[field].length) {

                        return {type: 'error', msg: 'Указан некорректный тип данных для поля ' + field + ' в таблице ' + table + '.'};

                    } else if (field === 'date' && !data[field].match(/^(\d{4})\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/)) {

                        return {type: 'error', msg: 'Указан некорректный тип данных для поля ' + field + ' в таблице ' + table + '.'};

                    } else if (field === 'time' && !data[field].match(/^(\d{2})\:(\d{2})$/)) {

                        return {type: 'error', msg: 'Указан некорректный тип данных для поля ' + field + ' в таблице ' + table + '.'};

                    }

                } else {

                    return {type: 'error', msg: 'Указан некорректный тип данных для поля ' + field + ' в таблице ' + table + '.'};

                }

            } else {

                return {type: 'error', msg: 'Указано некорректное поле для таблицы ' + table + '.'};

            }
        }

        return {type: 'success', msg: 'Данные корректны.'};
    };

    /**
     * Check data correctness and coherence
     * @param {Object} db
     * @param {String} tableName
     * @param {Object} data
     * @returns {Object}
     */
    self.correct = function(db, tableName, data) {
        var result = {type: true, msg: ''};

        if (tableName === 'lectures') {

            db[tableName].forEach(function(item) {
                var totalStudents = 0,
                    placeCapacity = 0;

                if (item.place === data.place && new Date(item.date + ' ' + item.time).getTime() === new Date(data.date + ' ' + data.time).getTime()) {

                    result.type = false;
                    result.msg = 'В одной аудитории не может быть одновременно двух разных лекций.';

                }

                data.school.forEach(function(id) {
                    db['schools'].forEach(function(item) {
                        if (item.id === id) {

                            totalStudents += item.student;

                        }
                    });

                    if (item.school.indexOf(id) !== -1 && new Date(item.date + ' ' + item.time).getTime() === new Date(data.date + ' ' + data.time).getTime()) {

                        result.type = false;
                        result.msg = 'Для одной школы не может быть двух лекций одновременно.';

                    }

                });

                db['places'].forEach(function(placeItem) {
                    if (placeItem.id === data.place) {

                        placeCapacity = placeItem.capacity;

                    }
                });


                if (totalStudents > placeCapacity) {

                    result.type = false;
                    result.msg = 'Вместимость аудитории должна быть больше или равной количеству студентов на лекции.';

                }
            });

            if (!result.type) {

                return {type: 'error', msg: result.msg};

            }

        }

        return {type: 'success', msg: 'Данные корректны.'};
    };

    /**
     * Select data from database
     * @param {Array} tables
     */
    self.select = function(tables) {
        return new Promise(function(resolve, reject) {
            self.query().then(function(response) {
                var result = {};

                tables.forEach(function(table) {
                    if (response.hasOwnProperty(table)) {

                        result[table] = response[table];

                    } else {

                        throw new Error('Не удалось получить данные для таблицы ' + table + '.');

                    }
                });

                resolve(result);
            });
        });
    };

    /**
     * Update data in database
     * @param {String} table
     * @param {Object} data
     */
    self.update = function(table, data) {
        return new Promise(function(resolve, reject) {
            self.query().then(function(response) {
                if (response.hasOwnProperty(table) && self.dataType[table]) {

                    var isValid = self.validate(table, data, self.dataType);

                    if (isValid.type === 'error') {

                        reject(isValid.msg);

                        return false;

                    } else {

                        isCorrect = self.correct(response, table, data);

                        if (isCorrect.type === 'error') {

                            reject(isCorrect.msg);

                            return false;

                        } else {

                            response[table] = response[table].map(function(item) {
                                if (item.id === data.id) {

                                    item = data;

                                }

                                return item;
                            });

                            self.updateLocalStorage(response);

                            resolve('Данные в таблице ' + table + ' изменены.');

                        }

                    }

                } else {

                    reject('Не удалось получить данные для таблицы ' + table + '.');

                }
            });
        });
    };

    /**
     * Insert data in database
     * @param {String} table
     * @param {Object} data
     */
    self.insert = function(table, data) {
        return new Promise(function(resolve, reject) {
            self.query().then(function(response) {
                if (response.hasOwnProperty(table) && self.dataType[table]) {

                    data.id = response[table].length >= 1 ? response[table][response[table].length - 1].id + 1 : 0;

                    var isValid = self.validate(table, data, self.dataType);

                    if (isValid.type === 'error') {

                        reject(isValid.msg);

                        return false;

                    } else {

                        isCorrect = self.correct(response, table, data);

                        if (isCorrect.type === 'error') {

                            reject(isCorrect.msg);

                            return false;

                        } else {

                            response[table].push(data);

                            self.updateLocalStorage(response);

                            resolve('Данные добавлены в таблицу ' + table + '.');

                        }

                    }

                } else {

                    reject('Не удалось получить данные для таблицы ' + table + '.');

                }
            });
        });
    };

    /**
     * Delete data from database
     */
    self.delete = function(table, data) {
        return new Promise(function(resolve, reject) {
            self.query().then(function (response) {
                if (response.hasOwnProperty(table) && self.dataType[table]) {

                    var prevLength = response[table].length,
                        nextLength = 0;

                    response[table] = response[table].filter(function(item) {
                        return item.id !== data.id;
                    });

                    nextLength = response[table].length;

                    if (nextLength < prevLength) {

                        self.updateLocalStorage(response);

                        resolve('Данные успешно удалены из таблицы ' + table + '.');

                    } else {

                        reject('Не удалось найти данные с id ' + data.id + ' в таблице ' + table + '.');

                    }
                }
            });
        });
    };

    /**
     * Get data from local storage (database)
     * @returns {Promise}
     */
    self.query = function() {
        return new Promise(function(resolve, reject) {
            var data = JSON.parse(localStorage.getItem('schedule'));

            if (data) {

                resolve(data);

            } else {

                reject(new Error('Не удалось получить данные.'));

            }
        });
    };

    /**
     * Update local storage
     * @param {Object} data
     */
    self.updateLocalStorage = function(data) {
        var data = JSON.stringify(data);

        localStorage.setItem('schedule', data);
    };

    /**
     * Init module
     */
    self.init = function() {
        self.loadData();
    };
};
