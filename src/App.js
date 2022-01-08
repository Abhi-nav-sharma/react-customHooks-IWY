import { useState } from "react";
import Counter from "./Components/Counter";
import useFetch from "./hook/useFetch";
import useTimer from "./hook/useTimer";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState("https://api.github.com/search/users?q=masai");

  const [value, startTimer, pauseTimer, resetTimer] = useTimer({
    initialValue: 20
  });
  const { loading, data, error, fetchRequest } = useFetch(
    url + `&page=${page}`
  );
  console.log(data);
  return (
    <div className="App">
      <Counter />
      <h1>Timer</h1>
      <h2>{value}!</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
      <div>Use Fetch</div>
      <div>{loading && "Loading"}</div>
      <div>
        {data?.items?.map((item) => (
          <div key={item.login}>{item.login}</div>
        ))}
      </div>
      <button
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
