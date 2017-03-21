(function() {
    if ('modules' in app && 'schedule' in app.modules) {
        return;
    }

    /**
     * Creates a new Schedule class.
     * @class
     */
    var Schedule = function () {
        var self = this;

        self.container = document.querySelector('.schedule');
        self.endPoint = 'https://raw.githubusercontent.com/dim2k2006/moscow2017-project-1/master/src/schedule.json?cache=' + Math.random();
        self.template = document.querySelector('#scheduleItem-template').innerHTML;
        self.list = document.querySelector('.scheduleList__list');
        self.dataList = '';

        /**
         * Retrieve data for schedule
         */
        self.getData = function() {
            var xhr = new XMLHttpRequest();

            xhr.open('GET', self.endPoint, true);

            xhr.send();

            xhr.onreadystatechange = function() {
                if (this.readyState !== 4) {
                    return
                }

                if (this.status !== 200) {
                    return;
                }

                self.dataList = JSON.parse(this.responseText);

                self.render(self.dataList);
            };
        };

        /**
         * Render schedule
         */
        self.render = function(list) {
            list.forEach(function(item) {
                var element = document.createElement('li'),
                    schools = '';

                element.classList.add('scheduleList__item');
                element.innerHTML = self.template;

                element.querySelector('.scheduleItem__date').innerHTML = item.data;
                element.querySelector('.scheduleItem__time').innerHTML = item.time;
                element.querySelector('.scheduleItem__title').innerHTML = item.title;
                element.querySelector('.scheduleItem__author').innerHTML = item.author.name;
                element.querySelector('.scheduleItem__place').innerHTML = item.place;

                item.school.forEach(function(item) {
                    schools += '<span class="scheduleItem__' + item.id +'">'+ item.name +'</span>';
                });

                element.querySelector('.scheduleItem__school').innerHTML = schools;

                self.list.appendChild(element); // create set of items and insert them in html after loop only once
            });
        };

        /**
         * Import properties from Main class
         */
        self.importDefaults = function() {
            self.body = app.modules.main.body;
        };

        /**
         * Init module
         */
        self.init = function() {
            if (self.container) {

                self.importDefaults();
                self.getData();

            }
        };
    };

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.schedule = new Schedule();
})();


