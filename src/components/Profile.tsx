import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";

import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ghiberti85.png" alt="Devz" />
      <div>
        <strong>Fernando Ghiberti</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
