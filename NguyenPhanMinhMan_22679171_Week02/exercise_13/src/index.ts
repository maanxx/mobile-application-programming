function simulateTask(time: number) {
    return new Promise((resolve, reject) => {
      if (time < 0) {
        reject("Invalid time!");
      } else {
        setTimeout(() => {
          resolve("Task done");
        }, time);
      }
    });
  }
  
async function createAsync(){
    try {
        console.log("Waiting!!!!!");
        const result = await simulateTask(2000);
        console.log(result);
        
    } catch (error) {
        console.error("ERROR");
    }
}
createAsync();