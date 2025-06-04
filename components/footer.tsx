import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ConstrutoraPro</h3>
            <p>
              Construindo sonhos e criando realidades há mais de 15 anos. Qualidade, confiança e excelência em cada
              projeto.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Serviços</h4>
            <ul>
              <li>
                <a href="#servicos">Construção de Casas</a>
              </li>
              <li>
                <a href="#servicos">Construção de Prédios</a>
              </li>
              <li>
                <a href="#servicos">Alvenaria</a>
              </li>
              <li>
                <a href="#servicos">Acabamento e Pintura</a>
              </li>
              <li>
                <a href="#servicos">Elétrica Residencial</a>
              </li>
              <li>
                <a href="#servicos">Hidráulica</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Links Úteis</h4>
            <ul>
              <li>
                <a href="#inicio">Início</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <p>
              Rua das Construções, 123
              <br />
              Centro - Cidade/UF
            </p>
            <p>Telefone: (11) 99999-9999</p>
            <p>E-mail: contato@construtorapro.com.br</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 ConstrutoraPro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
