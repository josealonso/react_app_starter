import React from "react";
import "./styles.css";

// Any re-render within a parent component will cause any child components to re-render.
export default function App() {
  const [topics, setTopics] = React.useState([
    { id: 1, text: "React components", done: false },
    { id: 2, text: "Rendering", done: false }
  ])

  return (
    <div className="App">
      <h1>React Tutorial for Solidity developers</h1>
      <h2>Topics covered</h2> {/* component with single tag */}
      <TopicsList topics={topics} />
      <AddTopic setTopics={setTopics} />
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

function AddTopic({ setTopics }) {
  function handleAddTopic(event) {
    event.preventDefault(); // This prevents a page refresh
    const text = event.target.elements.addTopic.value;
    const topic = {
      id: 3,
      text,
      done: false
    };
    setTopics(prevTopics => {
      return prevTopics.concat(topic);
    });
  }

  return (
    <form onSubmit={handleAddTopic}>
      <input name="addTopic" placeholder="Add topic" />
      <button type="submit">Submit</button>
    </form>
  )
}