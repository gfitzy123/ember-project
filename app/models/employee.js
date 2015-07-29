import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    salary: DS.attr('number'),
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "Alice",
            salary: 99000,
            isCompleted: false
        },
        {
            id: 2,
            name: "Bob",
            salary: 85000,
            isCompleted: true
        },
        {
            id: 3,
            name: "Sam",
            salary: 84000,
            isCompleted: false
        }
    ]
});
