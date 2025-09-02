async function fetchUser(id: string) {
  await new Promise(resolve => {setTimeout(resolve, 1000)});

  return {
    id,
    name: `user${id}`,
    email: `user${id}@gmail.coom`
  }
}
(async () => {
  const user = await fetchUser("1");
  console.log(user);
}) ();
