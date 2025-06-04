import { Award, Users, Clock, CheckCircle } from "lucide-react"

export default function About() {
  const stats = [
    { icon: <Award size={32} />, number: "15+", label: "Anos de Experiência" },
    { icon: <Users size={32} />, number: "500+", label: "Clientes Satisfeitos" },
    { icon: <Clock size={32} />, number: "300+", label: "Projetos Concluídos" },
    { icon: <CheckCircle size={32} />, number: "100%", label: "Qualidade Garantida" },
  ]

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre a ConstrutoraPro</h2>
            <p>
              Com mais de 15 anos no mercado da construção civil, a ConstrutoraPro se consolidou como referência em
              qualidade e confiabilidade. Nossa equipe especializada trabalha com dedicação para transformar seus
              projetos em realidade.
            </p>
            <p>
              Utilizamos materiais de primeira qualidade e as melhores práticas do mercado, garantindo durabilidade e
              excelência em cada obra. Nossa missão é superar as expectativas dos clientes, entregando projetos no prazo
              e com total transparência.
            </p>

            <div className="about-features">
              <div className="feature">
                <CheckCircle size={20} />
                <span>Materiais de primeira qualidade</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>Equipe técnica especializada</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>Cumprimento de prazos</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>Garantia em todos os serviços</span>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
