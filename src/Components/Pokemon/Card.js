import { Component } from "react";


export default class PokemonCard extends Component {

    state = {
        name:'',
        imageUrl:'',
        PokemonIndex:'',
    }

    componentDidMount(){
        const { name, url } = this.props;
        // const pokemonIndex = url.split("/")[url.split("/").length -2];
        const pokemonIndex = 1
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png?raw=true`
    
        this.setState({
            name,
            imageUrl,
            pokemonIndex,
            toManyRequests: false
        })
    }

    render(){
        return (
            <div className="card" 
                style={{
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    MozUserSelect: 'none',
                    userSelect: 'none',
                }}>
                <div>
                    <center>
                        <h5 className="card-header">Título</h5>
                        <div className="card-img-top rounded mx-auto mt-2"
                        style={{ width: '5em', height: '5em', display: 'none' }}
                        src={ this.state.imageUrl }
                        >
                        </div>

                        <div className="card-body mx-auto">
                            <h6>{ this.state.name }</h6>

                        </div>

                    </center>
                </div>
            </div>
        )
    }
}

