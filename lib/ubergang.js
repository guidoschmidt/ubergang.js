function injectCSSFading(link) {
  link.addEventListener('click', ev => {
    ev.preventDefault();
    ev.stopPropagation();

    document.querySelectorAll(".transition")
      .forEach(el => el.className += " out");

    const delay = 300;
    setTimeout(() => {
      window.location = link.href;
    }, delay);
  });
}

document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    const transistorLinks = document.querySelectorAll(".transition");
    transistorLinks.forEach(link => {
      injectCSSFading(link);
    });
  }
};
