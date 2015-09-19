/***************************************************
 * FABLAB APP CAROUSEL JAVASCRIPT FOR MORE FANCYNESS
 ***************************************************/

/* BUTTONS WITH HIDDEN QR CODE
------------------------------ */

// android
$("a#android_btn").hover(function() {
  $("div#android_btn_grp").addClass("btn-group");
  $("button#android_qr_btn").removeClass("hidden");
}, function() {
  $("button#android_qr_btn").addClass("hidden");
  $("div#android_btn_grp").removeClass("btn-group");
});
$("button#android_qr_btn").hover(function() {
  $("div#android_btn_grp").addClass("btn-group");
  $("button#android_qr_btn").removeClass("hidden");
}, function() {
  $("button#android_qr_btn").addClass("hidden");
  $("div#android_btn_grp").removeClass("btn-group");
});
// ios
$("a#ios_btn").hover(function() {
  $("div#ios_btn_grp").addClass("btn-group");
  $("button#ios_qr_btn").removeClass("hidden");
}, function() {
  $("button#ios_qr_btn").addClass("hidden");
  $("div#ios_btn_grp").removeClass("btn-group");
});
$("button#ios_qr_btn").hover(function() {
  $("div#ios_btn_grp").addClass("btn-group");
  $("button#ios_qr_btn").removeClass("hidden");
}, function() {
  $("button#ios_qr_btn").addClass("hidden");
  $("div#ios_btn_grp").removeClass("btn-group");
});

/* QR CODE MODAL
---------------- */

$('#QRModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var device_target = button.data('device_target') // Extract info from data-* attributes
  var device_target_nice = button.data('device_target_nice') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  modal.find('.modal-body img#qr_code').attr('src', 'img/' + device_target + '-qr.png');
  modal.find('.modal-body img#qr_code').attr('alt', 'The QR Code for ' + device_target_nice + ' could not be displayed');
  modal.find('.modal-title').text('Get App for ' + device_target_nice);
})

/* SMOOTH SCROLLING
------------------- */

$("a[href^='#'].scroll-smooth").on('click', function(e) {
  // prevent default anchor click behavior
  e.preventDefault();

  // store hash
  var hash = this.hash;

  // animate
  $('html, body').animate({scrollTop: $(hash).offset().top}, 500, function(){

     // when done, add hash to url
     // (default click behaviour)
     window.location.hash = hash;
   });
});

/* NAVBAR ANIMATION
------------------- */

var navbarbrand = $('#navbar-brand');
$(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
    navbarbrand.removeClass("navbar-brand-max");
  } else {
    navbarbrand.addClass("navbar-brand-max");
  }
});
