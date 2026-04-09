import styles from './Button.module.css'


function Button() {

    const handleClick = () => console.log("hello can");

    return(
        <button className={styles.button} onClick={handleClick}>CLick me</button>
        
    );
}

export default Button