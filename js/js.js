window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#navigation__burger-contain').addEventListener('click', function() {
        document.querySelector('#navigation__burger-list').classList.toggle('navigation__burger-list-active')
      })
      document.querySelector('#navigation__burger-btn-close').addEventListener('click', function () {
       document.querySelector('#navigation__burger-list').classList.toggle('navigation__burger-list-active')
      })
    //___________________________________________________end
});