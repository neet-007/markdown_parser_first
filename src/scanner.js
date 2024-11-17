

class Scanner {

    /**
     *@param {string} source
     * */
    constructor(source) {
        /**@type {string}*/
        this.source = source;

        /**@type {number}*/
        this.start = 0;

        /**@type {number}*/
        this.current = 0;

        /**@type {number}*/
        this.line = 0;

        /**@type {Token[]}*/
        this.tokens = [];
    }

    scan() {
        while (!this.isAtEnd()) {
            this.start = this.current;
            this.scanToken();
        }

        this.tokens.push(new Token("", "", null, this.line));
        return this.tokens;
    }

    advance() {
        if (this.isAtEnd()) return "";
        return this.source[this.current++];
    }

    scanToken() {

    }

    /**@param {string} c*/
    match(c) {
        if (this.isAtEnd()) return false;
        if (this.source[this.current] === c) {
            this.current++;
            return true;
        }

        return false;
    }

    peak() {
        if (this.isAtEnd()) return "";
        return this.source[this.current];
    }

    isAtEnd() {
        return this.current >= this.source.length;
    }
}
