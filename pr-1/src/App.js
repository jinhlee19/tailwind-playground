

function App() {
  return (
    <div className="App bg-slate-500 h-30">
      <h1 className="text-8xl text-blue-400 bg-slate-600">Hello World</h1>
    </div>
  );
}

export default App;

// 요청된 tailwind css만 build되는 상태.
// npm start 이전에 호출된 className이 아니면 실행되지 않는다.