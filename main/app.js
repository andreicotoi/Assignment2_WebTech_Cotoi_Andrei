function addTokens(input, tokens) {
    
    if (typeof input !== 'string') {
        throw 'Invalid input';
    }

    if (input.length < 6) {
        throw 'Input should have at least 6 characters';
    }

    tokens.forEach(element => {
        for (value of Object.values(element)) {
            if (typeof value !== "string") {
                throw 'Invalid array format';
            }
        }
    });

    if (!input.includes('...')) {
        return input;
    }
    else {
		tokens.forEach(element => {
			let key = Object.keys(element)[0];
			input = input.replace('...', '${' + element[key] + '}');
		});
		return input;
    }
}

addTokens('Subsemnatul ... ...', [{ceva: "Cotoi"}, {altceva: "Andrei"}]);

const app = {
    addTokens: addTokens
}

module.exports = app;