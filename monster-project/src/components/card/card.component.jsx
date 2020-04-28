import React from 'react';
import styles from "../card/card.css";

export const Card = (props) => {
    return(
        <div className={styles['card-container']}>
            <img alt={'monster'} src={`https://robohash.org/${props.monster.id}?set=set3`}/>
            <h1>{props.monster.name}</h1>
            <h4>{props.monster.email}</h4>
        </div>
    );
}