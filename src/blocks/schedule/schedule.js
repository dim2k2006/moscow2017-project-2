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
        self.endPoint = 'https://raw.githubusercontent.com/dim2k2006/moscow2017-project-1/master/src/schedule.json';
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

                console.log(this.responseText);

                // self.dataList = JSON.parse(this.responseText);

                // console.log(self.dataList);

                // self.render();
            };
        };

        /**
         * Render schedule
         */
        self.render = function() {
            console.log(self.dataList);
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


