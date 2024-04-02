// import React from "react";

// function ProjectItem({ name, about, technologies }) {
//   return (
//     <div className="project-item">
//       <h3>{name}</h3>
//       <p>{about}</p>
//       <div className="technologies">
//         {/* render a <span> for each technology in the technologies array */}
//       </div>
//     </div>
//   );
// }

// export default ProjectItem;

import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span> // Set a unique key for each span
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;

