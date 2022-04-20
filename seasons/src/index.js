import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './displaySeason'
import Spinner from './Spinner';



class App extends React.Component {

    state = { lat: null, errorMessage: '' };


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) =>
                //setState çağırdık
                this.setState({ lat: position.coords.latitude }),
            //this.state.lat=position.coords.latitude --------> bunu yapamayız
            (err) => this.setState({ errorMessage: err.message }),
        );
    }


    renderContext(){
        if (this.state.errorMessage && !this.state.lat) {
            return (<div>
                Error={this.state.errorMessage}
            </div>);
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay
                lat={this.state.lat}
            ></SeasonDisplay>
        }
        return <Spinner message="Konum izni verilene kadar bekleyin.." >

        </Spinner>

    };

    render() {
return(
    <div className='border-red'>{this.renderContext()}</div>

)
     

    }
}
ReactDOM.render(<App></App >, document.querySelector('#root'));


























// import React from 'react';
// import ReactDOM from 'react-dom';



// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         //THİS.STATE için sadece bir kez doğrudan atama yapıyoruz
//         this.state = { lat: null, errorMessage: '' };


//     }

//     componentDidMount() {
//         window.navigator.geolocation.getCurrentPosition(
//             (position) =>
//                 //setState çağırdık
//                 this.setState({lat: position.coords.latitude} ),
//             //this.state.lat=position.coords.latitude --------> bunu yapamayız
//             (err) => this.setState({ errorMessage: err.message }),
//       );
// }


// render(){

//     if (this.state.errorMessage && !this.state.lat) {
//         return (<div>
//             Error={this.state.errorMessage}
//         </div>);
//     }
//     if (!this.state.errorMessage && this.state.lat) {
//         return (<div>
//             latitude= {this.state.lat}
//         </div>
//         )
//     }
//     return <div>Loading..</div>

// }}
// ReactDOM.render(<App></App >, document.querySelector('#root'));