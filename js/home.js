// const logo = document.querySelectorAll("#svg-about path");

// for (let i = 0; i < logo.length; i++) {
//     console.log(`Letter ${i} length is ${logo[i].getTotalLength()}`);
// }

let countersActivated = false;

function runCodeOnScroll() {
  const sectionTop = document.getElementById("skills").offsetTop;
  const triggerOffset = 200;
  const targetPosition = sectionTop - triggerOffset;

  // Check if the page has been scrolled to the target position and counters are not activated
  if (window.scrollY >= targetPosition && !countersActivated) {
    countersActivated = true; // Set counters activated to true to prevent multiple runs

    // html
    let count6 = 0;
    const interval6 = setInterval(() => {
      count6++;
      document.getElementById("number-html").textContent = count6 + "%";
      const htmlElements = document.getElementsByClassName("bar-html");
      htmlElements[0].style.width = count6 + "%";
      if (count6 === 99) {
        clearInterval(interval6);
      }
    }, 20);

    // css
    let count5 = 0;
    const interval5 = setInterval(() => {
      count5++;
      document.getElementById("number-css").textContent = count5 + "%";
      const cssElements = document.getElementsByClassName("bar-css");
      cssElements[0].style.width = count5 + "%";
      if (count5 === 99) {
        clearInterval(interval5);
      }
    }, 22);

    // sass
    let count1 = 0;
    const interval1 = setInterval(() => {
      count1++;
      const widthSass = count1 + "%";
      document.getElementById("number-sass").textContent = count1 + "%";
      const elements = document.getElementsByClassName("bar-sass");
      elements[0].style.width = widthSass;
      if (count1 === 97) {
        clearInterval(interval1);
      }
    }, 24);

    // bootstrap
    let count3 = 0;
    const interval3 = setInterval(() => {
      count3++;
      document.getElementById("number-bootstrap").textContent = count3 + "%";
      const bootstrapElements =
        document.getElementsByClassName("bar-bootstrap");
      bootstrapElements[0].style.width = count3 + "%";
      if (count3 === 98) {
        clearInterval(interval3);
      }
    }, 26);

    // js
    let count4 = 0;
    const interval4 = setInterval(() => {
      count4++;
      document.getElementById("number-js").textContent = count4 + "%";
      const jsElements = document.getElementsByClassName("bar-js");
      jsElements[0].style.width = count4 + "%";
      if (count4 === 90) {
        clearInterval(interval4);
      }
    }, 28);

    // ui
    let count2 = 0;
    const interval2 = setInterval(() => {
      count2++;
      document.getElementById("number-ui").textContent = count2 + "%";
      const uiElements = document.getElementsByClassName("bar-ui");
      uiElements[0].style.width = count2 + "%";
      if (count2 === 90) {
        clearInterval(interval2);
      }
    }, 30);
  }
}

// Run the function initially
runCodeOnScroll();

// Add event listener for scroll event
window.addEventListener("scroll", () => {
  runCodeOnScroll();
});
