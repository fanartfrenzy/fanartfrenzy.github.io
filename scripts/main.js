
document.addEventListener('DOMContentLoaded', function() {
    $("#mainbody").load("pages/home.html");
    $("#navlist").load("pages/elements/nav.html");
    $("#footertext").load("pages/elements/footertext.html");
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

function open_Rules() {
    $("#mainbody").load("pages/subpages_about/rules.html");
}

function open_Commenting() {
    $("#mainbody").load("pages/subpages_about/commenting_guide.html");
}

function open_Posting() {
    $("#mainbody").load("pages/subpages_about/posting_guide.html");
}



