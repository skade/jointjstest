if (typeof exports === 'object') {

    var joint = {
        util: require('../src/core').util,
        shapes: {
            basic: require('./joint.shapes.basic')
        },
        dia: {
            ElementView: require('../src/joint.dia.element').ElementView,
            Link: require('../src/joint.dia.link').Link
        }
    };
}

joint.shapes.ruby = {};

joint.shapes.ruby.Class = joint.shapes.basic.Generic.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect id="class"/><rect class="methods class"/><rect class="methods instance"/></g><text/></g>',
    defaults: joint.util.deepSupplement({
        type: 'ruby.Class',
        size: { width: 100, height: 100 },
        methods: {
            'class': [],
            'instance': []
        },
        attrs: {
           '#class': {
               fill: '#FFFFFF', stroke: 'black',  width: 100, height: 40
           },
           '.methods.class': {
               fill: '#FFFFFF', stroke: 'red', y: 40, width: 100, height: 30
           },
           '.methods.instance': {
               fill: '#FFFFFF', stroke: 'yellow', y: 70, width: 100, height: 30
           },
           'text': {
               'font-size': 14,
               text: '',
               'ref-x': .5,
               'ref-y': .1,
               ref: 'rect',
               'y-alignment': null,
               'x-alignment': 'middle',
               fill: 'black',
               'font-family': 'Arial, helvetica, sans-serif'
           }
        }
    }, joint.shapes.basic.Generic.extend)
});

joint.shapes.ruby.ClassView = joint.dia.ElementView.extend({
    render: function() {
        joint.dia.ElementView.prototype.render.apply(this, arguments);

        this.renderMethods();
        this.update();
    },

    renderMethods: function() {
        var methods = this.model.get('methods');
        $class_methods = this.$('.methods.class').empty();
        _.each(methods["class"], function(meth) {
            $class_methods.append( V('<text/>').text('-' + meth).node);
        });
        $instance_methods = this.$('.methods.instance').empty();
        _.each(methods["instance"], function(meth) {
            $instance_methods.append( V('<text/>').text('+' + meth).node);
        });
    }
});

if (typeof exports === 'object') {
    module.exports = joint.shapes.git;
}
