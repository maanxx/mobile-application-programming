function simulateTask(time: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}

simulateTask(10000).then(message => {
    console.log(message);
});