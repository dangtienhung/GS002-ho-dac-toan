import mongoose from 'mongoose';

// schemas
const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
		},
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const Users = mongoose.model('Users', userSchema);

export default Users;
