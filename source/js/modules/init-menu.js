const menu = () => {
  const menuBtn = document.querySelector(".header__nav-open");
  const navBlock = document.querySelector(".header__nav-wrapper");

  const openMenu = () => {
    window.disableBodyScroll(navBlock);
    menuBtn.classList.add("header__nav-open--active");
    navBlock.classList.add("active");
    menuBtn.ariaPressed = "true";
  };

  const closeMenu = () => {
    window.enableBodyScroll(navBlock);
    menuBtn.classList.remove("header__nav-open--active");
    navBlock.classList.remove("active");
    menuBtn.ariaPressed = "false";
  };

  const initBurgerAction = () => {
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        if (menuBtn.ariaPressed === "true") {
          closeMenu();
        } else {
          openMenu();
        }

        if (navBlock.classList.contains("active")) {
          const menuItems = document.querySelectorAll(".header__nav-item");
          menuItems.forEach((item) => {
            item.addEventListener("click", () => {
              closeMenu();
            });
          });
        }
      });
    }
  };

  initBurgerAction();
};

export { menu };
