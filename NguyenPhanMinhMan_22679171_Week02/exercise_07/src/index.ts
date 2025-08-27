function simulateTask(time: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Task done ${time} ms`);
        }, time);
    });
}

// run song song
Promise.race([
    simulateTask(1000),
  simulateTask(2000),
  simulateTask(3000)
]).then(res => {
    console.log("Result quickly: ", res);
});
