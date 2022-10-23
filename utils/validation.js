const isRequired = (value) => (value === '' ? false : true);
const isBetween = (length, min, max) =>
	length < min || length > max ? false : true;
const isEmailValid = (email) => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};
const isUSNValid = (usn) => {
	const re = /^(4SO[0-9]{2}[A-Z]{2}[0-9]{3})$/;
	return re.test(usn);
};
const isSemesterValid = (sem) => {
	const re = /^([1-8])$/;
	return re.test(sem);
};
const isSectionValid = (sec) => {
	const re = /^([A-Z])$/;
	return re.test(sec);
};

export const checkName = (name) => {
	let valid = false;
	let message = '';
	const min = 3,
		max = 25;

	if (!isRequired(name)) {
		valid = false;
		message = 'Name cannot be blank';
	} else if (!isBetween(name.length, min, max)) {
		valid = false;
		message = `Name must be between ${min} and ${max} characters`;
	} else {
		valid = true;
	}
	return { valid, message };
};

export const checkUSN = (usn) => {
	let valid = false;
	let message = '';
	if (!isRequired(usn)) {
		valid = false;
		message = 'USN cannot be blank';
	} else if (!isUSNValid(usn)) {
		valid = false;
		message = 'USN is not valid';
	} else {
		valid = true;
	}
	return { valid, message };
};

export const checkSemester = (sem) => {
	let valid = false;
	let message = '';
	if (!isRequired(sem)) {
		valid = false;
		message = 'Semester cannot be blank';
	} else if (!isSemesterValid(sem)) {
		valid = false;
		message = 'Semester is not valid';
	} else {
		valid = true;
	}
	return { valid, message };
};

export const checkSection = (sec) => {
	let valid = false;
	let message = '';
	if (!isRequired(sec)) {
		valid = false;
		message = 'Section cannot be blank';
	} else if (!isSectionValid(sec)) {
		valid = false;
		message = 'Section is not valid';
	} else {
		valid = true;
	}
	return { valid, message };
};

export const checkEmail = (email) => {
	let valid = false;
	let message = '';
	if (!isRequired(email)) {
		valid = false;
		message = 'Email cannot be blank';
	} else if (!isEmailValid(email)) {
		valid = false;
		message = 'Email is not valid';
	} else {
		valid = true;
	}
	return { valid, message };
};

export const checkGitHub = (github) => {
	let valid = false;
	let message = '';
	if (!isRequired(github)) {
		valid = false;
		message = 'GitHub link cannot be blank';
	} else {
		valid = true;
	}
	return { valid, message };
};

export const checkLinkedin = (linkedin) => {
	let valid = false;
	let message = '';
	if (!isRequired(linkedin)) {
		valid = false;
		message = 'LinkedIn link cannot be blank';
	} else {
		valid = true;
	}
	return { valid, message };
};

export const checkDiscord = (discord) => {
	let valid = false;
	let message = '';
	if (!isRequired(discord)) {
		valid = false;
		message = 'Discord tag cannot be blank';
	} else {
		valid = true;
	}
	return { valid, message };
};

export const checkDomain = (domain) => {
	let valid = false;
	let message = '';
	if (!isRequired(domain)) {
		valid = false;
		message = 'You must select at least one domain';
	} else {
		valid = true;
	}
	return { valid, message };
};
