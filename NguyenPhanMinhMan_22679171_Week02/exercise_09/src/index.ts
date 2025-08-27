function getPromise(arr: number[]): Promise<number[]> {
    return new Promise(resovle => {
        setTimeout(() => {
            const even = arr.filter(num => num % 2 == 0)
            resovle(even);
        }, 1000);
    });
}

getPromise([1,2,3,4,5,6,7,8,9,10])
.then(res => {
    console.log("Cac so chan: ", res);
})
.catch(err => {
    console.log(err);
});