function getPromise() {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"))
        },1000);
    });
}