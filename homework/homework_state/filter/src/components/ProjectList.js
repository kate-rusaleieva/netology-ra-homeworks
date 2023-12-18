function ProjectList({ projects }) {
    return projects.map((project, i) => {
        return (
          <div className="project" key={`project-${project.category}-${i}`}>
            <img src={project.img} />
          </div>
        );
    });
}

export default ProjectList;