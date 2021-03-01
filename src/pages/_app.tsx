import '../styles/global.css';
import { ChallengeContext, ChallengesProvider } from '../contexts/ChallengeContext'
import { ChallengeBox } from '../components/ChallengeBox';
import { useState } from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';

function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1);
  function levelUp() {
    setLevel(level + 1);

  }



  return (

    <Component {...pageProps} />

  )
}

export default MyApp
