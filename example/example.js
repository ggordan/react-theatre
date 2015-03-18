var React = require('react');
var Theatre = require('../src/theatre');

var Example = React.createClass({
    render: function() {
        return(
            <div>
                <p> Currently viewing item: {this.props.index} </p>
            </div>
        );
    },
});

var App = React.createClass({

    getInitialState: function() {
        return {
            theatre: true,
        };
    },

    _toggleTheatre: function() {
        this.setState({
            theatre: !this.state.theatre,
        });
    },

    _renderTheatre: function() {
        if (this.state.theatre) {
            return <Theatre entries={this.props.entries} openItemIndex={50} closeHandler={this._toggleTheatre} />;
        }
    },

    render: function() {
        return(
            <div>
                {this._renderTheatre()}
                <button onClick={this._toggleTheatre}>Open</button>
            </div>
        );
    },
});

var items = [];
for (var i = 0; i < 100; i++) {
    items.push(<Example key={i} index={i} />);
}

React.render(<App entries={items} />, document.getElementById('app'));
