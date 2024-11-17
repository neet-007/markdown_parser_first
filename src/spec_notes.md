
# Spec notes

## General Document Rules
- Any sequence of characters is a valid CommonMark document.
- **Character:** A Unicode code point. All code points count as characters for the purposes of this specification.
- **Encoding:** 
  - This spec does not specify an encoding but considers lines as composed of characters rather than bytes.
  - Parsers may be limited to a specific encoding.

## Lines and Line Endings
- **Line:**
  - A sequence of zero or more characters, excluding:
    - Line feed (U+000A)
    - Carriage return (U+000D)
  - Ends with either:
    - A line ending
    - The end of the file
- **Line Ending:**
  - A line feed (U+000A)
  - A carriage return (U+000D) not followed by a line feed
  - A carriage return followed by a line feed
- **Blank Line:** 
  - Contains no characters, or
  - Contains only spaces (U+0020) or tabs (U+0009)

---

## Character Classes
### Unicode Whitespace
- Any character in the Unicode **Zs general category**, or:
  - Tab (U+0009)
  - Line feed (U+000A)
  - Form feed (U+000C)
  - Carriage return (U+000D)
- **Unicode Whitespace:** A sequence of one or more Unicode whitespace characters.

### Specific Characters
- **Tab:** U+0009
- **Space:** U+0020

### ASCII Control Characters
- Characters in these ranges:
  - U+0000–U+001F
  - U+007F

### ASCII Punctuation Characters
- Includes the following characters:
  - `!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/` (U+0021–U+002F)
  - `:`, `;`, `<`, `=`, `>`, `?`, `@` (U+003A–U+0040)
  - `[`, `\`, `]`, `^`, `_`, `` ` `` (U+005B–U+0060)
  - `{`, `|`, `}`, `~` (U+007B–U+007E)

### Unicode Punctuation Characters
- Characters in the Unicode **P (punctuation)** or **S (symbol)** general categories.

---

## Entity References
- **Structure:** 
- `&` + any valid HTML5 entity name + `;`
- **Reference Document:** 
- See [WHATWG Entities](https://html.spec.whatwg.org/entities.json) for valid entity references and their code points.

---

## Numeric Character References

### Decimal Numeric References
- Structure: `&#` + 1–7 Arabic digits + `;`
- Parsed as: Corresponding Unicode character
- **Invalid Cases:**
- Invalid Unicode code points → REPLACEMENT CHARACTER (U+FFFD)
- Code point U+0000 → REPLACEMENT CHARACTER (U+FFFD) (for security reasons)

### Hexadecimal Numeric References
- Structure: `&#` + either `X` or `x` + 1–6 hexadecimal digits + `;`
- Parsed as: Corresponding Unicode character (specified using a hexadecimal numeral).

## Block Types
- **Blocks** are of two types:
  1. **Container Blocks:** Contain nested blocks.
  2. **Leaf Blocks:** Contain inline content.

## Precedence of Blocks
- Blocks with **nested blocks** have higher precedence than blocks with **inline content**.

---

## Leaf Blocks

### Thematic breaks
A line consisting of optionally up to three spaces of indentation, followed by a sequence  
of three or more matching -, _, or * characters, each followed optionally by any number  
of spaces or tabs,

### ATX headings
An ATX heading consists of a string of characters, parsed as inline content, between an  
opening sequence of 1–6 unescaped # characters and an optional closing sequence of any  
number of unescaped # characters. The opening sequence of # characters must be followed  
by spaces or tabs, or by the end of line. The optional closing sequence of #s must be  
preceded by spaces or tabs and may be followed by spaces or tabs only. The opening #  
character may be preceded by up to three spaces of indentation. The raw contents of  
the heading are stripped of leading and trailing space or tabs before being parsed  
as inline content. The heading level is equal to the number of # characters in the  
opening sequence.

### Setext headings

### Indented code blocks

### Fenced code blocks

### HTML blocks

### Link reference definitions

### Paragraphs

### Blank lines
