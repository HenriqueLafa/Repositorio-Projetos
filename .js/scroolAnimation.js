document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".cartao-01, .Div-04, .Div-03 img");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, {
      threshold: 0.2
    });
  
    elements.forEach(el => {
      el.classList.add("animate-start");
      observer.observe(el);
    });
  });