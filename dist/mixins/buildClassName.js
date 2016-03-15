'use strict';

module.exports = {

  buildClassName: function buildClassName(baseName) {
    var name = baseName;
    if (this.props.className) {
      name += ' ' + this.props.className;
    }
    return name;
  }
};