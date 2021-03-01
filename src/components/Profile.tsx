import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const { level } = useContext(ChallengeContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1291383715193659395/DZXPR3xC_400x400.jpg" alt="Lucas Fuziyama" />
            <div>
                <strong>Lucas Fuziyama</strong>
                <p>
                    <img src="icons/level.svg" alt="level"></img>
                    Level {level}</p>
            </div>

        </div>

    );

}