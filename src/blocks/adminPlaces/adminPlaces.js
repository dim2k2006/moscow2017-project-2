(function () {
    if ('modules' in app && 'adminPlaces' in app.modules) {
        return;
    }

    /**
     * Creates a new AdminPlaces class.
     * @class
     */
    var AdminPlaces = function () {
        var self = this;

        self.body = '';
        self.alert = '';
        self.getPlace = '';
        self.insert = '';
        self.update = '';
        self.container = document.querySelector('.adminPlaces');
        self.content = self.container.querySelector('.adminPlaces__content');
        self.placeSelect = self.container.querySelector('.formSelect__select[name="place"]');
        self.editTemplate = self.container.querySelector('#adminPlaces-template').innerHTML;

        /**
         * Add event listeners
         */
        self.setupListener = function() {
            self.placeSelect.addEventListener('change', self.handleState);
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
            self.insert('places', {
                id: parseInt(self.container.querySelector('.formInput__input[name="id"]').value),
                title: self.container.querySelector('.formInput__input[name="title"]').value,
                address: self.container.querySelector('.formInput__input[name="address"]').value,
                link: self.container.querySelector('.formInput__input[name="link"]').value,
                capacity: parseInt(self.container.querySelector('.formInput__input[name="capacity"]').value)
            }).then(function(response) {
                self.alert({
                    title: '',
                    text: response,
                    type: 'success'
                });

                self.setupPlaceFilter();
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
            self.update('places', {
                id: parseInt(self.container.querySelector('.formInput__input[name="id"]').value),
                title: self.container.querySelector('.formInput__input[name="title"]').value,
                address: self.container.querySelector('.formInput__input[name="address"]').value,
                link: self.container.querySelector('.formInput__input[name="link"]').value,
                capacity: parseInt(self.container.querySelector('.formInput__input[name="capacity"]').value)
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
            if (confirm('Вы действительно хотите удалить выбранную аудиторию?')) {

                self.delete('places', {
                    id: parseInt(self.container.querySelector('.formInput__input[name="id"]').value),
                    title: self.container.querySelector('.formInput__input[name="title"]').value,
                    address: self.container.querySelector('.formInput__input[name="address"]').value,
                    link: self.container.querySelector('.formInput__input[name="link"]').value,
                    capacity: parseInt(self.container.querySelector('.formInput__input[name="capacity"]').value)
                }).then(function(response) {
                    self.alert({
                        title: '',
                        text: response,
                        type: 'success'
                    });

                    self.setupPlaceFilter();
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
         * Change block state according to filter select value
         */
        self.handleState = function() {
            if (self.placeSelect.value) {

                self.setEditState();

            } else {

                self.setNewState();

            }
        };

        /**
         * Prepare template for edit/delete item state
         */
        self.setEditState = function() {
            var placeId = self.placeSelect.value ? parseInt(self.placeSelect.value) : '';

            self.getPlace(placeId).then(function(response) {
                var data = response[0],
                    box = document.createElement('div');

                box.classList.add('adminPlaces__edit');

                box.innerHTML = self.editTemplate;

                box.querySelector('.adminPlaces__title').style.display = 'none';

                box.querySelector('.formInput__input[name="id"]').value = data.id;

                box.querySelector('.formInput__input[name="title"]').value = data.title;

                box.querySelector('.formInput__input[name="address"]').value = data.address;

                box.querySelector('.formInput__input[name="link"]').value = data.link;

                box.querySelector('.formInput__input[name="capacity"]').value = data.capacity;

                box.querySelector('.adminPlaces__box__button_type_add').style.display = 'none';

                self.render(box);
            });
        };

        /**
         * Prepare template for add new item state
         */
        self.setNewState = function() {
            self.getPlace().then(function(response) {

                var box = document.createElement('div');

                box.classList.add('adminPlaces__add');

                box.innerHTML = self.editTemplate;

                box.querySelector('.adminPlaces__box__col_1').style.display = 'none';

                box.querySelector('.adminPlaces__box__button_type_edit').style.display = 'none';

                box.querySelector('.adminPlaces__box__button_type_remove').style.display = 'none';

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
            self.alert = app.modules.admin.alert;
            self.getPlace = app.modules.main.library.getPlace;
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
                self.setupPlaceFilter();
                self.handleState();
                self.setupListener();

            }
        };
    };

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.adminPlaces = new AdminPlaces();
})();
