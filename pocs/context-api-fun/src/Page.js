import React from "react";

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        let theme = this.context;

        this.permalink = "http://www.google.com"
        this.content = (
            <div style={{
                backgroundColor: theme
              }}>
                <p>here content</p>
            </div>
        )
        this.topBar = (
            <div style={{
                backgroundColor: theme
              }}>
                <a href={this.permalink} >link</a>
            </div>
        );
    }
    render(){
        return (
            <div>
                {this.topBar}
                {this.content}
            </div>
        );
    }
};