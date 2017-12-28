(function () {
  // define variables
  var elem = document.getElementById('cat-container');
  var count = document.getElementById('counter');
  var counter = 0;

  // create event
  elem.addEventListener('click', function() {
    /**
     * Increment counter, and display result
     * @type {number}
     */
    counter += 1;
    count.innerHTML = counter;
  }, false);

})();
