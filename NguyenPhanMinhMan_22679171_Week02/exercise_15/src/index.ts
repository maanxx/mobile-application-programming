async function hamAsync(n: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(n * 3);
      }, 1000);
    });
  }
// run tun cai Sequential
async function runSequential() {
  const result1 = await hamAsync(1);
  console.log("FIRST:",result1);

  const result2 = await hamAsync(2);
  console.log("SECOND:",result2);

  const result3 = await hamAsync(3);
  console.log("THIRD:",result3);
}
runSequential();