var _ = require('lodash');

module.exports = {

	// HELPERS

	displayFlex: function() {
		return {
			display: '-webkit-box',
			display: '-webkit-flex',
			display: '-ms-flexbox',
			display: 'flex',
		};
	},

	flex: function(flex) {
		return {
			webkitBoxFlex: flex,
			webkitFlex: flex,
			msFlex: flex,
			flex: flex,
		};
	},

	alignItems: function(align) {
		return {
			webkitBoxAlign: align,
			webkitAlignItems: align,
			msFlexAlign: align,
			alignItems: align,
		};
	},

	justifyContent: function(justify) {
		return {
			webkitBoxPack: justify,
			webkitJustifyContent: justify,
			msFlexPack: justify,
			justifyContent: justify,
		};
	},

	flexFlow: function(flow) {
		return {
			webkitFlexFlow: flow,
    	msFlexFlow: flow,
     	flexFlow: flow,
		};
	},

	// STYLES

	_theatreStyle: function(top) {
		return {
			left: 0,
			fontFamily: 'sans-serif',
			top: top || document.body.scrollTop,
			position: 'absolute',
			zIndex: 1,
			height: window.innerHeight,
			width: window.innerWidth,
			backgroundColor: 'rgba(255, 255, 255, 0.95)',
		};
	},

	_theatreBodyWrapperStyle: function() {
		return _.assign({
			position: 'absolute',
			height: 'calc(100% - 8vw)',
			width: 'calc(100% - 8vw)',
			margin: '4vw',
			zIndex: 2,
		}, this.displayFlex(), this.flexFlow('column'));
	},

	_theatreHeaderStyle: function() {
		return _.assign({
			marginBottom: '2vh',
		}, this.displayFlex());
	},

	_theatreSelectStyle: function() {
		return _.assign({}, this.alignItems('center'), this.justifyContent('center'), this.flex('1 1 auto'));
	},

	_theatreCloseStyle: function() {
		return _.assign({
			color: '#ccc',
			cursor: 'pointer',
			padding: '1vh 2vw',
			fontSize: '2em',
		}, this.alignItems('center'), this.justifyContent('center'), this.flex('0 0 auto'));
	},

	_theatreContentStyle: function() {
		return _.assign({
			height: '100%',
			overflowY: 'scroll',
		}, this.displayFlex(), this.justifyContent('center'), this.flexFlow('column'));
	},

	_progressStyle: function(width) {
		return {
			position: 'absolute',
			zIndex: 3,
			background: '#4CAF50',
			height: '1px',
			opacity: 0.9,
			width: (width || 0) + '%',
		};
	},



};
