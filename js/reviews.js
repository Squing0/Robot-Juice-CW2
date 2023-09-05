   var promise = $.get('https://cis1110apicw.computing.edgehill.ac.uk/reviews')        //All possible data is requested from API.

    // Loads all reviews after first 5.
    function show_reviews(ev){
        // Objects for container of reviews and button are defined for later use.
        ev.preventDefault();
        var list = $(this).parent().find('#product-reviews');
        var button = $(this);

        $('#status').show();
        promise.done(function(data){
            // Specifically first 5 reviews are looped through if get request is successful.
            for(var idx=5; idx < data.length; idx++){       
                var red_stars = data[idx].rating;
                var black_stars = 5 - data[idx].rating;     // The number of each colour of star are defined to differntiate them.
                var star = "*";

                // Header created using string concatenation.
                var header = "<header><img src='images/robot-juice-images/reviewicon1.jpg' alt='Red robot'></img>" + 
                `<p class="stars"><span class="red_stars">${star.repeat(red_stars)}</span>` + 
               `<span class="black_stars">${star.repeat(black_stars)}</span></p>`+  // Stars are repeated and put into spans with classes here so they can be accessed.
                `<h3>${data[idx].nickname}</h3>` + 
                "</header>"
                
                // Article also created using string concatenation and header variable.
                var article = "<article class='product-review'>" + 
                header + 
                `<p class="review-text">${data[idx].review}</p>` + 
                "</article>"
                
                //The article is appended to the end of the existing list of reviews.
                list.append(article);
            }
        });
        
        // Both loading status and button will always be hidden even if get request isn't successful.
        promise.always(function(){
            $('#status').hide();    
            button.hide();
        });
    }
    
    // function run when page is fully loaded.
    $(document).on("ready", function(){
        var bod = $(this).find('#product-reviews');

        // The same function as before is used specifically for the first 5.
        promise.done(function(data){
            for(var idx=0; idx < 5; idx++){
                var red_stars = data[idx].rating;
                var black_stars = 5 - data[idx].rating;
                var star = "*";
                var header = "<header><img src='images/robot-juice-images/reviewicon1.jpg' alt='Red robot'></img>" + 
                `<p class="stars"><span class="red_stars">${star.repeat(red_stars)}</span>` + 
               `<span class="black_stars">${star.repeat(black_stars)}</span></p>`+
                `<h3>${data[idx].nickname}</h3>` + 
                "</header>"
    
                var article = "<article class='product-review'>" + 
                header + 
                `<p class="review-text">${data[idx].review}</p>` + 
                "</article>"
    
                bod.append(article);
            }
        });
        
        $('#review-button-container').on('click', show_reviews);
        $('#status').hide();    
    });