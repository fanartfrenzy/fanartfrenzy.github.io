
document.addEventListener('DOMContentLoaded', function() {
    $("#mainbody").load("pages/home.html");
});
document.getElementById("navlist").innerHTML = `
<ul class="">
    <li><a onclick='open_Home()'>Home</a></li>
    <li><a onclick='open_FAQ()'>FAQ</a></li>
    <li><a onclick='open_Tutorials()'>Tutorials</a></li>
    <li><a onclick='open_About()'>About</a></li>
    <li><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfi7LfeJM7om5ewgvcLPC8v9YokE1NHcWbgqPttzR6SAzywrg/viewform"><mark class="signupbtn">Sign up</mark></a></li>
</ul>
`;

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

function open_About() {
    $("#mainbody").load("pages/about.html");
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

document.getElementById("footertext").innerHTML = "New Content";


