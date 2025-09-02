async function fetchToDo() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!res.ok) {
      throw new Error(`http error: ${res.status}`)
    }

    const data = await res.json();
    console.log("To do:", data);
  } catch (error) {
    console.error("Error messge:");
  }
}

fetchToDo();