var React = require('react/addons');
var StyleMixin = require('./defaultStyleMixin');
var PureRenderMixin = React.addons.PureRenderMixin;

var LEFT_KEYCODE = 37;
var RIGHT_KEYCODE = 39;

var Theatre = React.createClass({

	mixins: [ PureRenderMixin, StyleMixin ],

	propTypes: {
		entries: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
		closeHandler: React.PropTypes.func.isRequired,
		showProgress: React.PropTypes.bool,
		openItemIndex: React.PropTypes.number,
	},

	getDefaultProps: function() {
		return {
			showProgress: true,
			openItemIndex: 0,
		};
	},

	getInitialState: function() {
		return {
			currentItem: 0,
		};
	},

	// METHODS

	_getProgress: function() {
		return (this.state.currentItem/this.props.entries.length) * 100;
	},

	_close: function(event) {
		this.props.closeHandler(this.state.currentIndex);
	},

	// EVENT HANDLERS

	_bindKeys: function(event) {
		var offset = 0;
		switch (event.keyCode) {
			case LEFT_KEYCODE:
				--offset;
				break;
			case RIGHT_KEYCODE:
				++offset;
				break;
		}

		this.setState({
			currentItem: Math.min(Math.max(this.state.currentItem+offset, 0), this.props.entries.length-1),
		});
	},

	// LIFECYCLE

	componentWillMount: function() {
		if (this.props.openItemIndex) {
			this.setState({
				currentItem: this.props.openItemIndex,
			});
		}
		document.addEventListener('keydown', this._bindKeys);
		document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	},

	componentDidMount: function() {
	},

	componentWillUnmount: function() {
		document.removeEventListener('keydown', this._bindKeys);
		document.getElementsByTagName('body')[0].style.overflow = 'auto';
	},


	// RENDER

	_renderProgressBar: function() {
		if (this.props.showProgress) {
			return <div className="progress" style={this._progressStyle(this._getProgress())} />;
		}
	},

	render: function() {
		return(
			<div className="theatre" style={this._theatreStyle()}>
				{this._renderProgressBar()}
				<div className="theatre-bodyWrapper" style={this._theatreBodyWrapperStyle()}>
					<div className="theatre-header" style={this._theatreHeaderStyle()}>
						<div className="theatre-select" style={this._theatreSelectStyle()}></div>
						<div className="theatre-close" style={this._theatreCloseStyle()} onClick={this._close}>x</div>
					</div>
					<div className="theatre-content" style={this._theatreContentStyle()}>
						{this.props.entries[this.state.currentItem]}
					</div>
				</div>
			</div>
		);
	},

});

module.exports = Theatre;
