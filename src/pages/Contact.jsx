import React from "react";

export default class extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            name: 'contact'
        }
    }
    render() {
        return(
            <h1>Contact</h1>
        )
    }

}
