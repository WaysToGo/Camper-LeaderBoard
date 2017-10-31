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
                        {a.username}<img src={a.img}/>
                        </a>
                        </td>
                        <td >{a.alltime}</td>
                        <td >{a.recent}</td>
                    </tr>
                    </tbody>
                </table>);
                })
                // console.log(users)
                return ( 
                    <div>
            
                      
                        
                        <table>
                            <tbody>
                        <tr><th>#</th>
                        <th>Camper-Name</th>
                        <th>All Time Points</th>
                        <th>Past 30 Days</th> 
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