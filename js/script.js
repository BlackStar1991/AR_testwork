window.onload = function() {

    console.log("OK");

    $('.slides').slick({
        autoplay: true,
        autoplaySpeed: 4500,
        dots: true,
        arrows: true,
        pauseOnDotsHover: true,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 322,
                settings: {
                    dots: false
                }
            }
        ]
    });

};