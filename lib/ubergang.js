function injectCSSFading(link) {
  link.addEventListener('click', ev => {
    ev.preventDefault();
    ev.stopPropagation();
    // Update all transition DOM elements
    document.querySelectorAll(".transition")
      .forEach(el => el.className += " out");
    // Delay window location change
    const delay = 300;
    const timedout = setTimeout(() => {
      window.location = link.href;
      clearTimeout(timedout);
    }, delay);
  });
}

document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    const transistorLinks = document.querySelectorAll(".ubergang");
    transistorLinks.forEach(link => {
      injectCSSFading(link);
    });
  }
};
