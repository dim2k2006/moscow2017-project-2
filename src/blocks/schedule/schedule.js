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

        /**
         * Retrieve data for schedule
         */
        self.getData = function() {
            console.log('get data');
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


