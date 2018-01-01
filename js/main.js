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

    update: function () {
      /**
       * Get object, increment objects counter
       * @param: object id
       */
      model.cat.counter = model.cat.counter + 1;
    }
  };

  var view = {

    //reset cat template
    reset: function () {
      getById('content').innerHTML = '';
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

          // create event on click
          controller.onclick();
        }
      }
    },

    onclick: function () {
      var div = getById('cat-container');
      div.onclick = function () {
        model.update();
        view.reset();
        view.render(Number(this.getAttribute('data-cat-id')));
        controller.onclick();
      };
    }
  };

  // run app
  window.onload = controller.init();


})();
