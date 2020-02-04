import React, {Component} from 'react';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

// check to see if the number is less than 999, if it is then we want to add 2 zeros to the beggining of it and then return the last 3 numbers. 
// example 2 turns into 002 and then the last 3 numbers are returned.
// example #2 : 99 turns into 0099 and then the last 3 numbers are returns 099.
// example #3 : greater than 999 doesn't work because  001111 would only return 111. 

let padToThree = (number) => (number <=999 ? `00${number}`.slice(-3) : number)


class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
        return(
            <div className ="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={imgSrc} />
                <div className="Pokecard-data">EXP : {this.props.exp}</div>
                <div className="Pokecard-data">Type : {this.props.type}</div>
            </div>
        )
    }
}

export default Pokecard;