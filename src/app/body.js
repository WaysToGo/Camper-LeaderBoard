var React = require('react')
class Body extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        if(this.props.userList!=null){
            const users=this.props.userList.map((a,i)=>{
                var link='http://www.freecodecamp.org/'+a.username;
                return(<table key={i}>
                <tbody>
                    <tr>
                        <td >{i+1}</td>
                        <td >
                        <a href={link} target='_blank'>
                        <img src={a.img}/>
                        {a.username}
                        </a>
                        </td>
                        <td >{a.alltime}</td>
                        <td >{a.recent}</td>
                    </tr>
                    </tbody>
                </table>);
                })
               
                
                return ( 
                    <div>
                        <table className="header">
                            <tbody>
                        <tr><th>#</th>
                        <th>Camper-Name</th>
                        <th onClick={()=>this.props.custSort('alltime')} >All Time Points</th>
                        <th onClick={()=>this.props.custSort('recent')} >Past 30 Days</th> 
                        </tr>
                        </tbody>
                        </table>
                    <span>{users}</span> 
                         </div>
                    );
        }
                else
                return null
        }
}
module.exports=Body;