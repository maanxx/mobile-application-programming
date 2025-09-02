async function hamAsync(n: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(n * 3);
      }, 1000);
    });
  }
// run dong thoi Parallel
async function runParallel() {
  const [a, b, c] = await Promise.all([
    hamAsync(1),
    hamAsync(2),
    hamAsync(3)
  ])
console.log(a,b,c);
}
runParallel();