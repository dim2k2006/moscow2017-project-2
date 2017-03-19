var initApp = function () {
    if ('modules' in app && 'main' in app.modules) {
        return;
    }

    /**
     * Creates a new Main class.
     * @class
     */
    var Main = function () {
        var self = this;

        self.html = document.querySelector('html');
        self.body = document.querySelector('body');
        self.modules = app.modules;

        /**
         * Init all modules in $.modules
         */
        self.initModules = function() {
            for (var module in self.modules) {

                if (self.modules.hasOwnProperty(module)) {

                    if (typeof self.modules[module].init !== 'undefined' && module !== 'main') {

                        self.modules[module].init();

                    }

                }

            }
        };

        /**
         * Init module
         */
        self.init = function() {
            self.initModules();
        };
    };

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.main = new Main();

    app.modules.main.init();
};

var app = {};

window.addEventListener('load', initApp);
