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

        };

        /**
         * Setup place filter values
         */
        self.setupPlaceFilter = function() {
            var result = self.getPlace(),
                html = '<option value=""></option>';

            result.forEach(function(item) {
                html += '<option value="'+ item.id +'">'+ item.title +'</option>';
            });

            self.placeSelect.innerHTML = html;
        };

        /**
         * Get data from library according to filter values
         */
        self.getData = function() {
            var dateFrom = self.dateFromInput.value.replace(/-/g, '/'),
                dateTo = self.dateToInput.value.replace(/-/g, '/'),
                place = self.placeSelect.value ? parseInt(self.placeSelect.value) : '';

            self.render(self.getSchedule(dateFrom, dateTo, place));
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

                var school = item.school.map(function(requestedId) {
                    var returnedItem = self.getSchool(requestedId);

                    return returnedItem[0].title;
                });

                var author = item.author.map(function(requestedId) {
                    var returnedItem = self.getAuthor(requestedId);

                    return returnedItem[0].title;
                });

                var place = self.getPlace(item.place)[0].title;

                contentItem.querySelector('.adminSchedule__box__name').innerHTML = item.title;

                contentItem.querySelector('.adminSchedule__box__school').innerHTML = school.join(', ');

                contentItem.querySelector('.adminSchedule__box__author').innerHTML += author.join(', ');

                contentItem.querySelector('.adminSchedule__box__date').innerHTML += item.date.day;

                contentItem.querySelector('.adminSchedule__box__time').innerHTML += item.date.time;

                contentItem.querySelector('.adminSchedule__box__place').innerHTML += place;

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
            self.getSchedule = app.modules.library.getSchedule;
            self.getPlace = app.modules.library.getPlace;
            self.getSchool = app.modules.library.getSchool;
            self.getAuthor = app.modules.library.getAuthor;
        };

        /**
         * Init module
         */
        self.init = function() {
            if (self.container) {

                self.importDefaults();
                self.setupPlaceFilter();
                self.setupListener();

            }
        };
    };

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.adminSchedule = new AdminSchedule();
})();
