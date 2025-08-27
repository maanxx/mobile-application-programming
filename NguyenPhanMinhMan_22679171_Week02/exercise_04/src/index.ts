function getPromise() {
    const myPro =  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Successful");
        }, 1000)
    });

    myPro.then((data) => {
        console.log(data);
    })

    const myPro01 =  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Successful");
        }, 1000)
    });

    myPro01.catch((error) => {
        console.error(error.message);
    })
}

