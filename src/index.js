import * as fs from 'fs';

/**
 * Reads a file asynchronously and returns its contents.
 * 
 * @param {string} path - The file path.
 * @param {BufferEncoding} encoding - The encoding to use (default is 'utf8').
 * @returns {Promise<string | null>} - The file content as a string, or null if there's an error.
 */
export function readFile(path, encoding = "utf8") {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if (err) {
                console.error(err);
                resolve(null);
                return;
            }
            resolve(data);
        });
    });
}
