/*
 * A layer in a PSD image or PDF file.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var GraphicLayer = {


    /**
     * The name of the GraphicLayer.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * Returns the visibility setting set for the layer before the graphic file was imported. Note: Must occur in the script before overriding the visibility state with a current visibility statement.
     * @type {boolean}
     * @readonly
     */
    originalVisibility: undefined,


    /**
     * If true, the layer is a separator layer.
     * @type {boolean}
     * @readonly
     */
    separatorLayer: undefined,


    /**
     * If true, the layer is an adjustment layer. Note: Must occur in the script before overriding the visibility state of the layer with a current visibility statement.
     * @type {boolean}
     * @readonly
     */
    adjustmentLayer: undefined,


    /**
     * If true, layer effects have been applied to the layer. Note: Must occur in the script before overriding the visibility state of the layer with a current visibility statement.
     * @type {boolean}
     * @readonly
     */
    fxLayer: undefined,


    /**
     * If true, the GraphicLayer is locked.
     * @type {boolean}
     * @readonly
     */
    locked: undefined,


    /**
     * If true, the layer is a section divider layer.
     * @type {boolean}
     * @readonly
     */
    sectionDividerLayer: undefined,


    /**
     * If true, the layer has a view state.
     * @type {boolean}
     * @readonly
     */
    hasViewState: undefined,


    /**
     * If true, the view state is on.
     * @type {boolean}
     * @readonly
     */
    viewState: undefined,


    /**
     * If true, the layer has an export state.
     * @type {boolean}
     * @readonly
     */
    hasExportState: undefined,


    /**
     * If true, the export state is on.
     * @type {boolean}
     * @readonly
     */
    exportState: undefined,


    /**
     * If true, the layer has a print state.
     * @type {boolean}
     * @readonly
     */
    hasPrintState: undefined,


    /**
     * If true, the print state is on.
     * @type {boolean}
     * @readonly
     */
    printState: undefined,


    /**
     * The unique ID of the GraphicLayer.
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
     * The parent of the GraphicLayer (a GraphicLayerOption or GraphicLayer).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the GraphicLayer within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


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
     * A collection of graphic layers.
     * @type {GraphicLayers}
     * @readonly
     */
    graphicLayers: GraphicLayers,


    /**
     * If true, the layer is visible in the document.
     * @type {boolean}
     */
    currentVisibility: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the GraphicLayer.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return GraphicLayer
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

