var ReactDOM = require('react-dom')
var React = require('react')
var Header=require('./header')
var Body=require('./body')
require('./css/index.scss')
var api=require('./util/api')

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList:null
        }

    }
    componentDidMount(){
        api.fetchCamperApi().then((result)=>{
           this.setState({userList:result});
         
        })
        
    }
//     componentDidUpdate(prevProps, prevState) {
//   console.log(this.state.userList)
//         }
      

    render() {
        return(
            <div>
             <Header/>   
            <Body userList={this.state.userList}/>
            </div>
        )
    } 

};




ReactDOM.render( < MyApp /> , document.getElementById("app"));