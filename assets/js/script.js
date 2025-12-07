// Select DOM elements
const menuPanel = document.querySelector(".profile-menu__panel");
const avatarButton = document.querySelector(".profile-menu__avatar-btn");
const arrowIcon = document.querySelector(".profile-menu__arrow");

// Guard clause: if elements are missing, do nothing
if (menuPanel && avatarButton && arrowIcon) {
  // Toggle menu visibility and accessibility state
  const toggleMenu = () => {
    const isOpen = menuPanel.classList.toggle("profile-menu__panel--open");

    // Rotate the arrow icon based on open state
    arrowIcon.classList.toggle("profile-menu__arrow--open", isOpen);

    // Update aria attributes for better accessibility
    avatarButton.setAttribute("aria-expanded", String(isOpen));
    menuPanel.setAttribute("aria-hidden", String(!isOpen));
  };

  // Handle click on avatar
  avatarButton.addEventListener("click", toggleMenu);
}
