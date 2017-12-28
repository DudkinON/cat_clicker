(function () {
  Cats = {};

  var CatsList = [
    {
      name: 'fluffy',
      image: '/img/cat_1.jpg',
      counter: 0
    },
    {
      name: 'whiskers',
      image: '/img/cat_2.jpg',
      counter: 0
    },
    {
      name: 'sassy',
      image: '/img/cat_3.jpg',
      counter: 0
    }
  ];

  Cats.getList = function () {
    /**
     * Return list of cats
     */
    return CatsList;
  };

})();