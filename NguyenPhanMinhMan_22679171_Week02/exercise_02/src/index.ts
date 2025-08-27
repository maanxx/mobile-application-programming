function getPromise() {
    return new Promise(resovle => {
        setTimeout(() => {
            resovle(10);
        },1000);
    });
}