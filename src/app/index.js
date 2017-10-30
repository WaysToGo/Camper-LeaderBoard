var ReactDOM = require('react-dom')
var React = require('react')
var Header=require('./header')
require('./css/index.css')
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
           this.setState(result);
        })
        
        
    }

    render() {
        return ( 
        <div>

            <h1> Welcome to react home page </h1>
            <Header/> 
             </div>
        );
    }
};




ReactDOM.render( < MyApp /> , document.getElementById("app"));