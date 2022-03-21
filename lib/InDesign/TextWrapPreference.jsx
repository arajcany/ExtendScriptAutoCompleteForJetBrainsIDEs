/*
 * Text wrap preferences.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var TextWrapPreference = {


    /**
     * The contour of the text wrap. Valid only when when text wrap type is contour.
     * @type {ContourOption}
     * @readonly
     */
    contourOptions: ContourOption,


    /**
     * If true, the text wrap path has been explicitly modified by the user.
     * @type {boolean}
     * @readonly
     */
    userModifiedWrap: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the TextWrapPreference (a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, Application, Document or ObjectStyle).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * A collection of preferences objects.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


    /**
     * A collection of paths.
     * @type {Paths}
     * @readonly
     */
    paths: Paths,


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
     * The minimum space between text and the edges of the wrapped object. The format for defining text wrap offset values depends on the text wrap type. If text wrap type is jump object text wrap, specify 2 values in the format [top, bottom]. If text wrap type is next column text wrap or contour, specify a single value. For bounding box text wrap, specify 4 values in the format in the format [top, left, bottom, right]. . Can return: Unit, Array of Units or NothingEnum enumerator.
     * @type {varies=any}
     */
    textWrapOffset: undefined,


    /**
     * If true, inverts the text wrap.
     * @type {boolean}
     */
    inverse: undefined,


    /**
     * If true, text wraps on the master spread apply to that spread only, and not to any pages the master spread has been applied to.
     * @type {boolean}
     */
    applyToMasterPageOnly: undefined,


    /**
     * Text wrap side options.
     * @type {TextWrapSideOptions}
     */
    textWrapSide: TextWrapSideOptions,


    /**
     * The text wrap mode.
     * @type {TextWrapModes}
     */
    textWrapMode: TextWrapModes,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the TextWrapPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TextWrapPreference
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

