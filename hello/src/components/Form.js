import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: ''
        }
    }
    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value,


        })

    }
    handleCommentsChange = (e) => {
        this.setState({
            comments: e.target.value
        })
    }
    handleTopicChange = (e) => {
        this.setState({
            topic: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div>
                    <label>username: </label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>comments:</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic :</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">react</option>
                        <option value="angular">angular</option>
                        <option value="vue">vue</option>
                    </select>
                </div>
                <button type="submit">submit</button>

            </form>
        )
    }
}

export default Form