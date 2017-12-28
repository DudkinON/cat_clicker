(function () {
  function getElement(ident) {
    return document.getElementById(ident)
  }

  // define variables
  var fluffy = {};
  var whiskers = {};
  fluffy.cat = getElement('fluffy-container');
  fluffy.count = getElement('counter1');
  fluffy.counter = 0;
  whiskers.cat = getElement('whiskers-container');
  whiskers.count = getElement('counter2');
  whiskers.counter = 0;


  // create events
  fluffy.cat.addEventListener('click', function() {
    plus(fluffy);
  }, false);


})();
