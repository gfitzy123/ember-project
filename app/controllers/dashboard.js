import Ember from 'ember';

export default Ember.Controller.extend({


	actions: {	
  		addEmployee: function() {
			console.log(this.get('employeeName'));
				var employee = this.store.createRecord('employee', {
					name: this.get('employeeName'),
					salary: this.get('employeeSalary')*12
				});

				employee.save();
			}
	}
});