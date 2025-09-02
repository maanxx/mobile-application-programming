async function fetchUser(id: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
          id,
          name: `user${id}`,
          email: `user${id}}`
        });
    }, 1000);

    const timeOut = setTimeout(() => {
      reject(new Error("Erro!!"));
    }, 2000);
  });
}

async function fetchUsers(ids: string[]) {
  const results = [];
  for (const id of ids) {
    try {
        const user = await fetchUser(id); 
        results.push(user);
      }
    catch (error) {
      console.error("Fetching user${id}");
    }
  }
  return results;
}
(async () => {
  console.log("Fetching...");
  const users = await fetchUsers(["1","2","3"]);
  console.log(users);
}) ();
