//open side menu
document.querySelector('.menu_button').addEventListener('click', function () {
  if (window.innerWidth >= 430) {
    document.querySelector('.mobile_menu').style.marginLeft = 'calc(100% - 18em)';
  } else {
    document.querySelector('.mobile_menu').style.marginLeft = '0';
  }
});
//close side menu
document.querySelector('.close-btn').addEventListener('click', function () {
  document.querySelector('.mobile_menu').style.marginLeft = '100%';
});
//close side menu after choosing a item
document.querySelector('.mobile_menu').addEventListener('click', function () {
  document.querySelector('.mobile_menu').style.marginLeft = '100%';
});
