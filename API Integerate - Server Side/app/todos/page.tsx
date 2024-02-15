// Its working all on server 
const fetchData = async () => {
  const response = await fetch("https://dummyjson.com/todos");
  const data = await response.json();
  return data.todos;
};

// converted function into async
export default async function Todos() {
  // used await and called fetchData
  const todos = await fetchData();
  return (
    <div>
      <h1>Todos</h1>

      <br />
      {todos.map((elem: { id: number; todo: string }) => {
        return (
          <div key={elem.id}>
            {elem.id}-{elem.todo}
          </div>
        );
      })}
    </div>
  );
}
