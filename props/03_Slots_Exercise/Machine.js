class Machine extends React.Component {
  render() {
    let x = this.props.x
    let y = this.props.y
    let z = this.props.z


    return (<div>

      <h1>{x} {y} {z}</h1>
      <h3> { x != y ? 'loose' : 'win'} </h3>
    </div>)
  }
}

