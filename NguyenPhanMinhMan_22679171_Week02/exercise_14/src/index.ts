async function hamAsync(n: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(n * 3);
      }, 1000);
    });
  }

(async () => {
  console.log("Waiting");
  const result = await hamAsync(1);
  console.log("Value: ");
  console.log(result);
})  ();