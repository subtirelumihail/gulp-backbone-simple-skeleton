'use strict';

var Backbone = require('backbone');
var $ = require('jquery');

var componentView = require('../templates/component.html');

var view = componentView({
    name: 'example'
});

$('.components').append(view);
module.exports = Backbone.View.extend({
    el: $('.components'),
    render: function() {
      this.$el.html(view);
    }
});
