axios.get("/messages").then( res => {
    let messages = res.data
    console.log(messages)
} )

