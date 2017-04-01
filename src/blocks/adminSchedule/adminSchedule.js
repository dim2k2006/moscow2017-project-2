(function () {
    if ('modules' in app && 'adminSchedule' in app.modules) {
        return;
    }

    /**
     * Creates a new AdminSchedule class.
     * @class
     */
    var AdminSchedule = function () {
        var self = this;

        self.body = '';
        self.query = '';
        self.container = document.querySelector('.adminSchedule');
        self.content = self.container.querySelector('.adminSchedule__content');
        self.dateFromInput = self.container.querySelector('.formInput__input[name="from"]');
        self.dateToInput = self.container.querySelector('.formInput__input[name="to"]');
        self.schoolSelect = self.container.querySelector('.formSelect__select[name="school"]');
        self.template = self.container.querySelector('#adminSchedule-template').innerHTML;

        /**
         * Add event listeners
         */
        self.setupListener = function() {

        };

        /**
         * Get data from library according to filter values
         */
        self.getData = function() {
            var dateFrom = self.dateFromInput.value.replace(/-/g, '/'),
                dateTo = self.dateToInput.value.replace(/-/g, '/'),
                school = self.schoolSelect.value;

            console.log(dateFrom);
            console.log(dateTo);
            console.log(school);

            self.render(self.query(dateFrom, dateTo, school));
        };

        /**
         * Render schedule list
         * @param {Array} list
         */
        self.render = function(list) {
            var contentList = document.createElement('ul');

            contentList.classList.add('adminSchedule__list');

            list.forEach(function(item) {
                var contentItem = document.createElement('li');

                contentItem.classList.add('adminSchedule__item');
                contentItem.innerHTML = self.template;

                contentItem.querySelector('.adminSchedule__box__name').innerHTML = item.title;

                contentItem.querySelector('.adminSchedule__box__school').innerHTML = item.school.join(', ');

                contentItem.querySelector('.adminSchedule__box__author').innerHTML += item.author.join(', ');

                contentItem.querySelector('.adminSchedule__box__date').innerHTML += item.date.day;

                contentItem.querySelector('.adminSchedule__box__time').innerHTML += item.date.time;

                contentItem.querySelector('.adminSchedule__box__place').innerHTML += item.place;

                contentItem.querySelector('.adminSchedule__box__status').innerHTML += item.isOver ? 'Лекция закончилась' : 'Лекция еще не закончилась';

                contentItem.querySelector('.adminSchedule__box__resources a').href = item.resources;

                contentList.appendChild(contentItem);
            });

            self.content.appendChild(contentList);
        };

        /**
         * Import properties from Main class
         */
        self.importDefaults = function() {
            self.body = app.modules.main.body;
            self.query = app.modules.library.getSchedule;
        };

        /**
         * Init module
         */
        self.init = function() {
            if (self.container) {

                self.importDefaults();
                self.setupListener();

            }
        };
    };

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.adminSchedule = new AdminSchedule();
})();
