/*
 * Represents a file in the local file system in a platform-independent manner.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var File = {


    /**
     * The name of the file system.
     * @type {string}
     * @readonly
     */
    fs: undefined,


    /**
     * If true, the object refers to a file system alias or shortcut.
     * @type {boolean}
     * @readonly
     */
    alias: undefined,


    /**
     * The creation date of the referenced file, or null if the object does not refer to a file on disk.
     * @type {Date}
     * @readonly
     */
    created: Date,


    /**
     * A string containing a message describing the most recent file system error.
     * @type {string}
     */
    error: undefined,


    /**
     * If true, this object refers to a file or file-system alias that actually exists in the file system.
     * @type {boolean}
     * @readonly
     */
    exists: undefined,


    /**
     * The platform-specific full path name for the referenced file.
     * @type {string}
     * @readonly
     */
    fsName: undefined,


    /**
     * The full path name for the referenced file in URI notation.
     * @type {string}
     * @readonly
     */
    fullName: undefined,


    /**
     * The full path name for the referenced file in URI notation.
     * @type {string}
     * @readonly
     */
    absoluteURI: undefined,


    /**
     * The path name for the object in URI notation, relative to the current folder.
     * @type {string}
     * @readonly
     */
    relativeURI: undefined,


    /**
     * The date of the referenced file's last modification, or null if the object does not refer to a file on the disk.
     * @type {Date}
     * @readonly
     */
    modified: Date,


    /**
     * The file name portion of the absolute URI for the referenced file, without the path specification.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The localized name of the referenced file, without the path specification.
     * @type {string}
     * @readonly
     */
    displayName: undefined,


    /**
     * The path portion of the absolute URI for the referenced file, without the file name.
     * @type {string}
     * @readonly
     */
    path: undefined,


    /**
     * The Folder object for the folder that contains this file.
     * @type {Folder}
     * @readonly
     */
    parent: Folder,


    /**
     * The file type as a four-character string.
     * @type {string}
     * @readonly
     */
    type: undefined,


    /**
     * In Mac OS, the file creator as a four-character string. In Windows or UNIX, value is "????".
     * @type {string}
     * @readonly
     */
    creator: undefined,


    /**
     * When true, the file is not shown in the platform-specific file browser.
     * @type {boolean}
     */
    hidden: undefined,


    /**
     * When true, prevents the file from being altered or deleted.
     * @type {boolean}
     */
    readonly: undefined,


    /**
     * How line feed characters are written in the file system.
     * @type {string}
     */
    lineFeed: undefined,


    /**
     * The size of the file in bytes.
     * @type {number}
     */
    length: undefined,


    /**
     * Gets or sets the encoding for subsequent read/write operations.
     * @type {string}
     */
    encoding: undefined,


    /**
     * When true, a read attempt caused the current position to be at the end of the file, or the file is not open.
     * @type {boolean}
     * @readonly
     */
    eof: undefined,



    /**
     * Encodes a string as required by RFC 2396, and returns the encoded string.
     *
     * @param {string} [name] The string to encode.
     * @return string
     */
    encode: function (name) {
        
    },


    /**
     * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
     *
     * @param {string} [uri] The UTF-8 encoded string to decode.
     * @return string
     */
    decode: function (uri) {
        
    },


    /**
     * Reports whether a given encoding is available.
     *
     * @param {string} [name] The encoding name.
     * @return boolean
     */
    isEncodingAvailable: function (name) {
        
    },


    /**
     * Opens a dialog so the user can select one or more files to open.
     *
     * @param {string} [prompt] The prompt text, displayed if the dialog allows a prompt.
     * @param {any} [filter] A filter that limits the types of files displayed in the dialog. (default: null)
     * @param {boolean} [multiSelect] When true, the user can select multiple files and the return value is an array. (default: false)
     * @return File
     */
    openDialog: function (prompt, filter, multiSelect) {
        
    },


    /**
     * Opens a dialog so the user can select a file name to save to.
     *
     * @param {string} [prompt] The prompt text, displayed if the dialog allows a prompt.
     * @param {any} [filter] In Windows only, a filter that limits the types of files displayed in the dialog. (default: null)
     * @return File
     */
    saveDialog: function (prompt, filter) {
        
    },


    /**
     * Attempts to resolve the file-system alias or shortcut that this object refers to.
     *
     * @return File
     */
    resolve: function () {
        
    },


    /**
     * Renames the associated file.
     *
     * @param {string} [newName] The new file name, with no path information.
     * @return boolean
     */
    rename: function (newName) {
        
    },


    /**
     * Deletes the file associated with this object from disk immediately, without moving it to the system trash.
     *
     * @return boolean
     */
    remove: function () {
        
    },


    /**
     * Changes the path specification of the referenced file.
     *
     * @param {string} [path] A string containing the new path, absolute or relative to the current folder.
     * @return boolean
     */
    changePath: function (path) {
        
    },


    /**
     * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
     *
     * @param {string} [basePath] A base path in URI notation.
     * @return string
     */
    getRelativeURI: function (basePath) {
        
    },


    /**
     * Executes or opens this file using the appropriate application, as if it had been double-clicked in a file browser.
     *
     * @return boolean
     */
    execute: function () {
        
    },


    /**
     * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file or files, and creates new File objects to represent the selected files.
     *
     * @param {string} [prompt] A string containing the prompt text, if the dialog allows a prompt.
     * @param {any} [filter] A filter that limits the types of files displayed in the dialog. (default: null)
     * @param {boolean} [multiSelect] When true, the user can select multiple files and the return value is an array. (default: false)
     * @return File
     */
    openDlg: function (prompt, filter, multiSelect) {
        
    },


    /**
     * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file location to which to save information, and creates a new File object to represent the selected file.
     *
     * @param {string} [prompt] A string containing the prompt text, if the dialog allows a prompt.
     * @param {any} [filter] In Windows only, a filter that limits the types of files displayed in the dialog. (default: null)
     * @return File
     */
    saveDlg: function (prompt, filter) {
        
    },


    /**
     * Converts this object to a string.
     *
     * @return string
     */
    toString: function () {
        
    },


    /**
     * Creates and returns a serialized string representation of this object.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Makes this file a file-system alias or shortcut to the specified file.
     *
     * @param {string} [path] A string containing the path of the target file.
     * @return undefined
     */
    createAlias: function (path) {
        
    },


    /**
     * Opens the referenced file for subsequent read/write operations. The method resolves any aliases to find the file.
     *
     * @param {string} [mode] The read-write mode, a single-character string.
     * @param {string} [type] In Mac OS, the type of a newly created file, a 4-character string. Ignored in Windows and UNIX.
     * @param {string} [creator] In Mac OS, the creator of a newly created file, a 4-character string. Ignored in Windows and UNIX.
     * @return boolean
     */
    open: function (mode, type, creator) {
        
    },


    /**
     * Closes this open file.
     *
     * @return boolean
     */
    close: function () {
        
    },


    /**
     * Reads the contents of the file, starting at the current position.
     *
     * @param {number} [chars] An integer specifying the number of characters to read.
     * @return string
     */
    read: function (chars) {
        
    },


    /**
     * Reads a single text character from the file at the current position.
     *
     * @return string
     */
    readch: function () {
        
    },


    /**
     * Reads a single line of text from the file at the current position.
     *
     * @return string
     */
    readln: function () {
        
    },


    /**
     * Writes the specified text to the file at the current position.
     *
     * @param {string} [text] A text string to be written.
     * @return boolean
     */
    write: function (text) {
        
    },


    /**
     * Writes a string to the file at the current position and appends a line-feed sequence.
     *
     * @param {string} [text] A text string to be written.
     * @return boolean
     */
    writeln: function (text) {
        
    },


    /**
     * Seeks to a given position in the file.
     *
     * @param {number} [pos] The new current position in the file as an offset in bytes from the start, current position, or end, depending on the ;mode.
     * @param {number} [mode] The seek mode. (default: 0)
     * @return boolean
     */
    seek: function (pos, mode) {
        
    },


    /**
     * Retrieves the current position as a byte offset from the start of the file.
     *
     * @return number
     */
    tell: function () {
        
    },


    /**
     * Copies this object’s referenced file to the specified target location.
     *
     * @param {} [target] A string with the URI path to the target location, or a File object that references the target location.
     * @return boolean
     */
    copy: function (target) {
        
    },


};

