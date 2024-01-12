async function getData(){
    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();
    } catch (err){
        console.log(err);
    }

    function bigWork() {
        // Many work i do
        return getData();
    }

    (async function(){
        const result = await bigWork();
    })();

    console.log("Need to use the response");
}
