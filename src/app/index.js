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
            userList:null,
            sortedType:'asc'

        }
        this.custSort=this.custSort.bind(this);

    }

    componentDidMount(){
        api.fetchCamperApi().then((result)=>{
           this.setState({userList:result});
         
        })
        
    }

      custSort(sortBy){
         
        if(this.state.sortedType=='asc'){    
    
        var userList=this.state.userList.sort((a, b)=>{
           
            return a[sortBy] - b[sortBy];
          });
          this.setState({userList:userList,sortedType:'dec'});
        }
        else if(this.state.sortedType=='dec'){
          
            var userList= this.state.userList.sort((a, b)=> {
               
                return b[sortBy] - a[sortBy];
              });

              this.setState({userList:userList,sortedType:'asc'});

        }
        

      }

    render() {
        return(
            <div>
             <Header/>   
            <Body userList={this.state.userList} custSort={this.custSort}/>
            </div>
        )
    } 

};




ReactDOM.render( < MyApp /> , document.getElementById("app"));