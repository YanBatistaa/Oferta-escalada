import { useState } from 'react';

export const useWhatsAppRotation = () => {
  const numbers = ['5511933699801', '5571991194657'];
  const [counter, setCounter] = useState(0);
  
  const redirectToWhatsApp = () => {
    const number = numbers[counter % 2];
    const message = 'Olá! Gostaria de desenvolver o site';
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
    setCounter(prev => prev + 1);
  };
  
  return { redirectToWhatsApp };
};
