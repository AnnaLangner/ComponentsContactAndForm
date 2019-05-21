var contacts = [
	{
	    id: 1,
	    firstName: 'Jan',
	    lastName: 'Nowak',
	    email: 'jan.nowak@example.com',
  	},
  	{
	    id: 2,
	    firstName: 'Adam',
	    lastName: 'Kowalski',
	    email: 'adam.kowalski@example.com',
  	},
  	{
	    id: 3,
	    firstName: 'Zbigniew',
	    lastName: 'Koziol',
	    email: 'zbigniew.koziol@example.com',
  	}
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};

var App = React.createClass({
	render: function() {
		return (
			React.createElement('div', {className: 'app'}, 
				React.createElement('h1', {}, 'Application for adding contacts'),
				React.createElement('p', {className: 'label'}, 'Contacts'),		
        		React.createElement(Contacts, {items: contacts}, {}),
        		React.createElement('p', {className: 'label'}, 'Add contact'),
        		React.createElement(ContactForm, {contact: contactForm})
			)
		);
	}
});