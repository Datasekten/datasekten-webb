var navLinks = document.getElementsByClassName("navLink");
var linksCount = 0;
while (linksCount < navLinks.length) {
  navLinks[linksCount].addEventListener("mouseover", function(){
    this.innerHTML = "&gt" + this.innerHTML + "&lt";
  });
  navLinks[linksCount].addEventListener("mouseout", function(){
    this.innerHTML = this.innerHTML.substring(4, this.innerHTML.length-4);
  });
  linksCount += 1;
}
