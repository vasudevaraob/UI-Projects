import React, { Component } from 'react'

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Java",
            author: "Stave Jobs",
            noofVotes: 0

        };
    }
upVoteHandeller=()=>{
    this.setState({noofVotes:++this.state.noofVotes})
}

downVoteHandeller=()=>{
    this.setState({noofVotes:--this.state.noofVotes})
}

    render() {
        return (

            <div>

                <h1>{this.state.name}</h1>
                <h1>{this.state.author}</h1>
                {
                    this.state.noofVotes > 0 ? (<h1>{this.state.noofVotes}</h1>) : (<h1>0</h1>)

                }
                <button onClick={this.upVoteHandeller}>UpVote</button>
                <button onClick={this.downVoteHandeller}>DownVote</button>

            </div>
            
        );
    }
}


export default Book;