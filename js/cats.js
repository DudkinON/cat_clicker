(function () {
  Cats = {};
  var CatsList = [
    {
      name: 'Fluffy',
      image: '/img/cat_1.jpg',
      counter: 0
    },
    {
      name: 'Whiskers',
      image: '/img/cat_2.jpg',
      counter: 0
    },
    {
      name: 'Sassy',
      image: '/img/cat_3.jpg',
      counter: 0
    },
    {
      name: 'Tiger',
      image: '/img/cat_4.jpg',
      counter: 0
    },
    {
      name: 'Cassy',
      image: '/img/cat_5.jpg',
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