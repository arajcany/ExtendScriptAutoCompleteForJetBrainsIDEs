/*
 * Represents a  tabbed palette in the Adobe Bridge browser window.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var TabbedPalette = {


    /**
     * When type is script, the ScriptUI Window object to display.
     * @type {Object}
     * @readonly
     */
    content: Object,


    /**
     * The localized string to display as the palette title.
     * @type {String}
     */
    title: String,


    /**
     * A non-localized unique identifier for the palette.
     * @type {String}
     */
    id: String,


    /**
     * 
     * @type {Boolean}
     */
    showMenuItem: Boolean,


    /**
     * The type of content displayed in the palette; script (ScriptUI) or web (HTML).
     * @type {String}
     * @readonly
     */
    type: String,


    /**
     * When type is web, the path to the page to display.
     * @type {String}
     */
    url: String,


    /**
     * When true, this palette is visible, when false it is hidden.
     * @type {Boolean}
     */
    visible: Boolean,



    /**
     * Removes this palette from the list of available palettes and destroys it.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Moves this palette to a specific docking location in the browser.
     *
     * @param {String} [paletteColumn] The horizontal location of the palette in the browser.
     * @param {} [paletteRow] The vertical location of the palette in the browser.
     * @return undefined
     */
    setLocation: function (paletteColumn, paletteRow) {
        
    },


};

