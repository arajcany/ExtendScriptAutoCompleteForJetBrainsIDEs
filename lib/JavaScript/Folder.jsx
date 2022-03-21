/*
 * Represents a file-system folder or directory in a platform-independent manner.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var Folder = {


    /**
     * The name of the current file system.
     * @type {string}
     * @readonly
     */
    fs: undefined,


    /**
     * A Folder object for the current folder.
     * @type {Folder}
     */
    current: Folder,


    /**
     * A Folder object for the folder containing the executable image of the running application.
     * @type {Folder}
     * @readonly
     */
    startup: Folder,


    /**
     * In Mac OS, a Folder object for the folder containing the bundle of the running application.
     * @type {Folder}
     * @readonly
     */
    appPackage: Folder,


    /**
     * A Folder object for the folder containing the operating system files.
     * @type {Folder}
     * @readonly
     */
    system: Folder,


    /**
     * A Folder object for the folder containing deleted items. On Windows, the trash folder is a virtual
								   folder containing a database; therefore, the property value is null on Windows.
     * @type {Folder}
     * @readonly
     */
    trash: Folder,


    /**
     * A Folder object for the default folder for temporary files.
     * @type {Folder}
     * @readonly
     */
    temp: Folder,


    /**
     * A Folder object for the folder containing the user's application data.
     * @type {Folder}
     * @readonly
     */
    userData: Folder,


    /**
     * The folder containing the application data for all users.
     * @type {Folder}
     * @readonly
     */
    appData: Folder,


    /**
     * A Folder object for the folder containing common files for all programs installed by the user.
     * @type {Folder}
     * @readonly
     */
    commonFiles: Folder,


    /**
     * A folder pointing to the user's My Documents folder.
     * @type {Folder}
     * @readonly
     */
    myDocuments: Folder,


    /**
     * A Folder object for the folder that contains the user’s desktop.
     * @type {Folder}
     * @readonly
     */
    desktop: Folder,


    /**
     * When true, the object refers to a file system alias or shortcut.
     * @type {boolean}
     * @readonly
     */
    alias: undefined,


    /**
     * The creation date of the referenced folder, or null if the object does not refer to a folder on disk.
     * @type {Date}
     * @readonly
     */
    created: Date,


    /**
     * A message describing the most recent file system error.
     * @type {string}
     */
    error: undefined,


    /**
     * When true, this object refers to a folder that currently exists in the file system.
     * @type {boolean}
     * @readonly
     */
    exists: undefined,


    /**
     * The platform-specific name of the referenced folder as a full path name.
     * @type {string}
     * @readonly
     */
    fsName: undefined,


    /**
     * The full path name for the referenced folder in URI notation. .
     * @type {string}
     * @readonly
     */
    fullName: undefined,


    /**
     * The full path name for the referenced folder in URI notation.
     * @type {string}
     * @readonly
     */
    absoluteURI: undefined,


    /**
     * The path name for the referenced folder in URI notation, relative to the current folder.
     * @type {string}
     * @readonly
     */
    relativeURI: undefined,


    /**
     * The date of the referenced folder's last modification, or null if the object does not refer to a folder on disk.
     * @type {Date}
     * @readonly
     */
    modified: Date,


    /**
     * The folder name portion of the absolute URI for the referenced file, without the path specification.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The localized name portion of the absolute URI for the referenced folder, without the path specification.
     * @type {string}
     * @readonly
     */
    displayName: undefined,


    /**
     * The path portion of the object absolute URI for the referenced file, without the folder name.
     * @type {string}
     * @readonly
     */
    path: undefined,


    /**
     * TThe Folder object for the folder that contains this folder, or null if this object refers to the root folder of a volume.
     * @type {Folder}
     * @readonly
     */
    parent: Folder,



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
     * @param {string} [uri] The UTF-8 string to decode.
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
     * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
     *
     * @param {string} [prompt] The prompt text, if the dialog allows a prompt.
     * @return Folder
     */
    selectDialog: function (prompt) {
        
    },


    /**
     * Attempts to resolve the file-system alias or shortcut that this object refers to.
     *
     * @return Folder
     */
    resolve: function () {
        
    },


    /**
     * Renames the associated folder.
     *
     * @param {string} [newName] The new folder name, with no path information.
     * @return boolean
     */
    rename: function (newName) {
        
    },


    /**
     * Deletes the folder associated with this object from disk immediately, without moving it to the system trash.
     *
     * @return boolean
     */
    remove: function () {
        
    },


    /**
     * Changes the path specification of the referenced folder.
     *
     * @param {string} [path] A string containing the new path, absolute or relative to the current folder.
     * @return boolean
     */
    changePath: function (path) {
        
    },


    /**
     * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
     *
     * @param {string} [basePath] A base path in URI notation. (default: .)
     * @return string
     */
    getRelativeURI: function (basePath) {
        
    },


    /**
     * Opens this folder in the platform-specific file browser (as if it had been double-clicked in the file browser).
     *
     * @return boolean
     */
    execute: function () {
        
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
     * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
     *
     * @param {string} [prompt] The prompt text, if the dialog allows a prompt.
     * @return Folder
     */
    selectDlg: function (prompt) {
        
    },


    /**
     * Retrieves the contents of this folder, filtered by the supplied mask.
     *
     * @param {any} [mask] A search mask for file names, specified as a string or a function.
     * @return Array
     */
    getFiles: function (mask) {
        
    },


    /**
     * Creates a folder at the location given by this object's ;path ;property.
     *
     * @return boolean
     */
    create: function () {
        
    },


};

