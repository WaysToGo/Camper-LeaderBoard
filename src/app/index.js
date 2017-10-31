var ReactDOM = require('react-dom')
var React = require('react')
var Header=require('./header')
require('./css/index.scss')
var api=require('./util/api')

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList:null
        }

    }
    componentWillMount(){
        api.fetchCamperApi().then((result)=>{
           this.setState({userList:result});
         
        })
        
    }
//     componentDidUpdate(prevProps, prevState) {
//   console.log(this.state.userList)
//         }
      

    render() {
if(this.state.userList!=null){
        const users=this.state.userList.map((a,i)=>{
            return(<table key={i}>
            <tbody>
                <tr>
                    <td >{i}</td>
                    <td >{a.username}<img src={a.img}/></td>
                    <td >{a.alltime}</td>
                    <td >{a.recent}</td>
                </tr>
                </tbody>
            </table>);
            })
            // console.log(users)
            return ( 
                <div>
        
                    <h1> Welcome to react home page </h1>
                    <Header/>
                <h1>{users}</h1> 
                     </div>
                );
    }
            else
            return null
    }
};




ReactDOM.render( < MyApp /> , document.getElementById("app"));