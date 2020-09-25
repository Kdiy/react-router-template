import React from "react";

export default class extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            name: 'index'
        }
    }
    render() {
        return(
            <h1>Home</h1>
        )
    }

}
