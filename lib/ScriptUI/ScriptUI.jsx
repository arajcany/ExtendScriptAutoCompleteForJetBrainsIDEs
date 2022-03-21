/*
 * A global class containing central information about ScriptUI. Not instantiable.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\scriptui.xml
 * OMV Time: 
 * OMV Title: ScriptUI Classes
 */
var ScriptUI = {


    /**
     * The font constants defined by the host application.
     * @type {Object}
     * @readonly
     */
    applicationFonts: Object,


    /**
     * An object whose properties are the names of compatability modes supported by the host application.
     * @type {Object}
     * @readonly
     */
    compatibility: Object,


    /**
     * A string containing the internal version number of the ScriptUI module.
     * @type {String}
     * @readonly
     */
    coreVersion: String,


    /**
     * An object whose properties define attributes of the environment in which ScriptUI operates.
     * @type {Environment}
     * @readonly
     */
    environment: Environment,


    /**
     * An object whose properties and methods provide access to objects used in the ScriptUI event system.
     * @type {Events}
     * @readonly
     */
    events: Events,


    /**
     * A string containing the name of the UI component framework with which this version of ScriptUI is compatible.
     * @type {String}
     * @readonly
     */
    frameworkName: String,


    /**
     * A string containing the version number of the ScriptUI component framework
     * @type {Any}
     * @readonly
     */
    version: Any,


    /**
     * Collects the enumerated values that can be used in the alignment and alignChildren properties of controls and containers.
     * @type {String}
     * @readonly
     */
    Alignment: String,


    /**
     * Collects the enumerated values that can be used as the style argument to the ;ScriptUI.newFont() ;method.
     * @type {Object}
     * @readonly
     */
    FontStyle: Object,



    /**
     * Finds and returns the resource for a given text string from the host application's resource data.
     *
     * @param {String} [text] The text to match.
     * @return String
     */
    getResourceText: function (text) {
        
    },


    /**
     * Loads a new image from resources or disk files into an image object.
     *
     * @param {String} [normal] The resource name or the disk file path to the image used for the normal state.
     * @param {String} [disabled] The resource name, or the disk file path to the image used for the disabled state.
     * @param {String} [pressed] The resource name, or the file-system path to the image used for the pressed state.
     * @param {String} [rollover] The resource name, or the file-system path to the image used for the rollover state.
     * @return ScriptUIImage
     */
    newImage: function (normal, disabled, pressed, rollover) {
        
    },


    /**
     * Creates a new font object for use in text controls and titles.
     *
     * @param {String} [name] The font name, or the font family name.
     * @param {} [style] The font style; can be string, or one of the values of ;ScriptUI.FontStyle.
     * @param {Number} [size] The font size in points.
     * @return ScriptUIFont
     */
    newFont: function (name, style, size) {
        
    },


};

