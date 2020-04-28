import React from "react";
import styles from './card-list.css';
import {Card} from "../card/card.component";

export const CardList = props => {
    return(
        <div className={styles['card-list']}>
            {props.monsters.map(monster =>
                <Card key={monster.id} monster={monster}/>
            )}
        </div>
    );
}