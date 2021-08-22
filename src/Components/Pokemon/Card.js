import { Component } from "react";


export default class PokemonCard extends Component {

    state = {
        name:'',
        imageUrl:'',
        PokemonIndex:'',
    }

    componentDidMount(){
        const { name, url } = this.props;
        const pokemonIndex = url.split("/")[url.split("/").length -2];
        const imageUrl =  `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
    
        this.setState({
            name,
            imageUrl,
            pokemonIndex,
            imageLoading: true,
            toManyRequests: false
        })
    }

    render(){

        const spinner = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs'

        return (
            <div className="col-md-3 col-sm-6 col-mb-5">
                <div className="card" 
                style={{
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    MozUserSelect: 'none',
                    userSelect: 'none',
                }}>
                    <center>
                        <h5 className="card-header">{this.state.pokemonIndex}</h5>
                        {
                            this.state.imageLoading ? (
                                <img src={spinner} alt="spinner"
                                style = {{width: '5em', heigh: '5em'}}
                                className="card-img-top rounded mx-auto d-block mt-2"
                                />
                            ) : null }
                        
                        <img className="card-img-top rounded mx-auto d-block mt-2"
                        src={this.state.imageUrl}
                        onLoad={()=> this.setState({ imageLoading: false })}
                        onError={()=> this.setState({ toManyRequests: true})}
                        style={
                            {
                                width: '5em',
                                heigh: '5em',
                                display: 'none'
                            },
                            this.state.toManyRequests ? {display : 'none'} :
                            this.state.iamgeLoading ? null : { display : 'block'}
                        }
                        />
                            
                        

                        <div className="card-body mx-auto">
                            <h6 className="card-title">{ this.state.name.toLocaleLowerCase().split(" ").map(letter => letter.charAt(0).toUpperCase()+ letter.substring(1)).join(' ') }</h6>

                        </div>

                    </center>
                </div>
            </div>
        )
    }
}

