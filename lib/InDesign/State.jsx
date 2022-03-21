/*
 * A state (states define the display of the field in an exported PDF).
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var State = {


    /**
     * The unique ID of the State.
     * @type {number}
     * @readonly
     */
    id: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the State (a Button, MultiStateObject, CheckBox or RadioButton).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the State within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A collection of ellipses.
     * @type {Ovals}
     * @readonly
     */
    ovals: Ovals,


    /**
     * The spline items collection.
     * @type {SplineItems}
     * @readonly
     */
    splineItems: SplineItems,


    /**
     * The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
     * @type {PageItems}
     * @readonly
     */
    pageItems: PageItems,


    /**
     * A collection of rectangles.
     * @type {Rectangles}
     * @readonly
     */
    rectangles: Rectangles,


    /**
     * A collection of graphic lines.
     * @type {GraphicLines}
     * @readonly
     */
    graphicLines: GraphicLines,


    /**
     * A collection of text frames.
     * @type {TextFrames}
     * @readonly
     */
    textFrames: TextFrames,


    /**
     * A collection of polygons.
     * @type {Polygons}
     * @readonly
     */
    polygons: Polygons,


    /**
     * A collection of endnote text frames.
     * @type {EndnoteTextFrames}
     * @readonly
     */
    endnoteTextFrames: EndnoteTextFrames,


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
     * A collection of bitmap images in any bitmap file format (including TIFF, JPEG, or GIF).
     * @type {Images}
     * @readonly
     */
    images: Images,


    /**
     * A collection of imported graphics in any graphic file format (vector, metafile, or bitmap).
     * @type {Graphics}
     * @readonly
     */
    graphics: Graphics,


    /**
     * A collection of EPS files.
     * @type {EPSs}
     * @readonly
     */
    epss: EPSs,


    /**
     * A collection of WMF graphics.
     * @type {WMFs}
     * @readonly
     */
    wmfs: WMFs,


    /**
     * A collection of PICT graphics.
     * @type {PICTs}
     * @readonly
     */
    picts: PICTs,


    /**
     * A collection of PDF files.
     * @type {PDFs}
     * @readonly
     */
    pdfs: PDFs,


    /**
     * A collection of groups.
     * @type {Groups}
     * @readonly
     */
    groups: Groups,


    /**
     * EPSTexts
     * @type {EPSTexts}
     * @readonly
     */
    epstexts: EPSTexts,


    /**
     * A collection of SVG files.
     * @type {SVGs}
     * @readonly
     */
    svgs: SVGs,


    /**
     * The name of the State.
     * @type {string}
     */
    name: undefined,


    /**
     * If true, the state is active in the exported PDF.
     * @type {boolean}
     */
    active: undefined,


    /**
     * If true, the state is enabled in PDF documents.
     * @type {boolean}
     */
    enabled: undefined,


    /**
     * For a button, the type of user action that dictates the object's appearance. For a MultiStateObject, which has no user actions associated with states, this property is a numeric value uniquely identifying the state. Can return: StateTypes enumerator or Long Integer.
     * @type {varies=any}
     */
    statetype: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Releases this state's appearance as a page item, removing the state from its parent object.
     *
     * @return undefined
     */
    releaseAsObject: function () {
        
    },


    /**
     * Moves the state to a new position in its parent collection.
     *
     * @param {number} [newPosition] the index to move the state to in its parent collection
     * @return undefined
     */
    move: function (newPosition) {
        
    },


    /**
     * Adds page items to this state.
     *
     * @param {PageItem} [pageitems] One or more page items to add to this state.
     * @return undefined
     */
    addItemsToState: function (pageitems) {
        
    },


    /**
     * Deletes the State.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the State.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return State
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

