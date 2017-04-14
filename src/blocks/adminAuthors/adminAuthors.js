(function () {
    if ('modules' in app && 'adminAuthors' in app.modules) {
        return;
    }

    /**
     * Creates a new AdminAuthors class.
     * @class
     */
    var AdminAuthors = function () {
        var self = this;

        self.body = '';
        self.alert = '';
        self.getAuthor = '';
        self.insert = '';
        self.update = '';
        self.container = document.querySelector('.adminAuthors');
        self.content = self.container.querySelector('.adminAuthors__content');
        self.authorSelect = self.container.querySelector('.formSelect__select[name="author"]');
        self.editTemplate = self.container.querySelector('#adminAuthors-template').innerHTML;

        /**
         * Add event listeners
         */
        self.setupListener = function() {
            self.authorSelect.addEventListener('change', self.handleState);
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
            self.insert('authors', {
                id: parseInt(self.container.querySelector('.formInput__input[name="id"]').value),
                title: self.container.querySelector('.formInput__input[name="title"]').value,
                description: self.container.querySelector('.formInput__input[name="description"]').value,
                photo: self.container.querySelector('.formInput__input[name="photo"]').value
            }).then(function(response) {
                self.alert({
                    title: '',
                    text: response,
                    type: 'success'
                });

                self.setupAuthorFilter();
                self.setNewState();
            }, function(response) {
                self.alert({
                    title: '',
                    text: response,
                    type: 'error'
                });
            });
        };

        /**
         * Edit item in database
         */
        self.edit = function() {
            self.update('authors', {
                id: parseInt(self.container.querySelector('.formInput__input[name="id"]').value),
                title: self.container.querySelector('.formInput__input[name="title"]').value,
                description: self.container.querySelector('.formInput__input[name="description"]').value,
                photo: self.container.querySelector('.formInput__input[name="photo"]').value
            }).then(function(response) {
                self.alert({
                    title: '',
                    text: response,
                    type: 'success'
                });
            }, function(response) {
                self.alert({
                    title: '',
                    text: response,
                    type: 'error'
                });
            });
        };

        /**
         * Remove item from database
         */
        self.remove = function() {
            if (confirm('Вы действительно хотите удалить выбранного лектора?')) {

                self.delete('authors', {
                    id: parseInt(self.container.querySelector('.formInput__input[name="id"]').value),
                    title: self.container.querySelector('.formInput__input[name="title"]').value,
                    description: self.container.querySelector('.formInput__input[name="description"]').value,
                    photo: self.container.querySelector('.formInput__input[name="photo"]').value
                }).then(function(response) {
                    self.alert({
                        title: '',
                        text: response,
                        type: 'success'
                    });

                    self.setupAuthorFilter();
                    self.setNewState();
                }, function(response) {
                    self.alert({
                        title: '',
                        text: response,
                        type: 'error'
                    });
                });

            }
        };

        /**
         * Setup author filter values
         */
        self.setupAuthorFilter = function() {
            self.getAuthor().then(function(response) {
                var html = '<option value=""></option>';

                response.forEach(function(item) {
                    html += '<option value="'+ item.id +'">'+ item.title +'</option>';
                });

                self.authorSelect.innerHTML = html;
            });
        };

        /**
         * Change block state according to filter select value
         */
        self.handleState = function() {
            if (self.authorSelect.value) {

                self.setEditState();

            } else {

                self.setNewState();

            }
        };

        /**
         * Prepare template for edit/delete item state
         */
        self.setEditState = function() {
            var authorId = self.authorSelect.value ? parseInt(self.authorSelect.value) : '';

            self.getAuthor(authorId).then(function(response) {
                var data = response[0],
                    box = document.createElement('div');

                box.classList.add('adminAuthors__edit');

                box.innerHTML = self.editTemplate;

                box.querySelector('.adminAuthors__title').style.display = 'none';

                box.querySelector('.formInput__input[name="id"]').value = data.id;

                box.querySelector('.formInput__input[name="title"]').value = data.title;

                box.querySelector('.formInput__input[name="description"]').value = data.description;

                box.querySelector('.formInput__input[name="photo"]').value = data.photo;

                box.querySelector('.adminAuthors__box__button_type_add').style.display = 'none';

                self.render(box);
            });
        };

        /**
         * Prepare template for add new item state
         */
        self.setNewState = function() {
            var box = document.createElement('div');

            box.classList.add('adminAuthors__add');

            box.innerHTML = self.editTemplate;

            box.querySelector('.adminAuthors__box__col_1').style.display = 'none';

            box.querySelector('.adminAuthors__box__button_type_edit').style.display = 'none';

            box.querySelector('.adminAuthors__box__button_type_remove').style.display = 'none';

            self.render(box);
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
            self.alert = app.modules.admin.alert;
            self.getAuthor = app.modules.main.library.getAuthor;
            self.insert = app.modules.main.library.insert;
            self.update = app.modules.main.library.update;
            self.delete = app.modules.main.library.delete;
        };

        /**
         * Init module
         */
        self.init = function() {
            if (self.container) {

                self.importDefaults();
                self.setupAuthorFilter();
                self.handleState();
                self.setupListener();

            }
        };
    };

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.adminAuthors = new AdminAuthors();
})();
