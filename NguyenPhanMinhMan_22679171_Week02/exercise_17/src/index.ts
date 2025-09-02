async function hamAsync(n: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(n * 3);
      }, 1000);
    });
  }
// run dong thoi Parallel
const promises = [
  hamAsync(1),
  hamAsync(2),
  hamAsync(3),
  hamAsync(4),
  hamAsync(5)
];
async function runForAwait() {
  for await (const result of promises) {
    console.log(result);
  }
}
runForAwait();