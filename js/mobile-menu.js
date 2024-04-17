(() => {
    const refs = {
      openMenuBtn: document.querySelector("[mobile-menu-open]"),
      closeMenuBtn: document.querySelector("[mobile-menu-close]"),
      mobileMenu: document.querySelector("[mobile-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMobileMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMobileMenu);
  
    function toggleMobileMenu() {
      document.body.classList.toggle("modal-open");
      refs.mobileMenu.classList.toggle("is-hidden");
    }
  })();