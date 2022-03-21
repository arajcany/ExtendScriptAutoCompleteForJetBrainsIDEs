/*
 * The $ object provides a number of debugging facilities and informational methods.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var $ = {


    /**
     * The most recent run-time error information.
     * @type {Error}
     */
    error: Error,


    /**
     * The version number of the ExtendScript engine.
     * @type {string}
     * @readonly
     */
    version: undefined,


    /**
     * The ExtendScript build information.
     * @type {string}
     * @readonly
     */
    build: undefined,


    /**
     * The ExtendScript build date.
     * @type {Date}
     * @readonly
     */
    buildDate: Date,


    /**
     * A reference to the global object, which contains the JavaScript global namespace.
     * @type {Object}
     * @readonly
     */
    global: Object,


    /**
     * The current stack trace.
     * @type {string}
     * @readonly
     */
    stack: undefined,


    /**
     * The current debugging level, which enables or disables the JavaScript debugger.
     * @type {number}
     */
    level: undefined,


    /**
     * Gets or sets low-level debug output flags.
     * @type {number}
     */
    flags: undefined,


    /**
     * Sets or clears strict mode for object modification.
     * @type {any}
     */
    strict: any,


    /**
     * Gets or sets the current locale.
     * @type {string}
     */
    locale: undefined,


    /**
     * Set to true to enable the extended localization features of the built-in toString() method.
     * @type {boolean}
     */
    localize: undefined,


    /**
     * The character used as the decimal point character in formatted numeric output.
     * @type {string}
     */
    decimalPoint: undefined,


    /**
     * The ExtendScript memory cache size, in bytes.
     * @type {number}
     */
    memCache: undefined,


    /**
     * An array of objects containing information about the display screens attached to your computer.
     * @type {Object}
     * @readonly
     */
    screens: Object,


    /**
     * The current operating system version information.
     * @type {string}
     * @readonly
     */
    os: undefined,


    /**
     * The file name of the current script.
     * @type {string}
     * @readonly
     */
    fileName: undefined,


    /**
     * The current line number of the currently executing script.
     * @type {number}
     * @readonly
     */
    line: undefined,


    /**
     * A high-resolution timer, measuring the time in microseconds. The timer starts when ExtendScript is
						initialized during the application startup sequence. Every read access resets the timer to Zero.
     * @type {number}
     * @readonly
     */
    hiresTimer: undefined,


    /**
     * The name of the current ExtendScript engine, if set.
     * @type {string}
     * @readonly
     */
    engineName: undefined,


    /**
     * The path for include files for the current script.
     * @type {string}
     * @readonly
     */
    includePath: undefined,



    /**
     * Shows an About box for the ExtendScript component, and returns the text for the box.
     *
     * @return string
     */
    about: function () {
        
    },


    /**
     * Converts this object to a string.
     *
     * @return string
     */
    toString: function () {
        
    },


    /**
     * Prints text to the Console.
     *
     * @param {any} [text] The text to print. All arguments are concatenated.
     * @return undefined
     */
    write: function (text) {
        
    },


    /**
     * Prints text to the Console, and adds a newline character.
     *
     * @param {any} [text] The text to print. All arguments are concatenated.
     * @return undefined
     */
    writeln: function (text) {
        
    },


    /**
     * Breaks execution at the current position.
     *
     * @param {any} [condition] A string containing a JavaScript statement to be used as a condition. If the statement evaluates to true or nonzero when this point is reached, execution stops.
     * @return undefined
     */
    bp: function (condition) {
        
    },


    /**
     * Retrieves the value of an environment variable.
     *
     * @param {string} [name] The name of the variable.
     * @return string
     */
    getenv: function (name) {
        
    },


    /**
     * Sets the value of an environment variable.
     *
     * @param {string} [name] The name of the variable.
     * @param {string} [value] The value of the variable.
     * @return undefined
     */
    setenv: function (name, value) {
        
    },


    /**
     * Suspends the calling thread for a number of milliseconds.
     *
     * @param {number} [msecs] Number of milliseconds to sleep.
     * @return undefined
     */
    sleep: function (msecs) {
        
    },


    /**
     * Invokes the platform-specific color selection dialog, and returns the selected color.
     *
     * @param {number} [color] The color to be preselected in the dialog, as 0xRRGGBB, or -1 for the platform default.
     * @return number
     */
    colorPicker: function (color) {
        
    },


    /**
     * Loads and evaluates a file.
     *
     * @param {File} [file] The file to load.
     * @param {number} [timeout] An optional timeout in milliseconds. (default: 10000)
     * @return any
     */
    evalFile: function (file, timeout) {
        
    },


    /**
     * Initiates garbage collection in the ExtendScript engine.
     *
     * @return undefined
     */
    gc: function () {
        
    },


};

