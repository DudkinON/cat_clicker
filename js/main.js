(function () {

  var elem = document.getElementById('cat-container');
  var count = document.getElementById('counter');
  var counter = 0;
  elem.addEventListener('click', function() {
    counter += 1;
    count.innerHTML = counter;
  }, false);

})();
