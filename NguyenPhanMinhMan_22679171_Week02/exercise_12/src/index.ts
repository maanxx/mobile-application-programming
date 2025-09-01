function getPromise(time: number): Promise<string>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("task done")
        }, time);
    });
}
async function createAsync(){
    try {
        console.log("Waiting!!!!!");
        const result = await getPromise(2000);
        console.log(result);
        
    } catch (error) {
        console.error("ERROR");
    }
}
createAsync();