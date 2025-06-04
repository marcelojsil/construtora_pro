import { Home, Building, Paintbrush, Zap, Droplets, Hammer } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Home size={48} />,
      title: "Construção de Casas",
      description: "Projetos residenciais completos, desde a fundação até o acabamento final.",
    },
    {
      icon: <Building size={48} />,
      title: "Construção de Prédios",
      description: "Edifícios comerciais e residenciais com tecnologia e qualidade.",
    },
    {
      icon: <Hammer size={48} />,
      title: "Alvenaria",
      description: "Serviços especializados em alvenaria estrutural e de vedação.",
    },
    {
      icon: <Paintbrush size={48} />,
      title: "Acabamento e Pintura",
      description: "Acabamentos refinados e pintura profissional para valorizar seu imóvel.",
    },
    {
      icon: <Zap size={48} />,
      title: "Elétrica Residencial",
      description: "Instalações elétricas seguras e dentro das normas técnicas.",
    },
    {
      icon: <Droplets size={48} />,
      title: "Hidráulica",
      description: "Sistemas hidráulicos completos com materiais de primeira qualidade.",
    },
  ]

  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Serviços</h2>
          <p>Oferecemos soluções completas para sua construção</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
