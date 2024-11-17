export { };

declare global {
    // The Tokens object with constant string values
    const Tokens: {
        TAB: "\u0009", // Unicode U+0009 (Tab character)
        SPACE: "\u0020", // Unicode U+0020 (Space character)
        LINE_FEED: "\u000A", // Unicode U+000A (Line feed)
        CARRIAGE_RETURN: "\u000D", // Unicode U+000D (Carriage return)
        LINE_ENDING: "\u000A\u000D", // Line feed + Carriage return (or "\u000A" or "\u000D")
        BLANK_LINE: "", // Will be handled as a logical construct (empty line or line of spaces/tabs)
        ASCII_CONTROL: string[], // U+0000 - U+001F (Array of ASCII control characters)
        DELETE: "\u007F", // U+007F (Delete character)
        ASCII_PUNCTUATION: string[], // Array of ASCII punctuation characters
        UNICODE_PUNCTUATION: RegExp, // Unicode punctuation match regex (Punctuation or Symbol characters)
        REPLACEMENT_CHARACTER: "\uFFFD", // Unicode replacement character
        INSECURE_CHARACTER: "\u0000", // Insecure character
        BACK_SLASH: "\\", // Backslash character
    };

    // TokenType is now automatically inferred from the Tokens object
    type TokenType = typeof Tokens[keyof typeof Tokens];
}
