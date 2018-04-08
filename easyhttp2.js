class EasyHTTP {

    //Make An HTTP Get Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })

    }

    //Make An HTTP Post Request
    post(url,data){ 
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method : 'POST',
                headers : {
                    'Content-type':'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    //Make An HTTP Put Request
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'PUT',
                headers: {
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err=> reject(err));
        })
    }

    //Make An HTTP Delete Request
    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'DELETE',
                headers: {
                    'Content-type':'application/json'
                }
            })
            .then(res => res.json())
            .then(data => resolve('Resourse Deleted'))
            .catch(err=> reject(err));
        })
    }
}