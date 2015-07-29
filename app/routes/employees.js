import Ember from 'ember';

export default Ember.Route.extend({
		employeeName: null,
		employeeSalary: null,
	model: function() {
		return this.store.find('employee');

	},
	actions: {
		addEmployee: function() {
		
			console.log(this.get('employeeName'));
				var employee = this.store.createRecord('employee', {
					name: this.get('employeeName'),
					salary: this.get('employeeSalary')
				});

				employee.save();
			}
		}
});
