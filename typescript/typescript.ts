TYPESCRIPT

interface User {
	id: number
	name: string
	email?: string
}

fetchUser(id).then((user: User) => {
// got my User!
})
//later
render(user.name) //compiler says he has a name

// Validation
fetchUser(id).then(user => {
	const validationErrors = validate(user)
	if (validationErrors) {
		throw new Error('wat')
	}
	//got my user!
})
render(user.name) // he has a name... fail quickly

//Validation: JSON schema boilerplate
const schema = {
	type: "object",
	properties: {
		id: {
			type: "integer"
		},
		name: {
			type: "string"
		},
		email: {
			type: "string"
		},
	},
	required: ["id","name"]
}
const ajv = new Ajv();
const validate = ajv.compile(schema);
const valid = validate(data);
if (!valid) console.log(validate.errors);
