import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';
interface ChallengesProviderProps {
    children: ReactNode;
}


interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}


interface ChallengesContextData {
    level: number,
    currentExperience: number,
    experienceToNextLevel: number,
    challengesCompleted: number,
    activeChallenge: Challenge,
    resetChallenge: () => void,
    levelUp: () => void,
    startNewChallenge: () => void
}
export const ChallengeContext = createContext({} as ChallengesContextData);
export function ChallengesProvider({ children }: ChallengesProviderProps) {


    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(30);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp() {
        setLevel(level + 1);

    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }
    return (

        <ChallengeContext.Provider
            value={{
                level,
                currentExperience,
                experienceToNextLevel,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge
            }}>
            {children}

        </ChallengeContext.Provider>
    )
}