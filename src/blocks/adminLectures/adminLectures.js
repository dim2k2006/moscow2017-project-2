(function () {
    if ('modules' in app && 'adminLectures' in app.modules) {
        return;
    }

    /**
     * Creates a new AdminLectures class.
     * @class
     */
    var AdminLectures = function () {
        var self = this;

        self.body = '';
        self.alert = '';
        self.getLecture = '';
        self.getSchool = '';
        self.getAuthor = '';
        self.getPlace = '';
        self.insert = '';
        self.update = '';
        self.container = document.querySelector('.adminLectures');
        self.content = self.container.querySelector('.adminLectures__content');
        self.lectureSelect = self.container.querySelector('.formSelect__select[name="lecture"]');
        self.editTemplate = self.container.querySelector('#adminLectures-template').innerHTML;

        /**
         * Add event listeners
         */
        self.setupListener = function() {
            self.lectureSelect.addEventListener('change', self.handleState);
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
            self.insert('lectures', {
                id: parseInt(self.container.querySelector('.formInput__input[name="id"]').value),
                title: self.container.querySelector('.formInput__input[name="title"]').value,
                school: [].slice.call(self.container.querySelectorAll('.formSelect__select[name="school"] option:checked')).map(function(item) {return parseInt(item.value)}),
                author: [].slice.call(self.container.querySelectorAll('.formSelect__select[name="author"] option:checked')).map(function(item) {return parseInt(item.value)}),
                date: self.container.querySelector('.formInput__input[name="date"]').value,
                time: self.container.querySelector('.formInput__input[name="time"]').value,
                place: parseInt(self.container.querySelector('.formSelect__select[name="place"]').value),
                isOver: parseInt(self.container.querySelector('.formSelect__select[name="isOver"]').value) === 1,
                resources: self.container.querySelector('.formInput__input[name="resources"]').value
            }).then(function(response) {
                self.alert({
                    title: '',
                    text: response,
                    type: 'success'
                });

                self.setupLectureFilter();
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
            self.update('lectures', {
                id: parseInt(self.container.querySelector('.formInput__input[name="id"]').value),
                title: self.container.querySelector('.formInput__input[name="title"]').value,
                school: [].slice.call(self.container.querySelectorAll('.formSelect__select[name="school"] option:checked')).map(function(item) {return parseInt(item.value)}),
                author: [].slice.call(self.container.querySelectorAll('.formSelect__select[name="author"] option:checked')).map(function(item) {return parseInt(item.value)}),
                date: self.container.querySelector('.formInput__input[name="date"]').value,
                time: self.container.querySelector('.formInput__input[name="time"]').value,
                place: parseInt(self.container.querySelector('.formSelect__select[name="place"]').value),
                isOver: parseInt(self.container.querySelector('.formSelect__select[name="isOver"]').value) === 1,
                resources: self.container.querySelector('.formInput__input[name="resources"]').value
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
            if (confirm('Вы действительно хотите удалить выбранную лекцию?')) {

                self.delete('lectures', {
                    id: parseInt(self.container.querySelector('.formInput__input[name="id"]').value),
                    title: self.container.querySelector('.formInput__input[name="title"]').value,
                    school: [].slice.call(self.container.querySelectorAll('.formSelect__select[name="school"] option:checked')).map(function(item) {return parseInt(item.value)}),
                    author: [].slice.call(self.container.querySelectorAll('.formSelect__select[name="author"] option:checked')).map(function(item) {return parseInt(item.value)}),
                    date: self.container.querySelector('.formInput__input[name="date"]').value,
                    time: self.container.querySelector('.formInput__input[name="time"]').value,
                    place: parseInt(self.container.querySelector('.formSelect__select[name="place"]').value),
                    isOver: parseInt(self.container.querySelector('.formSelect__select[name="isOver"]').value) === 1,
                    resources: self.container.querySelector('.formInput__input[name="resources"]').value
                }).then(function(response) {
                    self.alert({
                        title: '',
                        text: response,
                        type: 'success'
                    });

                    self.setupLectureFilter();
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
         * Setup lecture filter values
         */
        self.setupLectureFilter = function() {
            self.getLecture().then(function(response) {
                var html = '<option value=""></option>';

                response.forEach(function(item) {
                    html += '<option value="'+ item.id +'">'+ item.title +'</option>';
                });

                self.lectureSelect.innerHTML = html;
            }, function(response) {
                self.alert({
                    title: '',
                    text: response,
                    type: 'error'
                });
            });
        };

        /**
         * Change block state according to filter select value
         */
        self.handleState = function() {
            if (self.lectureSelect.value) {

                self.setEditState();

            } else {

                self.setNewState();

            }
        };

        /**
         * Prepare template for edit/delete item state
         */
        self.setEditState = function() {
            var lectureId = self.lectureSelect.value ? parseInt(self.lectureSelect.value) : '',
                data = {};

            self.getSchool().then(function(response) {
                data['schools'] = response;

                return self.getAuthor();
            }).then(function(response) {
                data['authors'] = response;

                return self.getPlace();
            }).then(function(response) {
                data['places'] = response;

                self.getLecture(lectureId).then(function(response) {
                    data['response'] = response[0];

                    var box = document.createElement('div');

                    box.classList.add('adminLectures__edit');

                    box.innerHTML = self.editTemplate;

                    var schoolSelect = '',
                        authorSelect = '',
                        placeSelect = '';

                    data.schools.forEach(function(item) {
                        var isSelected = data.response.school.indexOf(item.id) !== -1 ? 'selected' : '';

                        schoolSelect += '<option '+ isSelected +' value="'+ item.id +'">'+ item.title +' ('+ item.student +' чел.)</option>';
                    });

                    data.authors.forEach(function(item) {
                        var isSelected = data.response.author.indexOf(item.id) !== -1 ? 'selected' : '';

                        authorSelect += '<option '+ isSelected +' value="'+ item.id +'">'+ item.title +'</option>';
                    });

                    data.places.forEach(function(item) {
                        var isSelected = data.response.place === item.id ? 'selected' : '';

                        placeSelect += '<option '+ isSelected +' value="'+ item.id +'">'+ item.title +' (вместимость: '+ item.capacity +' чел.)</option>';
                    });


                    box.querySelector('.adminLectures__title').style.display = 'none';

                    box.querySelector('.formInput__input[name="id"]').value = data.response.id;

                    box.querySelector('.formInput__input[name="title"]').value = data.response.title;

                    box.querySelector('.formSelect__select[name="school"]').innerHTML = schoolSelect;

                    box.querySelector('.formSelect__select[name="author"]').innerHTML = authorSelect;

                    box.querySelector('.formInput__input[name="date"]').value = data.response.date;

                    box.querySelector('.formInput__input[name="time"]').value = data.response.time;

                    box.querySelector('.formSelect__select[name="place"]').innerHTML = placeSelect;

                    box.querySelector('.formSelect__select[name="isOver"] option[value="' + (data.response.isOver ? 1 : 0) + '"]').selected = true;

                    box.querySelector('.formInput__input[name="resources"]').value = data.response.resources;

                    box.querySelector('.adminLectures__box__button_type_add').style.display = 'none';

                    self.render(box);
                }, function(response) {
                    self.alert({
                        title: '',
                        text: response,
                        type: 'error'
                    });
                });
            });
        };

        /**
         * Prepare template for add new item state
         */
        self.setNewState = function() {
            var data = {};

            self.getSchool().then(function(response) {
                data['schools'] = response;

                return self.getAuthor();
            }).then(function(response) {
                data['authors'] = response;

                return self.getPlace();
            }).then(function(response) {
                data['places'] = response;

                var box = document.createElement('div');

                box.classList.add('adminLectures__add');

                box.innerHTML = self.editTemplate;

                var schoolSelect = '',
                    authorSelect = '',
                    placeSelect = '';

                data.schools.forEach(function(item) {
                    schoolSelect += '<option value="'+ item.id +'">'+ item.title +' ('+ item.student +' чел.)</option>';
                });

                data.authors.forEach(function(item) {
                    authorSelect += '<option value="'+ item.id +'">'+ item.title +'</option>';
                });

                data.places.forEach(function(item) {
                    placeSelect += '<option value="'+ item.id +'">'+ item.title +' (вместимость: '+ item.capacity +' чел.)</option>';
                });

                box.querySelector('.adminLectures__box__col_1').style.display = 'none';

                box.querySelector('.formSelect__select[name="school"]').innerHTML = schoolSelect;

                box.querySelector('.formSelect__select[name="author"]').innerHTML = authorSelect;

                box.querySelector('.formSelect__select[name="place"]').innerHTML = placeSelect;

                box.querySelector('.adminLectures__box__button_type_edit').style.display = 'none';

                box.querySelector('.adminLectures__box__button_type_remove').style.display = 'none';

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
            self.getLecture = app.modules.main.library.getLecture;
            self.getSchool = app.modules.main.library.getSchool;
            self.getAuthor = app.modules.main.library.getAuthor;
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
                self.setupLectureFilter();
                self.handleState();
                self.setupListener();

            }
        };
    };

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.adminLectures = new AdminLectures();
})();
