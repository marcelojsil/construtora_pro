import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Entre em Contato</h2>
          <p>Solicite seu orçamento sem compromisso</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Informações de Contato</h3>

            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h4>Endereço</h4>
                <p>
                  Rua das Construções, 123
                  <br />
                  Centro - Cidade/UF - CEP 12345-678
                </p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h4>Telefone</h4>
                <p>(11) 99999-9999</p>
              </div>
            </div>

            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h4>E-mail</h4>
                <p>contato@construtorapro.com.br</p>
              </div>
            </div>

            <div className="contact-item">
              <Clock size={24} />
              <div>
                <h4>Horário de Funcionamento</h4>
                <p>
                  Segunda a Sexta: 8h às 18h
                  <br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Solicite seu Orçamento</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Seu nome" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Seu e-mail" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Seu telefone" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Selecione o serviço</option>
                  <option value="casa">Construção de Casa</option>
                  <option value="predio">Construção de Prédio</option>
                  <option value="alvenaria">Alvenaria</option>
                  <option value="acabamento">Acabamento e Pintura</option>
                  <option value="eletrica">Elétrica Residencial</option>
                  <option value="hidraulica">Hidráulica</option>
                  <option value="reforma">Reforma</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Descreva seu projeto" rows={4} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
