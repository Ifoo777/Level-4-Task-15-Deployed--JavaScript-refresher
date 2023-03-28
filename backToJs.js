//jQuery run once document has loaded
$(document).ready(function () {

    //Declare the variables outside of the function to be able to use with other function also.
    let slideChanger = 0;
    let changeColor = 0;

    /*Display code for the user and once they click it, activates for the page*/
    //Once click on button - the background starts changing colors and slide side to side
    $('#background').on('click', function () {
        //Set Interval for slide side by side
        //Make sure the time is the same or more as in the function otherwise will not immediately react when stopping Interval
        slideChanger = setInterval(animateBoxes, 2000);
        //Set color changing interval 
        changeColor = setInterval(changecolors, 1000);

        //Function to run to slide items left to right
        function animateBoxes() {
            $(".bodyMove").animate({
                'margin-left': '-500px'
            }, 1000).animate({
                'margin-left': '500px'
            }, 1000);
        }
        //Run function
        animateBoxes();

        //Set variable to 0 to start at first object
        let counterColors = 0;
        //function to change the colors
        function changecolors() {
            let colors = ["blue", "red", "green", "purple", "black"];
            //Keep running until last color is reached and start counterColors again with the first color
            if (counterColors < colors.length) {
                $("body").css("background-color", colors[counterColors], 1000);
                counterColors++;
            } else {
                counterColors = 0;
            }
        }
        //Run function
        changecolors();
    });

    /*Display code for the user and once they click it, activates for the page*/
    //Stop the JQuery effect of color changing 
    $('#stopColorChange').on('click', function () {
        clearInterval(changeColor);
    });

    // User clicks on button to activate the mouse over function, makes it more interactive
    $("#subLiButton").on('click', function () {
        function liFade() {
            $(".ul-sub").on('mouseover', function () {
                $(this).fadeOut(1000);
            });
        }
        liFade();
    });
});