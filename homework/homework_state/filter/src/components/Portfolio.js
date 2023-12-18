import { useState } from "react";
import ProjectList from "../components/ProjectList";
import Toolbar from "../components/Toolbar";

function Portfolio(props) {
    const { projects, filters } = props;
    const [selected, setSelected] = useState("All");
    let filterProjects = projects;

    if(selected !== "All") {
        filterProjects = projects.filter((item) => item.category === selected);
    }

    return (
        <div>
           <Toolbar
                filters={filters}
                selected={selected}
                onSelectFilter={(selected) => {setSelected(selected);}}
          />
           <div className="portfolio">
                <ProjectList projects={filterProjects} />
            </div>
        </div>
      );

}


export default Portfolio;