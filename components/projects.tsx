export default function Projects() {
  const projects = [
    {
      title: "Residência Moderna",
      category: "Casa Residencial",
      image: "/luxo.jpg",
    },
    {
      title: "Edifício Comercial",
      category: "Prédio Comercial",
      image: "/comercial.jpg",
    },
    {
      title: "Condomínio Residencial",
      category: "Múltiplas Unidades",
      image: "/condominio.jpg",
    },
    {
      title: "Casa de Campo",
      category: "Casa Residencial",
      image: "/campo.jpg",
    },
    {
      title: "Reforma Completa",
      category: "Reforma",
      image: "/reforma.jpg",
    },
    {
      title: "Sobrado Familiar",
      category: "Casa Residencial",
      image: "/sobrado.jpg",
    },
  ]

  return (
    <section id="projetos" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Projetos</h2>
          <p>Conheça alguns dos nossos trabalhos realizados</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
