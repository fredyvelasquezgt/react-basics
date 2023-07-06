class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Game</h1>
        <Machine x='x' y='y' z='z' />
        <Machine x='x' y='x' z='x' />
        <Machine x='x' y='y' z='z' />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))