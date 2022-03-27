/*
 * Represents an object-inspection panel, a special type of tabbed palette that displays contextual information for a selected thumbnail.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var InspectorPanel = {


    /**
     * Whether to display this panel.
     * @type {Boolean}
     */
    displayInInspector: Boolean,


    /**
     * The localized title string to display in the panel's tab header.
     * @type {String}
     * @readonly
     */
    displayTitle: String,


    /**
     * The unique menu identifier of a script-defined flyout menu for this panel.
     * @type {String}
     * @readonly
     */
    flyoutMenuId: String,


    /**
     * When true, the panel is minimized or iconified.
     * @type {Boolean}
     */
    minimized: Boolean,


    /**
     * A collection of panelettes contained in this panel, in display order.
     * @type {Array}
     * @readonly
     */
    panelettes: Array,


    /**
     * The preferred default position of this tabbed panel in the Inspector, relative to other panels.
     * @type {Number}
     */
    sortPosition: Number,


    /**
     * The title text of this panel, displayed in the tab header.
     * @type {String}
     */
    title: String,


    /**
     * When true, the majority of this panel is visible on the screen.
     * @type {Boolean}
     * @readonly
     */
    visible: Boolean,


    /**
     * When true, this panel occupies the entire available horizontal space.
     * @type {Boolean}
     */
    wide: Boolean,



    /**
     * Registers a script-defined panelette as a member of this panel, adding it to panelettes list.
     *
     * @param {Object} [panelette] The panelette object.
     * @return Boolean
     */
    registerPanelette: function (panelette) {
        
    },


    /**
     * Removes a member panelette from this panel.
     *
     * @param {Object} [panelette] The panelette object.
     * @return undefined
     */
    unregisterPanelette: function (panelette) {
        
    },


};

