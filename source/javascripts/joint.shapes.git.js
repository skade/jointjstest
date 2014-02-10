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

joint.shapes.git = {};

joint.shapes.git.Commit = joint.shapes.basic.Circle.extend({
    defaults: joint.util.deepSupplement({
        type: 'git.Commit',
        size: { width: 10, height: 10 },
        attrs: {
            circle: {
                'stroke-width': 3,
                transform: 'translate(10, 10)',
                r: 5
            },
            text: {
                'font-size': 14,
                text: '',
                'text-anchor': 'middle',
                'ref-x': .5,
                'ref-y': -10,
                ref: 'circle',
                'y-alignment': 'middle',
                fill: 'black',
                'font-family': 'Arial, helvetica, sans-serif'
            }
        }
    }, joint.shapes.basic.Circle.prototype.defaults)
});

if (typeof exports === 'object') {
    module.exports = joint.shapes.git;
}
