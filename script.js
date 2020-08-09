// Mobile Navbar
$(document).ready(function () {
  $('a[href="#navbar-more-show"], .navbar-more-overlay').on('click', function (event) {
    event.preventDefault();
    $('body').toggleClass('navbar-more-show');
    if ($('body').hasClass('navbar-more-show')) {
      $('a[href="#navbar-more-show"]').closest('li').addClass('active');
    } else {
      $('a[href="#navbar-more-show"]').closest('li').removeClass('active');
    }
    return false;
  });
});

// Simple Vertical Tab
$(document).ready(function () {
  $("div.bhoechie-tab-menu>div.list-group>a").click(function (e) {
    e.preventDefault();
    $(this).siblings('a.active').removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
    $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
  });
});