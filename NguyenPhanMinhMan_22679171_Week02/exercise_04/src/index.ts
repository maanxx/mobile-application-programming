function getPromise(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * 10);

            if (num > 2){
                resolve(num);
            } else {
                reject(new Error("So <= 2"));
            }
        }, 1000)
    });

}
getPromise().then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error.message);
})
