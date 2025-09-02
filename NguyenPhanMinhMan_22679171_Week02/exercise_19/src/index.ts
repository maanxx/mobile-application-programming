async function fetchUser(id: string) {
  await new Promise(resolve => {setTimeout(resolve, 1000)});

  return {
    id,
    name: `user${id}`,
    email: `user${id}@gmail.com`
  };
}

async function fetchUsers(ids: string[]) {
  const results = [];
  for (const id of ids) {
    const user = await fetchUser(id); 
    results.push(user);
  }
  return results;
}
(async () => {
  console.log("Fetching...");
  const users = await fetchUsers(["1","2","3"]);
  console.log(users);
}) ();
