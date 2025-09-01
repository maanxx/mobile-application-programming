function getPromise(): Promise<String> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello chu em");
        }, 2000);
    });
}

async function createAsync() {
    try {
        console.log("Async waitting");
        const result = await getPromise();
        console.log(result);
    } catch (error) {
        console.error("ERROR!!!");
    }
}

createAsync();