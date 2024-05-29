import Logo from "../../assets/NuKenzie.svg";

import styles from "./style.module.scss";


export const Header = () => {
    return (
        <header  className={styles.header}>
            <div className={styles.headerContainer}>
            <img src={Logo} alt="" />
            </div>
        </header>
    )
}