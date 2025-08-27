function simulateTask(time: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Task done ${time} ms`);
        }, time);
    });
}

// run song song
Promise.all([
    simulateTask(1000),
    simulateTask(1000),
    simulateTask(1000)
]).then(result => {
    console.log(result);
});
