// import React from "react";

// function NavBar() {
//   const links = ["home", "about", "projects"];

//   return <nav>{/* display an <a> tag for each link here */}</nav>;
// }

// export default NavBar;

import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
