;(function($){
    $(window).on('elementor/frontend/init',function(){
      
    $(window).on("load", function () {
        thmSwiperInit();
        projectMasonaryLayout();
    });

    // swiper slider
    function thmSwiperInit() {
        const swiperElm = document.querySelectorAll(".thm-swiper__slider");
        swiperElm.forEach(function (swiperelm) {
            const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
            let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
        });
    }

    function projectMasonaryLayout() {
        if ($(".masonary-layout").length) {
            $(".masonary-layout").isotope({
                layoutMode: "masonry",
            });
        }
        if ($(".post-filter").length) {
            $(".post-filter li")
                .children(".filter-text")
                .on("click", function () {
                    var Self = $(this);
                    var selector = Self.parent().attr("data-filter");
                    $(".post-filter li").removeClass("active");
                    Self.parent().addClass("active");
                    $(".filter-layout").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 500,
                            easing: "linear",
                            queue: false,
                        },
                    });
                    return false;
                });
        }

        if ($(".post-filter.has-dynamic-filters-counter").length) {
            // var allItem = $('.single-filter-item').length;
            var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find("li");
            activeFilterItem.each(function () {
                var filterElement = $(this).data("filter");
                var count = $(".filter-layout").find(filterElement).length;
                $(this)
                    .children(".filter-text")
                    .append('<span class="count">' + count + "</span>");
            });
        }
    }

      var triggerSwiper = [
        'hero-banner',
        'testimonial',
        'tg-team',
        'working-process',
      ];
      
      $.each(triggerSwiper, function(index, item) {
        elementorFrontend.hooks.addAction('frontend/element_ready/' + item + '.default', function($scope, $) {
          thmSwiperInit();
        });
      });


        elementorFrontend.hooks.addAction( 'frontend/element_ready/hero-banner.default', function(scope,$){  

          $('[data-src]').each(function () {
              var src = $(this).attr('data-src');
              $(this).css({
                  'background-image': 'url(' + src + ')',
              });
          });

          $(".odometer").appear(function (e) {
              var odo = $(".odometer");
              odo.each(function () {
                  var countNumber = $(this).attr("data-count");
                  $(this).html(countNumber);
              });
          });          
     
        });

        elementorFrontend.hooks.addAction( 'frontend/element_ready/tp-fact.default', function(scope,$){
                
          $(".odometer").appear(function (e) {
              var odo = $(".odometer");
              odo.each(function () {
                  var countNumber = $(this).attr("data-count");
                  $(this).html(countNumber);
              });
          });
          
        });

        elementorFrontend.hooks.addAction( 'frontend/element_ready/home-contact.default', function(scope,$){
                
          $('[data-src]').each(function () {
              var src = $(this).attr('data-src');
              $(this).css({
                  'background-image': 'url(' + src + ')',
              });
          });
          
        });


        elementorFrontend.hooks.addAction( 'frontend/element_ready/home-contact.default', function(scope,$){
                
          $('[data-src]').each(function () {
              var src = $(this).attr('data-src');
              $(this).css({
                  'background-image': 'url(' + src + ')',
              });
          });
          
        });

        elementorFrontend.hooks.addAction( 'frontend/element_ready/portfolio-tab.default', function(scope,$){
            
            $(".grid").imagesLoaded(function () {
              // init Isotope
              var $grid = $(".grid").isotope({
                  itemSelector: ".grid-item",
                  percentPosition: true,
                  masonry: {
                      columnWidth: ".grid-item",
                  },
              });
              // filter items on button click
              $(".portfolio-menu").on("click", "button", function () {
                  var filterValue = $(this).attr("data-filter");
                  $grid.isotope({ filter: filterValue });
              });
          });
          //for menu active class
          $(".product-license li").on("click", function (event) {
              $(this).siblings(".active").removeClass("active");
              $(this).addClass("active");
              event.preventDefault();
          });
                    
          projectMasonaryLayout();

        });   

        elementorFrontend.hooks.addAction( 'frontend/element_ready/services.default', function(scope,$){
          
        }); 

        elementorFrontend.hooks.addAction( 'frontend/element_ready/zivan-portfolio.default', function(scope,$){

        });   

        elementorFrontend.hooks.addAction( 'frontend/element_ready/blogpost.default', function(scope,$){

          $('[data-src]').each(function () {
              var src = $(this).attr('data-src');
              $(this).css({
                  'background-image': 'url(' + src + ')',
              });
          });

        });



    });
})(jQuery);