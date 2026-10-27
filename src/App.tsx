import './App.css';
import logo from './assets/img/logo-joyce-martins.png';

import Button from './components/Button/Button';
import Card from './components/Card/Card';

import { TbPigMoney } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FiGift } from "react-icons/fi";
import { CgInfinity } from "react-icons/cg";

function App() {

  return (
    <div className='container'>
      <header className="header">
        <img src={logo} alt="Joyce Martins Odontologia" />
        <Button title='Acompanhar minhas indicações' className='header-btn'/>
      </header>
      <main className='main'>
        <section className="principal">
          <div className='left-side'>
            <div className="title-container">
              <h2 className='title'>Indique quem você ama, receba nosso carinho de volta.</h2>
              <p className='message-title'>Ao recomendar a clínica para amigos e familiares, você acumula pontos que viram descontos nas suas próximas idas ao consultório.</p>
            </div>
            <div className="footer-container">
              <p className='footer-message'>Não há limite de indicações.</p>
              <p className='footer-message'>Comece a compartilhar agora mesmo!</p>
            </div>
          </div>
          <div className="right-side">
            <h3 className="title-form">Gere o seu link de indicação e comece a indicar agora.</h3>
            <form className='form'>
              <div className="name">
                <label>Nome:</label>
                <input type="text" />
              </div>
              <div className="cpf">
                <label>CPF:</label>
                <input type="text" />
              </div>
              <div className="email">
                <label>Email:</label>
                <input type="text" />
              </div>
              <div className="phone">
                <label>WhatsApp:</label>
                <input type="text" />
              </div>
              <div className="link">
                <Button title='Gerar link' padding='.4rem 0'/>
                <input type="text" disabled className='copy-area' />
                <Button title='Copiar' padding='.4rem 0' />
                <Button icon={FaWhatsapp} title='Compartilhar no WhatsApp' padding='.4rem 0' backgroundColor='#0d6b00'/>
              </div>
            </form>
            <a href='#'>Acesse o regulamento completo</a>
          </div>
        </section>
        <section className="cards">
          <h3>Você só tem a ganhar!</h3>
          <div className="cards-container">
            <Card 
            icon={<TbPigMoney size={40}/>} 
            title='Premiação garantida' 
            message='Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Delectus labore numquam repellendus 
            facere, eaque, debitis ipsam fugiat'/>

            <Card 
            icon={<FiGift size={40} />} 
            title='Indicado premiado' 
            message='Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Delectus labore numquam repellendus 
            facere, eaque, debitis ipsam fugiat'/>

            <Card 
            icon={<CgInfinity size={40} />} 
            title='Sem limites de indicação' 
            message='Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Delectus labore numquam repellendus 
            facere, eaque, debitis ipsam fugiat'/>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className="clinic-hours">
          <img src={logo} alt="Joyce Martins Odontologia" />
          <div className="workhours">
            <p>Horários de atendimento:</p>
            <p>Seg a Sex: 08h às 18h</p>
            <p>Sáb: 08h às 12h</p>
          </div>
        </div>
        <div className="clinic-contact">
          <h3>Contato</h3>
          <p>Entre em Contato agora mesmo paraa sanar suas dúvidas.</p>
          <div className="contact-icons">
            <HiOutlineMail size={20} />
            <FaWhatsapp size={20} />
            <FaInstagram size={20} /> 
            <CiLinkedin size={20} /> 
          </div>
          <p>Telefone:</p>
          <p>(11)96655-4433</p>
        </div>
      </footer>
    </div>
  )
}

export default App
