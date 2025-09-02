// ex 22
// async function fetchToDo(id: number) {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);

//     if (!res.ok) {
//       throw new Error(`http error: ${res.status}`);
//     }

//     // dich sang data json
//     const data = await res.json();
//     console.log("todos:", data);
//     return data; 
//   } catch (error) {
//     console.error("Error message:", (error as Error).message);
//   }
// }
// }
// async function fetchMutipleSequential(ids: number[]) {
//   for (const id of ids) {
//     try {
//       const result = await fetchToDo(id);
//       console.log(`To do ${id}:`, result); 
//     } catch (error) {
//       console.error("Error message:", (error as Error).message);
//     }
//   }
// }

//fetchMutipleSequential([1, 2, 3]);
//ex 23
// async function fetchToDo() {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);

//     if (!res.ok) {
//       throw new Error(`http error: ${res.status}`);
//     }

//     // dich sang data json
//     const data = await res.json();

//     // filter out completed: co nghia la loc ra completed: true
//     const completed = data.filter((data: any) => data.completed);
//     console.log("completed todos: ", completed);
//     return completed; 
//   } catch (error) {
//     console.error("Error message:", (error as Error).message);
//   }
// }
// fetchToDo();

// ex 24
// async function postData() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         title: "Hello Async",
//         body: "This is a test post",
//         userId: 1
//       })
    
//   });
//     if (!res.ok) {
//       throw new Error (`HTTP error: ${res.status}`);
//     }
//     const data = await res.json();
//     console.log("Response from API:", data);
//     return data;
//   } catch (error) {
//     console.error("Error message:", (error as Error).message);
//   }
// }
// postData();

//ex 25
// async function downloadFile(fileName: string){
//   console.log(`Starting dowload file: ${fileName}...`);

//   await new Promise<void>(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, 3000);
//   });

//   console.log("Dowload file completed!");
// }
// downloadFile("tar.zip");

// ex 26
// async function timeoutWaiting(): Promise<void> {
//   console.log("Waiting 5 secs...")
//   return new Promise(resolve => {
//       setTimeout(() => {
//         resolve();
//       }, 5000);
//   });
// }
// timeoutWaiting();
// console.log("Done.");
// async function timeoutWaiting(){
//   console.log("Waiting 5 secs...")
//   await new Promise<void>(resovle => {
//     setTimeout(() => {
//       resovle();
//     }, 5000);
//   });
//   console.log("Done.");
// }
// timeoutWaiting();

//ex 27
// async function fetchWithRetry(url: string, retries: number) {
//     for (let attempt = 1; attempt <= retries; attempt++) {
//         try {
//             const res = await fetch(url);
//             if (!res.ok) {
//                 throw new Error(`HTTP error!! ${res.status}`);
//             }
//             const data = res.json()
//             return data;
//         } catch (error) {
//             console.error(`Attempt ${attempt} failed: ${(error as Error).message}}`);

//             if (attempt == retries) {
//                 throw new Error(`All ${retries} attempts failed`);
//             }
//         }
//     }
// }
// (async () => {
//     try {
//         const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1",1);
//         console.log("Result: ", data)
//     } catch (error) {
//         console.error((error as Error).message);
//     }
// }) ();

//ex 28
// async function getTask(id: number, time: number) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`Task ${id} done on ${time}ms`);
//         }, time);
//     });
// }
// async function batchProcess() {
//     const tasks = [
//         getTask(1, 1000),
//         getTask(2, 2000),
//         getTask(3, 50),
//         getTask(4, 1500),
//         getTask(5, 3000)
//     ];

//     const result = await Promise.all(tasks);
    
//     return result;
// }
// batchProcess().then(res => {
//     console.log("Run all tasks:");
//     console.log(res);
// });

// ex 29
// async function getTask(name: number, time: number): Promise<string> {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(`Task ${name} done after ${time}ms`)
//             resolve(`Task ${name} result`);
//         }, time);
//     });
// }
// async function qeueProcess(tasks: Array<() => Promise<string>>): Promise<string[]>{
//     const results = [];

//     for (let i = 0; i < tasks.length; i++) {
//         try {
//             const result = await tasks[i]();
//             results.push(result);
//         } catch (error) {
//             console.error(`Task ${i + 1} failed`);
//         }
//     }
//     return results;
// }

// (async () => {
//     const taskQueue = [
//       () => getTask(1, 1000),
//       () => getTask(2, 500),
//       () => getTask(3, 1500),
//       () => getTask(4, 800)
//     ];
  
//     const results = await qeueProcess(taskQueue);
//     console.log("All results:", results);
//   })();

// ex 30
// async function apiCall(url: string, success = true, delay = 1000) {
//     return new Promise((resovle, reject) => {
//         setTimeout(() => {
//             if (success) {
//                 resovle(`success ${url}`);
//             } else {
//                 reject(`fail ${url}`);
//             }
//         }, delay)
//     });
// }
// async function fetchMultipleApis() {
//     const apiCalls = [
//         apiCall("https://api.example.com/data1", true, 800),
//         apiCall("https://api.example.com/data2", false, 1200),
//         apiCall("https://api.example.com/data3", true, 600),
//         apiCall("https://api.example.com/data4", false, 1000)
//     ];
  
//     const results = await Promise.allSettled(apiCalls);
  
//     results.forEach((result, index) => {
//       if (result.status === "fulfilled") {
//         console.log(`API ${index + 1} succeeded:`, result.value);
//       } else {
//         console.log(`API ${index + 1} failed:`, result.reason);
//       }
//     });
//   }
  
//   fetchMultipleApis();