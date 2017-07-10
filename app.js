$(document).ready(function(){
  var $form = $('form')
  var $addHome = $('#addHome')
  var $tbody = $('tbody')
  var $removeHome = $('.removeHome')

  $form.on('submit', function (event) {
    event.preventDefault()
    var form_data = $(this).serializeArray()
    addNewRow(form_data)
  })

  $tbody.on('click', '.removeHome', function () {
    var $removeTr = $(this).parents('tr')
    $removeTr.remove()
  })

  // $removeHome.on('click', function() {
  // })

  function addNewRow(data) {
    var $newTr = $('<tr>')
    for (var i = 0; i < data.length; i++) {
      var $newTd = $('<td>')
      $newTd.text(data[i].value)
      $newTr.append($newTd)
    }
    var $remove = $('<button>')
    $remove.text('Remove')
    $remove.addClass('removeHome')
    $newTr.append($remove)
    $tbody.append($newTr)
  }
})
