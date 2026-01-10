
document.addEventListener('DOMContentLoaded', function() {
    $("#mainbody").load("pages/home.html");
    $("#navlist").load("pages/elements/nav.html");
    $("#footertext").load("pages/elements/footertext.html");
});


$(document).ready(function() {
    // Handles # in urls
    function loadPage() {
        var hash = window.location.hash
        if (hash == '#commenting') {
            open_Commenting(); 
        } else if (hash == '#rules') {
            open_Rules();
        } else if (hash == '#posting') {
            open_Posting();
        } else if (hash == '#tumblrsection') {
            open_Posting();
            $('html, body').animate({
            scrollTop: $("#tumblrsection").offset().top
            }, 2000);
        } else if (hash == '#redditsection') {
            open_Posting();
            $('html, body').animate({
            scrollTop: $("#redditsection").offset().top
            }, 2000);
        } else if (hash == '#blueskysection') {
            open_Posting();
            $('html, body').animate({
            scrollTop: $("#blueskysection").offset().top
            }, 2000);
        } else if (hash == '#ao3section') {
            open_Posting();
            $('html, body').animate({
            scrollTop: $("#ao3section").offset().top
            }, 2000);
        } else if (hash == '#about') {
            open_About();
        } else if (hash == '#tutorials') {
            open_Tutorials();
        } else if (hash == '#faq') {
            open_FAQ();
        } else if (hash == '#ai') {
            open_AIStance();
        } else if (hash == '#quiz') {
            open_Quiz();
        } else {
            open_Home();
        }
    }

    // Listen for hash changes (User clicks link or hits back button)
    $(window).on('hashchange', loadPage);

    // Trigger the function immediately on page load
    loadPage();

});


function open_Tutorials() {
  $("#mainbody").load("pages/tutorials.html", function() {
    var elems = document.querySelectorAll('#mainbody .collapsible'); // Scoped selector
    var instances = M.Collapsible.init(elems, {
        accordion: false 
    });
  });
}

function open_Home() {
    $("#mainbody").load("pages/home.html");
}

function open_Quiz() {
    $("#mainbody").load("pages/quiz.html");
}

function open_FAQ() {
  $("#mainbody").load("pages/faq.html", function() {
    var elems = document.querySelectorAll('#mainbody .collapsible'); // Scoped selector

    var instances = M.Collapsible.init(elems, {
        accordion: false 
    });

        // 1. Select all elements with the class 'icon'
    const icons = document.querySelectorAll('.faqicon');

    // 2. Loop through each icon
    icons.forEach(icon => {
    // 3. Generate a random Hue (0 - 360 degrees)
    const randomHue = Math.floor(Math.random() * 360);
    
    // 4. Set the color using HSL
    // 70% Saturation, 50% Lightness creates vibrant, readable colors
    icon.style.color = `hsl(${randomHue}, 70%, 50%)`;
    console.log(icon.style.color);
    });
    
  });
}


// ABOUT PAGES
function open_About() {
    $("#mainbody").load("pages/about.html");
}

function open_AIStance() {
    $("#mainbody").load("pages/subpages_about/ai_stance.html");
}

function open_Rules() {
    $("#mainbody").load("pages/subpages_about/rules.html");
}

function open_Commenting() {
    $("#mainbody").load("pages/subpages_about/commenting_guide.html");
}

function open_Posting() {
    $("#mainbody").load("pages/subpages_about/posting_guide.html");
}
