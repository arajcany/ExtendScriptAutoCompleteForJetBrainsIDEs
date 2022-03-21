/*
 * Creates a TCP/IP connection, or establishes a TCP/IP server.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var Socket = {


    /**
     * The name of the remote computer when a connection is established.
     * @type {string}
     * @readonly
     */
    host: undefined,


    /**
     * Sets or retrieves the name of the encoding used to transmit data.
     * @type {string}
     */
    encoding: undefined,


    /**
     * A message describing the most recent error. Setting this value clears any error message.
     * @type {string}
     */
    error: undefined,


    /**
     * When true, the receive buffer is empty.
     * @type {boolean}
     * @readonly
     */
    eof: undefined,


    /**
     * When true, the connection is active.
     * @type {boolean}
     * @readonly
     */
    connected: undefined,


    /**
     * The timeout in seconds to be applied to read or write operations.
     * @type {number}
     */
    timeout: 10,



    /**
     * Opens the connection for subsequent read/write operations.
     *
     * @param {string} [host] The server to connect to.
     * @param {string} [encoding] The encoding to be used for the connection (default: ASCII)
     * @return boolean
     */
    open: function (host, encoding) {
        
    },


    /**
     * Instructs the object to start listening for an incoming connection.
     *
     * @param {number} [port] The TCP/IP port number to listen on.
     * @param {string} [encoding] The encoding to be used for the connection (default: ASCII)
     * @return boolean
     */
    listen: function (port, encoding) {
        
    },


    /**
     * Terminates the open connection.
     *
     * @return boolean
     */
    close: function () {
        
    },


    /**
     * Reads up to the specified number of characters from the connection. CR characters are ignored unless the encoding is set to "BINARY".
     *
     * @param {number} [count] The number of characters to read.
     * @return string
     */
    read: function (count) {
        
    },


    /**
     * Reads one line of text up to the next line feed.
     *
     * @return string
     */
    readln: function () {
        
    },


    /**
     * Concatenates all arguments into a single string and writes that string to the connection.
     *
     * @param {string} [text] Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
     * @return boolean
     */
    write: function (text) {
        
    },


    /**
     * Concatenates all arguments into a single string, appends a LF character, and writes that string to the connection.
     *
     * @param {string} [text] Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
     * @return boolean
     */
    writeln: function (text) {
        
    },


    /**
     * Checks a listening object for a new incoming connection.
     *
     * @return Socket
     */
    poll: function () {
        
    },


};

