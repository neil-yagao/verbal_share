const Customer = require('../../db/model/customer');
const Note = require('../../db/model/customer-note');
/**
 * 	type Mutations {
			addCustomer(customer:CustomerInput): Customer
			addNoteToCustomer(customerId:Int, note:NoteInput) Note
			deleteNote(noteId:Int)
			updateNote(noteId:Int,note:NoteInput) Note
			updateCustomer(customerId:Int, customer:CustomerInput) Customer
    }
 */

const mutation = {
	Mutations: {
		addCustomer(_, { customer }) {
			return Customer.create(customer);
		},
		updateCustomer(_, { customerId, customer }) {
			let customerToUpdate = {
				id: customerId,
				...customer,
			};
			return Customer.findByPk(customerId).then(customer => {
				if (customer && customer.id) {
					return Customer.upsert(customerToUpdate).then(() => {
						return customerToUpdate;
					});
				}
				Promise.reject(`unable to find customer ${customerId}`);
			});
		},
		addNoteToCustomer(_, { customerId, note }) {
			let newNote = {
				customerId,
				...note,
			};
			return Note.create(newNote);
		},
		deleteNote(_, { noteId }) {
			console.log('deleting note', noteId);
			return Note.destroy({
				where: {
					id: noteId,
				},
			});
		},
		updateNote(_, { noteId, note }) {
			let noteToUpdate = {
				id: noteId,
				...note,
			};
			return Note.findByPk(noteId).then(note => {
				if (note && note.id) {
					return Note.upsert(noteToUpdate).then(() => {
						return noteToUpdate;
					});
				}
				Promise.reject(`unable to find note ${noteId}`);
			});
		},
	},
};

module.exports = mutation;
