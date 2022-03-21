/*
 * Encapsulates the qualities of a font used to draw text into a control.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\scriptui.xml
 * OMV Time: 
 * OMV Title: ScriptUI Classes
 */
var ScriptUIFont = {


    /**
     * The font family name.
     * @type {String}
     * @readonly
     */
    family: String,


    /**
     * The complete font name, consisting of the family and style, if specified.
     * @type {String}
     * @readonly
     */
    name: String,


    /**
     * The font point size.
     * @type {Number}
     * @readonly
     */
    size: Number,


    /**
     * The font style. One of the constants in ;ScriptUIGraphics.FontStyle.
     * @type {Object}
     * @readonly
     */
    style: Object,


    /**
     * The name of a substitution font, a fallback font to substitute for this font if the requested font family or style is not available.
     * @type {String}
     * @readonly
     */
    substitute: String,




};

