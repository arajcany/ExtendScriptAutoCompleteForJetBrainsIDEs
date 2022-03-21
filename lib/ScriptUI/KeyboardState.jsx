/*
 * Reports the active state of the keyboard.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\scriptui.xml
 * OMV Time: 
 * OMV Title: ScriptUI Classes
 */
var KeyboardState = {


    /**
     * A string containing the name of the currently pressed key, such as "a", or an empty string.
     * @type {String}
     * @readonly
     */
    keyName: String,


    /**
     * True if the Shift key is pressed.
     * @type {Boolean}
     * @readonly
     */
    shiftKey: Boolean,


    /**
     * True if the Ctrl key is pressed.
     * @type {Boolean}
     * @readonly
     */
    ctrlKey: Boolean,


    /**
     * True if the Alt or Option key is pressed.
     * @type {Boolean}
     * @readonly
     */
    altKey: Boolean,


    /**
     * True if the Cmd key (in Mac OS) or Windows key (in Windows) is pressed.
     * @type {Boolean}
     * @readonly
     */
    metaKey: Boolean,




};

