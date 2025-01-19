import lampadaMagica from './assets/lampadaMagica.png';
import genioLampada from './assets/genioLampada.png';
import './app.scss';
import { useState } from 'react';

export default function App() {
  
  const [lampada, setLampada] = useState(lampadaMagica);

  
  const mudarLampada = () => {
    setLampada((prevLampada) => 
      prevLampada === lampadaMagica ? genioLampada : lampadaMagica
    );
  };

  return (
    <main>
      <p>"Liberte a magia da programação com a lâmpada do Alladin"</p>
      <img
        src={lampada}
        alt="Imagem da lâmpada mágica ou imagem do personagem gênio da animação da Disney Alladin"/>
      <button onClick={mudarLampada}>Clique aqui</button>
    </main>
  );
}
