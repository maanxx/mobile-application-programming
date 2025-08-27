function getPromise(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
        
}
// sau 2s thi no se in "hello"
getPromise().then(message => {
    console.log(message);
});