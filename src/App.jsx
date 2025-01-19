import lampadaMagica from './assets/lampadaMagica.png';
import genioLampada from './assets/genioLampada.png';
import './app.scss';
import { useState } from 'react';

export default function App() {
  // Inicializa o estado com a imagem da lâmpada mágica
  const [lampada, setLampada] = useState(lampadaMagica);

  // Função para alternar entre a lâmpada mágica e o gênio
  const mudarLampada = () => {
    setLampada((prevLampada) => 
      prevLampada === lampadaMagica ? genioLampada : lampadaMagica
    );
  };

  return (
    <main>
      <p>"Liberte a magia da programação com a lâmpada de Alladin"</p>
      <img
        src={lampada}
        alt="Imagem da lâmpada mágica ou imagem do personagem gênio da animação da Disney Alladin"/>
      <button onClick={mudarLampada}>Clique aqui</button>
    </main>
  );
}
