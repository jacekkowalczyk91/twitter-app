import React from 'react'

class View extends React.Component {

    state = {
        data: {}
    }

    componentDidMount() {
        fetch(`https://api.twitter.com/`)
            .then(response => response.json())
            .then(data => this.setState({data}))
    }

    render() {

        return (
            <div>
            </div>
        )
    }
}

export default View