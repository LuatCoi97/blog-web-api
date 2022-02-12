const mongoose = require("mongoose");
// const uniqueEmail = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
	avatar: { type: String, required: false },
	nickname: { type: String, required: false },
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	status: { type: String, required: true },
	active: { type: Boolean, required: true },
	access_token: { type: String, required: true },
	roles: { type: Array, required: true },
	introducation: { type: String, required: false },
	created_at: { type: Date, required: true },
	updated_at: { type: Date, required: true }
});

// userSchema.plugin(uniqueEmail);

module.exports = mongoose.model("User", userSchema);