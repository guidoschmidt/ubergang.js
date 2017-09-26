document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    const transistorLinks = document.querySelectorAll(".transistor");
    transistorLinks.forEach(link => {
      console.log(link);
    });
  }
};
