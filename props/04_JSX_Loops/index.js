class App extends React.Component {
  render() {
    return (
      <div>
        <Friend 
          name="Elton"
          hobbies={['Piano', 'Singing', 'Dancing']} />

        <Friend 
          name="Fredy"
          hobbies={['Boxing', 'Singing', 'Dancing']} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))