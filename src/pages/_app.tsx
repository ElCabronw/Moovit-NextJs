import '../styles/global.css';
import { ChallengeContext, ChallengesProvider } from '../contexts/ChallengeContext'
import { ChallengeBox } from '../components/ChallengeBox';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1);
  function levelUp() {
    setLevel(level + 1);

  }



  return (
    <ChallengesProvider>

      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
