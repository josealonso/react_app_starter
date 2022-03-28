import "./styles.css";

export default function App() {
  const topics = [
    { id: 1, text: "React components", done: false },
    { id: 2, text: "Rendering", done: false }
  ];

  return (
    <div className="App">
      <h1>React Tutorial for Solidity developers</h1>
      <h2>Topics covered</h2> {/* component with single tag */}
      <TopicsList topics={topics} />
      <AddTopic />
    </div>
  );
}

// Every component must return JSX elements 
function TopicsList({ topics }) {
  return (
    <ul>
      {topics.map(topic => (
        <li key={topic.id}>{topic.text}</li>
      ))}
    </ul>
  )
}

function AddTopic() {
  function handleAddTopic(event) {
    event.preventDefault(); // This prevents a page refresh

  }

  return (
    <form onSubmit={handleAddTopic}>
      <input placeholder="Add topic" />
      <button type="submit">Submit</button>
    </form>
  )
}