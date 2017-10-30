var axios=require('axios')
module.exports={
    fetchCamperApi:function(){
        var encodedurl=window.encodeURI('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
        return axios.get(encodedurl).then(function(success){
            return success.data;
        })
    } 
}