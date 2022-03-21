/*
 * The link options for a linked Page Item.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var LinkedPageItemOption = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the LinkedPageItemOption (a Application, Document, PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame or EndnoteTextFrame).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * A collection of events.
     * @type {Events}
     * @readonly
     */
    events: Events,


    /**
     * A collection of event listeners.
     * @type {EventListeners}
     * @readonly
     */
    eventListeners: EventListeners,


    /**
     * If true, the linked Page Item will be updated while saving.
     * @type {boolean}
     */
    updateLinkWhileSaving: undefined,


    /**
     * If true, a warning will be shown if the update link operation will override local edits.
     * @type {boolean}
     */
    warnOnUpdateOfEditedPageItem: undefined,


    /**
     * If true, size and shape edits will be preserved during update.
     * @type {boolean}
     */
    preserveSizeAndShape: undefined,


    /**
     * If true, appearance edits will be preserved during update.
     * @type {boolean}
     */
    preserveAppearance: undefined,


    /**
     * If true, interactivity edits will be preserved during update.
     * @type {boolean}
     */
    preserveInteractivity: undefined,


    /**
     * If true, frame content edits will be preserved during update.
     * @type {boolean}
     */
    preserveFrameContent: undefined,


    /**
     * If true, text wrap, hyperLinks, text frame options, object export settings will be preserved during update.
     * @type {boolean}
     */
    preserveOthers: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the LinkedPageItemOption.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return LinkedPageItemOption
     */
    getElements: function () {
        
    },


    /**
     * Retrieves the object specifier.
     *
     * @return string
     */
    toSpecifier: function () {
        
    },


    /**
     * Adds an event listener.
     *
     * @param {string} [eventType] The event type.
     * @param {varies=any} [handler] The event handler. Can accept: File or JavaScript Function.
     * @param {boolean} [captures] This parameter is obsolete. (Optional) (default: false)
     * @return EventListener
     */
    addEventListener: function (eventType, handler, captures) {
        
    },


    /**
     * Removes the event listener.
     *
     * @param {string} [eventType] The registered event type.
     * @param {varies=any} [handler] The registered event handler. Can accept: File or JavaScript Function.
     * @param {boolean} [captures] This parameter is obsolete. (Optional) (default: false)
     * @return boolean
     */
    removeEventListener: function (eventType, handler, captures) {
        
    },


};

