// Initialize AOS animations
AOS.init({
  duration: 1000,
  once: true
});
document.addEventListener("DOMContentLoaded", function() {
  const progressBars = document.querySelectorAll(".progress-bar");
  const counters = document.querySelectorAll(".counter");
  let animated = false;

  function animateSkills() {
    const section = document.querySelector("#skills");
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight && !animated) {
      animated = true;
      progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth;
      });

      counters.forEach(counter => {
        let count = 0;
        const target = +counter.getAttribute("data-target");
        const updateCount = () => {
          if (count < target) {
            count++;
            counter.textContent = count + "%";
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = target + "%";
          }
        };
        updateCount();
      });
    }
  }

  window.addEventListener("scroll", animateSkills);
});

window.addEventListener("scroll", () => {
  const section = document.querySelector(".piano-section");
  const pos = section.getBoundingClientRect().top;
  if (pos < window.innerHeight - 100) section.classList.add("show");
});