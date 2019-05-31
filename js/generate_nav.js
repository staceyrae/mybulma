var navElement = navElements;

// create the footer 
function generateNav(navLinks) {
    let theLinks = "";
    let message = "";
    for(var i = 0; i < navLinks.length; i++){
        theLinks += navLinks[i].link; 
    }
    message = "<nav class='navbar level is-spaced' style='margin-bottom: 0'>" + theLinks + "</nav>";
    return message;
}

// print function
function print(message) {
    var outputDiv = document.getElementById('navOutput');
    outputDiv.innerHTML = message;
  }

  print(generateNav(navElement));
  