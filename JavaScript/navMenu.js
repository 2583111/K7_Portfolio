const root = '..';

export const menuItems = [
  { name: "HOME", href: root + "/index.html" },
  { name: "ART", href: `${root}/ART/index.html` },
  { name: "ANIMATIONS", href: `${root}/ANIMATIONS/index.html` },
  { name: "VR", href: `${root}/VR/index.html` },
  { name: "GAMES", href: `${root}/GAMES/index.html` },
  { name: "ABOUT ME", href: `${root}/ABOUTME/index.html` }
];
// Exports a constant array 'menuItems', each object representing a menu item with 'name' and 'href'.
// The 'href' is constructed using the 'root' variable, with different paths for each menu item.

export function initialise(currentPage) {
  // Defines and exports a function 'initialise' which takes 'currentPage' as an argument.
  let nav = document.querySelector("header > nav");
  // Tries to find a <nav> element inside a <header> in the document and assigns it to 'nav'.

  if (!nav) {
    // If no <nav> element was found:
    const header = document.querySelector("header");
    // Finds the <header> element.
    if (!header) {
      // If there's no <header> element:
      console.warn("initialise() called before header exists. Aborting.");
      // Logs a warning message.
      return;
      // Exits the function early.
    }
    nav = document.createElement("nav");
    nav.setAttribute("aria-hidden, true")
    // Creates a new <nav> element.
    // Ensure the nav is exposed to assistive technologies (do not hide it).
    // nav.setAttribute("aria-hidden", "true");
    // Sets the 'aria-hidden' attribute to 'true' for accessibility purposes.
    header.appendChild(nav);
    // Appends the new <nav> element inside the <header>.
  }
   nav.innerHTML = '';
  // Clears any existing content inside the <nav> element.

  const wrapper = document.createElement('div');
  // Creates a new <div> element called 'wrapper'.
  wrapper.className = 'slide-menu';
  // Sets the class name of 'wrapper' to 'slide-menu'.
  wrapper.innerHTML = `
    <div class="slide-menu-inner" id="siteMenu">
      <ul class="slide-menu-list" role="menu"></ul>
    </div>
  `;
  // Sets the inner HTML of 'wrapper' to contain a nested div with id 'siteMenu' and an empty unordered list with role 'menu'.

  nav.appendChild(wrapper);
  // Appends the 'wrapper' div to the <nav> element.

  let ul = wrapper.querySelector('ul.slide-menu-list');
  // Finds the <ul> element inside the wrapper where menu items will be inserted.
  if (!ul) {
    // If the list couldn't be found, create it to avoid runtime errors.
    ul = document.createElement('ul');
    ul.className = 'slide-menu-list';
    ul.setAttribute('role', 'menu');
    const inner = wrapper.querySelector('.slide-menu-inner') || wrapper;
    inner.appendChild(ul);
  }

  for (const menuItem of menuItems) {
    // Loops through each item in the 'menuItems' array.
    const li = document.createElement("li");
    // Creates a new <li> element for each menu item.
    li.setAttribute('role', 'none');
    // Sets the role attribute of <li> to 'none' (indicating it has no special role).
    // Sets the role attribute of <li> to 'none' (indicating it has no special role).

    const a = document.createElement("a");
    // Creates an <a> (anchor) element for the menu link.
    a.setAttribute('role', 'menuitem');
    // Sets role to 'menuitem' for accessibility.
    a.setAttribute('href', menuItem.href);
    // Sets the href attribute to the URL from the menu item.
    a.dataset.key = menuItem.name;
    // Adds a data attribute 'key' with the menu item's name.
    a.tabIndex = -1;
    // Sets tabIndex to -1 to exclude it from sequential keyboard navigation (possibly handled elsewhere).

    const labels = document.createElement('span');
    // Creates a <span> element for labels.
    labels.className = 'slide-menu-labels';
    // Assigns class 'slide-menu-labels'.
    labels.innerHTML = `
      <span class="label oswald">${menuItem.name}</span>
    `;
    // Sets the inner HTML of labels, containing a span with classes 'label' and 'oswald', displaying the menu item's name.

    a.appendChild(labels);
    // Appends the labels span to the anchor element.

    if (currentPage === menuItem.name) {
      // Checks if the current page matches this menu item's name.
      a.classList.add("active");
      // Adds the 'active' class to highlight the current page.
    }

    li.appendChild(a);
    // Appends the anchor to the list item.
    ul.appendChild(li);
    // Appends the list item to the unordered list.
  }

}


