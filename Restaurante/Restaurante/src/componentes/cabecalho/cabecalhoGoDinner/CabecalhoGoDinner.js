import React,{Component, Fragment} from 'react';
import Garfo from '../../../recursos/icons/go-dinner-garfo.png';

class CabecalhoGoDinner extends Component{
    render(){
        return(
            <Fragment>
                <div class="jumbotron caixa-header jumbotron-fluid">
                    <div class="container">
                        <div class="col-md-6 transparente  ml-auto pt-2" >
                            <h1 class="display-4 display-4-formatacao text-center">Quem está com fome pede GoDinner</h1>
                            <hr/>
                            <p class="lead lead-formatacao text-center">Depois espere e relaxe</p> 
                            <img class="icone-garfo rounded mx-auto d-block pb-2" src={Garfo}/>   
                        </div>
                    </div>
                </div>
            </Fragment>  
        )
    }
}export default CabecalhoGoDinner;