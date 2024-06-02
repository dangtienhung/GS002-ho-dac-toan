import Users from '../schemas/user.schema.js';

export const handleCreateUser = async (body) => {
	return await Users.create(body);
};

export const handleGetAllUsers = async () => {
	return await Users.find();
};

export const handleGetUserById = async (id) => {
	return await Users.findById({ _id: id });
};

export const handleDeleteUser = async (id) => {
	return await Users.findByIdAndDelete({ _id: id });
};

export const handleUpdateUser = async (id, body) => {
	return await Users.findByIdAndUpdate(id, body, {
		new: true,
	});
};
