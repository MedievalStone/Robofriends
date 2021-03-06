import React from 'react';
import './card-list.styles.css';
import {Card}  from '../card/card.component.jsx'

export const Cardlist = props => {
    return <div className="card-list">
        {props.monsters.map(monster => (
            <Card key={monster.key} monster={monster} /> 
        ))} 
     </div>;
};