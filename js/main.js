(function () {

  function doElement(elem) {
    return document.createElement(elem);
  }

  function getByClass(cls) {
    return document.getElementsByClassName(cls);
  }

  function getById(id) {
    return document.getElementById(id);
  }

  var model = {
    // Get list of cats
    cats: Cats.getList(),

    cat: {},

    getCat: function (catId) {
      return model.cats[catId];
    },

    upCounter: function () {
      /**
       * Get object, increment objects counter
       * @param: object id
       */
      model.cat.counter = model.cat.counter + 1;
    },

    update: function (form) {
      model.cat.name = form.name;
      model.cat.image = form.image;
      model.cat.counter = form.counter;
    }
  };

  var view = {

    //reset cat template
    reset: function () {
      getById('content').innerHTML = '';
    },

    // render the cat template
    render: function (i) {
      var cat = model.cat;
      getById('content').innerHTML =
        '<div class="cat-container" id="cat-container" data-cat-id="' + i + '">' +
        '<span class="counter-container text-decor">' +
        '<span id="counter">' + cat.counter + '</span>' +
        '</span><img src="' + cat.image + '" width="400">' +
        '<span class="text-bottom text-decor">Cat name: ' + cat.name + '</span>' +
        '</div>';
    },

    // render a button
    showButton: function (id, name) {
      var button = doElement('button');
      button.setAttribute("class", "btn");
      button.setAttribute("data-cat-id", id);
      button.innerHTML = name;
      getById('buttons').appendChild(button);
    }
  };

  var formView = {
    form: {
      form: getById('cat-form'),
      name: getById('form-name'),
      image: getById('form-image'),
      counter: getById('form-counter'),
      button: getById('form-btn')
    },

    showForm: function (num) {
      var form = formView.form;
      form.name.value = model.cat.name;
      form.image.value = model.cat.image;
      form.counter.value = model.cat.counter;
      form.button.setAttribute("data-cat-id", num);

      if (form.form.getAttribute("style") === null) {
        form.form.setAttribute("style", "display: block;")
      }
    }
  };


  var controller = {
    init: function () {
      var i;
      for (i = 0; i < model.cats.length; i++) {
        var cat = model.getCat(i);
        view.showButton(i, cat.name);
      }
      var buttons = getByClass('btn');
      for (i = 0; i < buttons.length; i++) {
        var button = buttons[i];

        button.onclick = function () {

          // reset container
          view.reset();

          // current cat
          model.cat = model.getCat(this.getAttribute('data-cat-id'));

          // render the cat
          view.render(this.getAttribute('data-cat-id'));

          // show form
          formView.showForm(this.getAttribute('data-cat-id'));

          // create event on click
          controller.onclick();
        }
      }
    },

    onclick: function () {
      getById('cat-container').onclick = function () {
        model.upCounter();
        view.reset();
        view.render(Number(this.getAttribute('data-cat-id')));
        controller.onclick();
      };
    }
  };

  // run app
  window.onload = controller.init();


})();
