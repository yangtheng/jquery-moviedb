$(document).ready(function() {
   var h1 = document.querySelector('h1')
   var $h1 = $('h1')

  // console.log('h1', h1) // returns html node
  // console.log('$h1', $h1) // return jQ object

   // target the odd element of li
   var allLi = document.querySelectorAll('.list-item')
   var $allLi = $('.list-item-jq')


  for(var i=0; i < allLi.length; i++) {
    allLi[i].addEventListener('click', clickDom)
  }

  function clickDom(event) {
    alert(event.target.innerText)
  }

  // add event listener with jQuery
  $allLi.on('click', clickJq)

  function clickJq() {
    alert($(this).text('clicked'))
  }

  var $lunchbutton = $('.lunchbutton')
  var $lunch = $('.lunch')

  $lunchbutton.on('click', function () {
    var $firstBrekkie = $('.breakfast li').first()

    $lunch.append($firstBrekkie)
  })

  var $eat = $('.eat')
  var $brekkie = $('brekkie')

  $eat.on('click', function() {
    var $firstLunch = $lunch.find('.list-item-jq:first-child')
    $firstLunch.remove()
  })

  var $traverse = $('#traverse')
  var $tuesday = $('.breakfast').find('.tuesday')

  $traverse.on('click', function() {
      $tuesday.find('li').text('bread')
  })













})
