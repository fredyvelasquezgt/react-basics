class Hello extends React.Component {
    render() {
        console.log(this.props)
        this.props.from;
        return <p>Hola {this.props.to} from {this.props.from}</p>
    }
}