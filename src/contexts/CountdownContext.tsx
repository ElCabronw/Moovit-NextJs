import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";
let countDownTimeout: NodeJS.Timeout;

interface CountdownContextData {
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean,
    startCountDown: () => void,
    resetCountDown: () => void

}
interface CountdownProviderProps {
    children: ReactNode;
}
export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengeContext);



    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const minutes = Math.floor(time / 60);

    const [hasFinished, setHasFinished] = useState(false);
    const seconds = time % 60;

    function startCountDown() {
        setIsActive(true);

    }

    function resetCountDown() {
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setTime(25 * 60);
        setHasFinished(false);
    }
    useEffect(() => {
        console.log(isActive)
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);

        }
        else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();

        }
    }, [isActive, time])


    return (
        <CountdownContext.Provider value={{
            minutes, seconds, hasFinished, isActive, startCountDown, resetCountDown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}