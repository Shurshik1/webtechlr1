window.onscroll = function() {
    var header = document.getElementById("header");
    if (window.pageYOffset > 0) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  };