(function () {
    if ('modules' in app && 'adminSchools' in app.modules) {
        return;
    }

    /**
     * Creates a new AdminSchools class.
     * @class
     */
    var AdminSchools = function () {
        var self = this;

        self.body = '';
        self.getSchool = '';
        self.container = document.querySelector('.adminSchools');
        self.content = self.container.querySelector('.adminSchools__content');
        self.schoolSelect = self.container.querySelector('.formSelect__select[name="school"]');
        self.editTemplate = self.container.querySelector('#adminSchools-edit-template').innerHTML;

        /**
         * Add event listeners
         */
        self.setupListener = function() {
            self.schoolSelect.addEventListener('change', self.router);
        };

        /**
         * Setup school filter values
         */
        self.setupSchoolFilter = function() {
            self.getSchool().then(function(response) {
                var html = '<option value=""></option>';

                response.forEach(function(item) {
                    html += '<option value="'+ item.id +'">'+ item.title +'</option>';
                });

                self.schoolSelect.innerHTML = html;
            });
        };

        /**
         * Change block state according to filter select value
         */
        self.router = function() {
            var value = this.value;

            if (value) {

                self.getData();

            } else {



            }
        };

        /**
         * Get data from library according to filter values
         */
        self.getData = function() {
            var schoolId = self.schoolSelect.value ? parseInt(self.schoolSelect.value) : '';

            self.getSchool(schoolId).then(function(response) {
                self.renderEdit(response);
            });
        };

        /**
         * Render edit template
         * @param {Object} response
         */
        self.renderEdit = function(response) {
            var data = response[0],
                box = document.createElement('div');

            box.classList.add('adminSchools__edit');

            box.innerHTML = self.editTemplate;

            box.querySelector('.formInput__input[name="id"]').value = data.id;

            box.querySelector('.formInput__input[name="title"]').value = data.title;

            box.querySelector('.formInput__input[name="student"]').value = data.student;

            self.content.innerHTML = '';

            self.content.appendChild(box);
        };


        self.renderNew = function() {

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
            self.select = app.modules.main.library.select;
            self.expand = app.modules.main.library.expand;
        };

        /**
         * Init module
         */
        self.init = function() {
            if (self.container) {

                self.importDefaults();
                self.setupSchoolFilter();
                // self.getData();
                self.setupListener();

            }
        };
    };

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.adminSchools = new AdminSchools();
})();
