var toggleButton = document.querySelector(".toggle-button");
var navWrapper = document.querySelector("#nav-wrapper");

var featureToggleButton = document.querySelector("#feature__toggle-button");
var companyToggleButton = document.querySelector("#company__toggle-button");

var subNavList = ["feature", "company"];

toggleButton.addEventListener("click", () => {
  var isVisible = toggleButton.getAttribute("aria-expanded");

  if (isVisible === "false") {
    toggleButton.setAttribute("aria-expanded", true);
    navWrapper.setAttribute("data-visible", true);
  } else {
    toggleButton.setAttribute("aria-expanded", false);
    navWrapper.setAttribute("data-visible", false);
  }
});

subNavList.forEach((subNav) => {
  var subNavToggleButton = document.querySelector(`#${subNav}__toggle-button`);
  var subNavMenu = document.querySelector(`#${subNav}__sub-menu`);

  subNavToggleButton.addEventListener("click", () => {
    var isVisible = subNavToggleButton.getAttribute("aria-expanded");

    if (isVisible === "false") {
      subNavToggleButton.setAttribute("aria-expanded", true);
      subNavMenu.setAttribute("data-visible", true);
    } else {
      subNavToggleButton.setAttribute("aria-expanded", false);
      subNavMenu.setAttribute("data-visible", false);
    }
  });
});
