(function() {
    if ('modules' in app && 'admin' in app.modules) {
        return;
    }

    /**
     * Creates a new Admin class.
     * @class
     */
    var Admin = function () {
        var self = this;

        self.container = document.querySelector('.admin');
        self.aside = self.container.querySelector('.admin__aside');

        /**
         * Add events listeners
         */
        self.setupListener = function() {
            self.aside.addEventListener('click', self.handleAsideClick);
        };

        /**
         * Handle click in aside area
         * @param {Object} event
         */
        self.handleAsideClick = function(event) {
            event.preventDefault();

            var target = event.target,
                tagName = target.tagName,
                activeTarget = '';
                activeBox = '';
                id = '';

            if (tagName === 'A') {

                id = target.getAttribute('href');

                activeTarget = self.aside.querySelector('.admin__aside__link_state_active');

                activeBox = self.container.querySelector('.admin__box_state_active');

                if (activeTarget) {

                    activeTarget.classList.remove('admin__aside__link_state_active');

                }

                if (activeBox) {

                    activeBox.classList.remove('admin__box_state_active');

                }

                target.classList.add('admin__aside__link_state_active');
                self.container.querySelector(id).classList.add('admin__box_state_active');

            }
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
                self.setupListener();

            }
        };
    };

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.admin = new Admin();
})();


