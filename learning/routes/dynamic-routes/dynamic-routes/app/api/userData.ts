async function GetUsers() {
  const response = await fetch("https://jsonplaceholder.org/users", {
    cache: "no-store",
  });
  if (!response) throw new Error("Data Fetching Failed");

  const users = await response.json();
  return users;
  //    console.log(users)
}
const userData = GetUsers();
export { userData };
