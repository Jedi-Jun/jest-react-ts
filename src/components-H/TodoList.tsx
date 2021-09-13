

export function TodoList ({ todo }: any) {
  console.log(todo);
  return (
    <ul>
      <li>{todo}</li>
      <button>del</button>
    </ul>
  )
}