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
        self.insert = '';
        self.container = document.querySelector('.adminSchools');
        self.content = self.container.querySelector('.adminSchools__content');
        self.schoolSelect = self.container.querySelector('.formSelect__select[name="school"]');
        self.editTemplate = self.container.querySelector('#adminSchools-template').innerHTML;

        /**
         * Add event listeners
         */
        self.setupListener = function() {
            self.schoolSelect.addEventListener('change', self.handleState);
            self.container.addEventListener('click', self.router);
        };

        /**
         * Route container click event
         * @param {Object} event
         */
        self.router = function(event) {
            event.preventDefault();

            var action = event.target.dataset.action;

            if (action) {

                if (self[action]) {

                    self[action]();

                }

            }
        };

        /**
         * Add item to database
         */
        self.add = function() {
            self.insert('schools', {
                id: parseInt(self.container.querySelector('.formInput__input[name="id"]').value),
                title: self.container.querySelector('.formInput__input[name="title"]').value,
                student: parseInt(self.container.querySelector('.formInput__input[name="student"]').value)
            }).then(function(response) {
                alert(response);

                self.setupSchoolFilter();
                self.setNewState();
            }, function(response) {
                alert(response);
            });
        };

        /**
         * Edit item in database
         */
        self.edit = function() {
            console.log('edit')
        };

        /**
         * Remove item from database
         */
        self.remove = function() {
            if (confirm('Вы действительно хотите удалить выбранную школу?')) {

                self.delete('schools', {
                    id: parseInt(self.container.querySelector('.formInput__input[name="id"]').value),
                    title: self.container.querySelector('.formInput__input[name="title"]').value,
                    student: parseInt(self.container.querySelector('.formInput__input[name="student"]').value)
                }).then(function(response) {
                    alert(response);

                    self.setupSchoolFilter();
                    self.setNewState();
                }, function(response) {
                    alert(response);
                });

            }
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
        self.handleState = function() {
            if (self.schoolSelect.value) {

                self.setEditState();

            } else {

                self.setNewState();

            }
        };

        /**
         * Prepare template for edit/delete item state
         */
        self.setEditState = function() {
            var schoolId = self.schoolSelect.value ? parseInt(self.schoolSelect.value) : '';

            self.getSchool(schoolId).then(function(response) {
                var data = response[0],
                    box = document.createElement('div');

                box.classList.add('adminSchools__edit');

                box.innerHTML = self.editTemplate;

                box.querySelector('.adminSchools__title').style.display = 'none';

                box.querySelector('.formInput__input[name="id"]').value = data.id;

                box.querySelector('.formInput__input[name="title"]').value = data.title;

                box.querySelector('.formInput__input[name="student"]').value = data.student;

                box.querySelector('.adminSchools__box__button_type_add').style.display = 'none';

                self.render(box);
            });
        };

        /**
         * Prepare template for add new item state
         */
        self.setNewState = function() {
            self.getSchool().then(function(response) {
                var nextId = response.length + 1,
                    box = document.createElement('div');

                box.classList.add('adminSchools__add');

                box.innerHTML = self.editTemplate;

                box.querySelector('.formInput__input[name="id"]').value = nextId;

                box.querySelector('.formInput__input[name="id"]').disabled = true;

                box.querySelector('.adminSchools__box__button_type_edit').style.display = 'none';

                box.querySelector('.adminSchools__box__button_type_remove').style.display = 'none';

                self.render(box);
            });
        };

        /**
         * Render template
         */
        self.render = function(template) {
            self.content.innerHTML = '';

            self.content.appendChild(template);
        };

        /**
         * Import properties from Main class
         */
        self.importDefaults = function() {
            self.body = app.modules.main.body;
            self.getSchool = app.modules.main.library.getSchool;
            self.insert = app.modules.main.library.insert;
            self.delete = app.modules.main.library.delete;
        };

        /**
         * Init module
         */
        self.init = function() {
            if (self.container) {

                self.importDefaults();
                self.setupSchoolFilter();
                self.handleState();
                self.setupListener();

            }
        };
    };

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.adminSchools = new AdminSchools();
})();
