function getPromise(): Promise<number> {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

// xuat ra so 10 sau 1s
getPromise().then(message => {
    console.log(message);
})