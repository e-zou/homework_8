// Styling
import '../styles/ProjectCard.css';

// Project card from home page
function ProjectCard({ imgLink, title, tags}) {
    return (
        <div class="project-card">
            <img src={imgLink} class="project-image" alt="project image"></img>
            <div class="project-info">
                <h1 class="project-title">{title}</h1>
                <div class="project-tag-wrapper flex flex-d-row">
                    {tags.map(tag => (
                        <div class="tag flex center">
                            <div class="h5-tag">{tag}</div>
                        </div>
                    ))}
                </div>
                <a class="link"><h4 class="highlight-box"><span class="highlight"></span>View Case Study</h4></a>
            </div>
        </div>
    );

}
export default ProjectCard