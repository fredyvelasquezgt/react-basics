class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                to="Ringo" 
                from="Paul" 
                num={3} 
                data={[1,2,3]}
                isFunny={true} />
                <Hello 
                to="Cher" 
                from="Sunny" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))