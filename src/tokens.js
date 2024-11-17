/**
 * Represents a token with a specific type, lexeme, literal value, and line number.
 */
class Token {
    /**
     * @param {string} type - The type of the token.
     * @param {string} lexeme - The lexeme representing the actual token text.
     * @param {*} literal - The literal value of the token, if applicable.
     * @param {number} line - The line number where the token appears.
     */
    constructor(type, lexeme, literal, line) {
        /** @type {string} */
        this.type = type;

        /** @type {string} */
        this.lexeme = lexeme;

        /** @type {*} */
        this.literal = literal;

        /** @type {number} */
        this.line = line;
    }
}
