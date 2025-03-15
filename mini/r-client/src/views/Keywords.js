import React, { Component } from 'react';

class Keywords extends Component {
    render() {
        return (
            <header>
                <div className="logo">Search Keywords in Title & URL</div>
                <input
                    onChange={this.props.getKeywords}
                    placeholder="Search News..."
                />
            </header>
        );
    }
}

export default Keywords;
