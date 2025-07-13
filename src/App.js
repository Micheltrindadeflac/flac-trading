import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#1e1e1e', padding: '20px', borderBottom: '2px solid #00b050' }}>
        <h1 style={{ color: '#d4af37' }}>FLAC Trading</h1>
        <p style={{ color: '#ccc' }}>Treinamentos em investimentos e sala ao vivo de Day Trade</p>
      </header>

      <main style={{ padding: '40px 20px' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#00b050' }}>Sobre a FLAC</h2>
          <p>
            A FLAC Trading oferece treinamentos exclusivos para investidores que querem dominar o mercado financeiro,
            com aulas gravadas e uma sala ao vivo de operações via Zoom.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#00b050' }}>Conteúdos Disponíveis</h2>
          <ul>
            <li>Ferramentas de Tape Reading</li>
            <li>Fundamentos de Leitura de Fluxo</li>
            <li>Fundamentos de Correlação</li>
            <li>Gestão de Risco</li>
            <li>Como Analisar a Macroeconomia</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#00b050' }}>Sala ao Vivo</h2>
          <p>Participe da nossa sala ao vivo de Day Trade no Zoom, com acompanhamento em tempo real das operações.</p>
        </section>

        <section>
          <h2 style={{ color: '#00b050' }}>Entre em Contato</h2>
          <p>Email: contato@flactrading.com</p>
        </section>
      </main>

      <footer style={{ backgroundColor: '#1e1e1e', padding: '20px', textAlign: 'center', color: '#777' }}>
        © {new Date().getFullYear()} FLAC Trading. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
