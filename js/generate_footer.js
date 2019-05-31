var footerElement = footerElements;

// create the footer 
function generateFooter(footerLinks) {
    let theLinks = "";
    let theAddress = "";
    let message = "";
    for(var i = 0; i < footerLinks.length; i++){
        theLinks += footerLinks[i].link; 
    }
    message = "<footer><div class='container'> " + theLinks + "<p class='is-pulled-right'>291 Main St Ste #208, great barrington, MA</p></div></footer>";
    return message;
}

// print function
function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
  }

  print(generateFooter(footerElement));
  