import React, { Component } from "react";

class Title extends Component {
    render() {
        return (
            <div>
                <h1 className="mt-3">{this.props.titleText}</h1>
            </div>
        );
    }
}

export default Title;
