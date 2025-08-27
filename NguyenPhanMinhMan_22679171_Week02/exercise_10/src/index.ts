function getPromise(): Promise<string> {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // 50% thanh cong, nguoc lai
            if (success) {
                resovle("Success");
            } else {
                reject(new Error("Failed"));
            }
        }, 1000);
    });
}

getPromise().then(res => {
    console.log("Ket qua: ", res)
}).catch(err => {
    console.error(err.message);
}).finally(() => {
    console.log("Done");
})