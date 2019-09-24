//  component called thing-item
Vue.component('thing-item', {
    template: '<li>This is a thing-item</li>'
})

//var app = new Vue(...)

Vue.component('thing-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['thing'],
    template: '<li>{{ thing.text }}</li>'
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var vBind7 = new Vue({
    el: '#vbind-7',
    data: {
        lister: [
            { id: 0, text: 'boring' },
            { id: 1, text: 'less boring' },
            { id: 2, text: 'Very interesting!!' }
        ]
    }
})