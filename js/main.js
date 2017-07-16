$(document).ready(function() {

  // var elem = document.querySelector('.m-p-g');
  //
  // document.addEventListener('DOMContentLoaded', function() {
  //   var gallery = new MaterialPhotoGallery(elem);
  // });

  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");

  //An image to overlay
  $overlay.append($image);

  //Add overlay
  $("body").append($overlay);

    //click the image and a scaled version of the full size image will appear
    $(".m-p-g__thumbs-img").click( function(event) {
      console.log("clicking IMG");
      event.preventDefault();
      var imageLocation = $(this).attr("data-full");

      //update overlay with the image linked in the link
      $image.attr("data-full", imageLocation);

      //show the overlay
      $overlay.show();
    } );

    $("#overlay").click(function() {
      $("#overlay").hide();
    });



});
