function getPromise(): Promise<never> {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"))
        },1000);
    });
}
getPromise().catch(error => {
    console.log("Error: ", error.message);
});