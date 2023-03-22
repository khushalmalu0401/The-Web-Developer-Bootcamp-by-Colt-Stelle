const fakeRequestCallBack = (url,success,failure) => {
    const delay = Math.floor(Math.random() * 4500) +500;
    setTimeout(()=>{
        if(delay>4000){
            failure('Connection Timeout')
        }
        else{
            success(`Here is your Fake Data from ${url}`)
        }
    },delay)
}
const fakeRequestPromise = (url) => {
    return new Promise((resolve , reject) =>{
        const delay = Math.floor(Math.random() * 4500) +500;
        setTimeout(()=>{
            if(delay>4000){
                reject('Connection Timeout')
            } else{
                resolve(`Here is your Fake Data from ${url}`)
            }
        })
    })
}

fakeRequestCallBack('books.com',function(){
    console.log("It worked")
},function(){
    console.log("Error")
})