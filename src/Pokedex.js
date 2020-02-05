import React, { Component } from 'react'
import Pokecard from './Pokecard'

class Pokedex extends Component {
    render(){
        let title;
        if(this.props.isWinner){
            title = <h3 className="Pokedex-winner">Winning Hand</h3>
        }else{
            title = <h3 className="Pokedex-loser">Losing Hand</h3>
        }
        return(
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <div>Exp : {this.props.exp}</div>
                {title}
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