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
        self.getSchedule = '';
        self.getPlace = '';
        self.getSchool = '';
        self.getAuthor = '';
        self.expand = '';
        self.container = document.querySelector('.adminSchedule');
        self.content = self.container.querySelector('.adminSchedule__content');
        self.dateFromInput = self.container.querySelector('.formInput__input[name="from"]');
        self.dateToInput = self.container.querySelector('.formInput__input[name="to"]');
        self.placeSelect = self.container.querySelector('.formSelect__select[name="place"]');
        self.template = self.container.querySelector('#adminSchedule-template').innerHTML;

        /**
         * Add event listeners
         */
        self.setupListener = function() {
            self.dateFromInput.addEventListener('change', self.getData);
            self.dateToInput.addEventListener('change', self.getData);
            self.placeSelect.addEventListener('change', self.getData);
        };

        /**
         * Setup place filter values
         */
        self.setupPlaceFilter = function() {
            self.getPlace().then(function(response) {
                var html = '<option value=""></option>';

                response.forEach(function(item) {
                    html += '<option value="'+ item.id +'">'+ item.title +'</option>';
                });

                self.placeSelect.innerHTML = html;
            });
        };

        /**
         * Get data from library according to filter values
         */
        self.getData = function() {
            var dateFrom = self.dateFromInput.value.replace(/-/g, '/'),
                dateTo = self.dateToInput.value.replace(/-/g, '/'),
                place = self.placeSelect.value ? parseInt(self.placeSelect.value) : '';

            self.getSchedule(dateFrom, dateTo, place).then(function(response) {
                self.render(response);
            });
        };

        /**
         * Render schedule list
         * @param {Object} response
         */
        self.render = function(response) {
            var contentList = document.createElement('ul');

            contentList.classList.add('adminSchedule__list');

            response.lectures.forEach(function(item) {
                var contentItem = document.createElement('li');

                contentItem.classList.add('adminSchedule__item');
                contentItem.innerHTML = self.template;

                contentItem.querySelector('.adminSchedule__box__name').innerHTML = item.title;

                contentItem.querySelector('.adminSchedule__box__school').innerHTML = self.expand(item.school, response.schools);

                contentItem.querySelector('.adminSchedule__box__author').innerHTML += self.expand(item.author, response.authors);

                contentItem.querySelector('.adminSchedule__box__date').innerHTML += item.date.day;

                contentItem.querySelector('.adminSchedule__box__time').innerHTML += item.date.time;

                contentItem.querySelector('.adminSchedule__box__place').innerHTML += self.expand([item.place], response.places);

                contentItem.querySelector('.adminSchedule__box__status').innerHTML += item.isOver ? 'Лекция закончилась' : 'Лекция еще не закончилась';

                contentItem.querySelector('.adminSchedule__box__resources a').href = item.resources;

                contentList.appendChild(contentItem);
            });

            self.content.innerHTML = '';

            self.content.appendChild(contentList);
        };

        /**
         * Import properties from Main class
         */
        self.importDefaults = function() {
            self.body = app.modules.main.body;
            self.getSchedule = app.modules.main.library.getSchedule;
            self.getPlace = app.modules.main.library.getPlace;
            self.getSchool = app.modules.main.library.getSchool;
            self.getAuthor = app.modules.main.library.getAuthor;
            self.expand = app.modules.main.library.expand;
        };

        /**
         * Init module
         */
        self.init = function() {
            if (self.container) {

                self.importDefaults();
                self.setupPlaceFilter();
                self.getData();
                self.setupListener();

            }
        };
    };

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.adminSchedule = new AdminSchedule();
})();
