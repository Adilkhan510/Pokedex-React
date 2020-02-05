import React, { Component } from 'react'
import Pokecard from './Pokecard'

class Pokedex extends Component {
    render(){
        return(
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <div>Exp : {this.props.exp}</div>
                <div>{this.props.isWinner ? "Winner!" : "Loser!"}</div>
                <div className="Pokedex-cards">
                    {this.props.Pokemon.map((p)=>{
                        return(<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />)
                    })}
                </div>
            </div>
        )
    }
}

export default Pokedex;