import React, { Component } from 'react'
import Pokedex from './Pokedex';

class Pokegame extends Component {

    static defaultProps = {
        Pokemon :
        [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }

    render(){
        let hand1 = [];
        let hand2 =[...this.props.Pokemon];
        while(hand2.length > hand1.length){
            let randIdx = Math.floor(Math.random() * hand2.length);
            hand1.push(hand2.splice(randIdx,1)[0])
        }
        return(
            <div className="Pokegame">
                <Pokedex Pokemon = {hand1} />
                <Pokedex Pokemon = {hand2} />
            </div>

        )
    }
}

export default Pokegame