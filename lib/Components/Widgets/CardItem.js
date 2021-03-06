'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _NativeBaseComponent2 = require('../Base/NativeBaseComponent');

var _NativeBaseComponent3 = _interopRequireDefault(_NativeBaseComponent2);

var _computeProps = require('../../Utils/computeProps');

var _computeProps2 = _interopRequireDefault(_computeProps);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Thumbnail = require('./Thumbnail');

var _Thumbnail2 = _interopRequireDefault(_Thumbnail);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardItemNB = function (_NativeBaseComponent) {
    _inherits(CardItemNB, _NativeBaseComponent);

    function CardItemNB() {
        _classCallCheck(this, CardItemNB);

        return _possibleConstructorReturn(this, (CardItemNB.__proto__ || Object.getPrototypeOf(CardItemNB)).apply(this, arguments));
    }

    _createClass(CardItemNB, [{
        key: 'getInitialStyle',
        value: function getInitialStyle() {
            return {
                listItem: {
                    borderBottomWidth: this.getTheme().borderWidth,
                    padding: this.imagePresent() && !this.ifShowCase() ? 0 : this.getTheme().listItemPadding,
                    backgroundColor: this.getTheme().listBg,
                    justifyContent: this.buttonPresent() ? 'space-between' : 'flex-start',
                    flexDirection: this.thumbnailPresent() || this.iconPresent() || this.notePresent() && this.ifShowCase() ? 'row' : 'column',
                    borderColor: this.getTheme().listBorderColor
                },
                listItemDivider: {
                    borderBottomWidth: this.getTheme().borderWidth,
                    padding: this.getTheme().listItemPadding,
                    backgroundColor: this.getTheme().listDividerBg,
                    justifyContent: this.buttonPresent() ? 'space-between' : 'flex-start',
                    flexDirection: 'row',
                    borderColor: this.getTheme().listBorderColor
                },
                itemText: {
                    fontSize: this.ifShowCase() ? 14 : 15,
                    marginTop: this.ifShowCase() ? 10 : 0,
                    color: this.getContextForegroundColor()
                },
                dividerItemText: {
                    fontSize: 16,
                    fontWeight: '500',
                    color: this.getContextForegroundColor()
                },
                itemIcon: {
                    fontSize: this.getTheme().iconFontSize,
                    color: this.getContextForegroundColor()
                },
                itemNote: {
                    fontSize: 15,
                    color: this.getTheme().listNoteColor,
                    fontWeight: '100',
                    flex: 1
                },
                itemSubNote: {
                    fontSize: 15,
                    color: '#999'
                },
                thumbnail: {
                    alignSelf: 'center'
                },
                fullImage: {
                    alignSelf: 'stretch',
                    height: this.ifShowCase() ? 120 : 300
                }
            };
        }
    }, {
        key: 'getRightStyle',
        value: function getRightStyle() {
            return {
                right: {
                    flex: 1,
                    paddingLeft: 10,
                    backgroundColor: 'transparent'
                },
                right2: {
                    flex: 1,
                    flexDirection: 'row',
                    paddingLeft: 10,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'transparent'
                },
                right3: {
                    flex: 1,
                    flexDirection: 'column',
                    paddingLeft: 10,
                    justifyContent: 'flex-start',
                    backgroundColor: 'transparent'
                }
            };
        }
    }, {
        key: 'thumbnailPresent',
        value: function thumbnailPresent() {
            var thumbnailComponentPresent = false;
            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _Thumbnail2.default) thumbnailComponentPresent = true;
            });

            return thumbnailComponentPresent;
        }
    }, {
        key: 'imagePresent',
        value: function imagePresent() {
            var imagePresent = false;
            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _reactNative.Image) imagePresent = true;
            });

            return imagePresent;
        }
    }, {
        key: 'iconPresent',
        value: function iconPresent() {
            var iconComponentPresent = false;
            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _Icon2.default) iconComponentPresent = true;
            });

            return iconComponentPresent;
        }
    }, {
        key: 'buttonPresent',
        value: function buttonPresent() {
            var buttonComponentPresent = false;
            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _Button2.default) buttonComponentPresent = true;
            });

            return buttonComponentPresent;
        }
    }, {
        key: 'ifShowCase',
        value: function ifShowCase() {
            var ifShowCase = false;

            if (this.props.cardBody) {
                ifShowCase = true;
            }

            return ifShowCase;
        }
    }, {
        key: 'notePresent',
        value: function notePresent() {
            var notePresent = false;

            _react2.default.Children.forEach(this.props.children, function (child) {
                if (child.type == _Text2.default && child.props.note) notePresent = true;
            });

            return notePresent;
        }
    }, {
        key: 'squareThumbs',
        value: function squareThumbs() {
            var squareThumbs = false;
            if (this.thumbnailPresent()) {
                _react2.default.Children.forEach(this.props.children, function (child) {
                    if (child.props.square) squareThumbs = true;
                });
            }

            return squareThumbs;
        }
    }, {
        key: 'getChildProps',
        value: function getChildProps(child) {
            var defaultProps = {};
            if (child.type == _reactNative.Image && !Array.isArray(this.props.children)) {
                defaultProps = {
                    resizeMode: 'stretch',
                    style: this.getInitialStyle().fullImage
                };
            } else if (child.type == _Button2.default) {
                defaultProps = {
                    small: true,
                    style: this.getInitialStyle().itemButton
                };
            } else if (child.type == _Text2.default) {
                if (this.props.header || this.props.footer) {
                    defaultProps = {
                        style: this.getInitialStyle().dividerItemText
                    };
                } else {
                    if (child.props.note && this.thumbnailPresent()) {
                        defaultProps = {
                            style: this.getInitialStyle().itemSubNote
                        };
                    } else if (child.props.note) {
                        defaultProps = {
                            style: this.getInitialStyle().itemNote
                        };
                    } else {
                        defaultProps = {
                            style: this.getInitialStyle().itemText
                        };
                    }
                }
            } else if (child.type == _Icon2.default) {
                defaultProps = {
                    style: this.getInitialStyle().itemIcon
                };
            } else if (child.type == _Thumbnail2.default) {
                defaultProps = {
                    style: this.getInitialStyle().thumbnail
                };
            } else if (child.type == _reactNative.Image) {
                defaultProps = {
                    style: this.getInitialStyle().fullImage
                };
            } else {
                defaultProps = {
                    //foregroundColor: this.getContextForegroundColor()
                };
            }

            return (0, _computeProps2.default)(child.props, defaultProps);
        }
    }, {
        key: 'prepareRootProps',
        value: function prepareRootProps() {
            var defaultProps = {};

            if (this.props.header || this.props.footer) {

                defaultProps = {
                    style: this.getInitialStyle().listItemDivider
                };
            } else {
                defaultProps = {
                    style: this.getInitialStyle().listItem
                };
            }

            return (0, _computeProps2.default)(this.props, defaultProps);
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            var newChildren = [];

            if (!this.thumbnailPresent() && !this.iconPresent()) {
                newChildren = _react2.default.Children.map(this.props.children, function (child, i) {
                    return _react2.default.cloneElement(child, _extends({}, _this2.getChildProps(child), { key: i }));
                });
            } else {
                newChildren = [];
                if (!Array.isArray(this.props.children)) {
                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'cardItem', style: { justifyContent: 'flex-start' } },
                        _react2.default.cloneElement(this.props.children, this.getChildProps(this.props.children))
                    ));
                } else {

                    var childrenArray = _react2.default.Children.toArray(this.props.children);
                    newChildren.push(_react2.default.cloneElement(childrenArray[0], this.getChildProps(childrenArray[0])));
                    newChildren.push(_react2.default.createElement(
                        _View2.default,
                        { key: 'cardItem', style: this.notePresent() ? this.getRightStyle().right : this.squareThumbs() ? this.getRightStyle().right3 : this.getRightStyle().right2 },
                        childrenArray.slice(1).map(function (child, i) {
                            return _react2.default.cloneElement(child, _extends({}, _this2.getChildProps(child), { key: i }));
                        })
                    ));
                }
            }

            return newChildren;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _View2.default,
                this.prepareRootProps(),
                this.renderChildren()
            );
        }
    }]);

    return CardItemNB;
}(_NativeBaseComponent3.default);

exports.default = CardItemNB;