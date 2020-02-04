import React, {Component} from 'react';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${this.props.id}.png`
        return(
            <div className ="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} />
                <p>exp : {this.props.exp}</p>
            </div>
        )
    }
}

export default Pokecard;