(function(){

var cats = [
  {
    name: "Cat1",
    pic: "pics/cat1.jpg",
    count: 0
  },
  {
    name: "Cat2",
    pic: "pics/cat2.jpg",
    count: 0
  },
  {
    name: "Cat3",
    pic: "pics/cat3.jpg",
    count: 0
  },
  {
    name: "Cat4",
    pic: "pics/cat4.jpg",
    count: 0
  },
  {
    name: "Cat5",
    pic: "pics/cat5.jpg",
    count: 0
  },
  {
    name: "Cat6",
    pic: "pics/cat6.jpg",
    count: 0
  },
  {
    name: "Cat7",
    pic: "pics/cat7.jpg",
    count: 0
  },
  {
    name: "Cat8",
    pic: "pics/cat8.jpg",
    count: 0
  },
  {
    name: "Cat9",
    pic: "pics/cat9.jpg",
    count: 0
  },
  {
    name: "Cat10",
    pic: "pics/cat10.jpg",
    count: 0
  }
];



var octopus = {
  init: function(){
    view.render();
  },

  changeCat: function(){
    octopus.currentCat = (event.target.getAttribute('catid')) -1;
    view.showCat();
  },

  countClicks: function(){
    view.updateClicks(cats[octopus.currentCat].count += 1);
  },

  changeData: function(){
    var newName = document.getElementsByClassName('newName')[0].value;
    var newURL = document.getElementsByClassName('newURL')[0].value;
    var newNumClicks = Number(document.getElementsByClassName('newNumClicks')[0].value);
    cats[octopus.currentCat].name = (newName == "" ? cats[octopus.currentCat].name : newName);
    cats[octopus.currentCat].pic = (newURL == "" ? cats[octopus.currentCat].pic : newURL);
    cats[octopus.currentCat].count = (newNumClicks == "" ? cats[octopus.currentCat].count : newNumClicks);
    view.showCat();
    view.toggleAP();
    view.clearForm();
  },

  currentCat: 0

};





var view = {

  render: function(){
    document.getElementsByTagName('img')[0].addEventListener('click', octopus.countClicks);
    document.getElementsByClassName('adminButton')[0].addEventListener('click', view.toggleAP);
    document.getElementsByClassName('cancel')[0].addEventListener('click', view.toggleAP);
    document.getElementsByClassName('save')[0].addEventListener('click', octopus.changeData);
    var list = document.getElementsByTagName('ul')[0];
    for(var i = 0; i < cats.length;i++){
      var el = document.createElement("LI");
      el.innerHTML = cats[i].name;
      el.setAttribute('catid', i+1);
      el.addEventListener('click', octopus.changeCat);
      list.appendChild(el);
    }
  },

  showCat: function(){
    document.getElementsByClassName('catName')[0].innerHTML = cats[octopus.currentCat].name;
    document.getElementsByClassName('catCounter')[0].innerHTML = cats[octopus.currentCat].count;
    document.querySelector('img').src = cats[octopus.currentCat].pic;
    document.getElementsByTagName('li')[octopus.currentCat].innerHTML = cats[octopus.currentCat].name;
  },

  updateClicks: function(clicks){
    document.getElementsByClassName('catCounter')[0].innerHTML = clicks;
  },

  toggleAP: function(){
    var panel = document.getElementsByClassName('admin')[0];
    panel.style.visibility = (panel.style.visibility == 'hidden' ? 'visible' : 'hidden');
  },
  clearForm: function(){
    document.getElementsByClassName('newName')[0].value = '';
    document.getElementsByClassName('newURL')[0].value = '';
    document.getElementsByClassName('newNumClicks')[0].value = '';
  }


}
 return octopus.init();
})();
