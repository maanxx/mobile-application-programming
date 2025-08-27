function getPromise() {
    return new Promise((resolve => {
        setTimeout (() => {
            resolve("Hello Async");
        }, 2000)
    }));
        
}
