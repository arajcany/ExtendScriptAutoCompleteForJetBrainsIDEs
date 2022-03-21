/*
 * A layout window.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var LayoutWindow = {


    /**
     * Dispatched after the active selection changes. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_SELECTION_CHANGED: afterSelectionChanged,


    /**
     * Dispatched after an attribute on the active selection changes. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_SELECTION_ATTRIBUTE_CHANGED: afterSelectionAttributeChanged,


    /**
     * Dispatched before the LayoutWindow becomes inactive. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_DEACTIVATE: beforeDeactivate,


    /**
     * Dispatched after the LayoutWindow becomes active. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_ACTIVATE: afterActivate,


    /**
     * Dispatched when the value of a property changes on this LayoutWindow. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_ATTRIBUTE_CHANGED: afterAttributeChanged,


    /**
     * Dispatched after a LayoutWindow is opened. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_OPEN: afterOpen,


    /**
     * Dispatched before a LayoutWindow is closed. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_CLOSE: beforeClose,


    /**
     * Dispatched when a LayoutWindow is closing. Since the close has been committed, it can no longer be canceled. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_CLOSE: afterClose,


    /**
     * The name of the LayoutWindow.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the LayoutWindow (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the LayoutWindow within its containing object.
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
     * If true, display a simulation of overprinting.
     * @type {boolean}
     */
    overprintPreview: undefined,


    /**
     * The profile used for proofing colors.
     * @type {string}
     */
    proofingProfile: undefined,


    /**
     * The method of proofing colors.
     * @type {ProofingType}
     */
    proofingType: ProofingType,


    /**
     * If true, simulates the dark gray produced by many printers in place of solid black, according to the proofing profile. Note: Valid only when proofing type is custom.
     * @type {boolean}
     */
    simulateInkBlack: undefined,


    /**
     * If true, simulates the dingy white of real paper, according to the proofing profile. Note: Valid only when proofing type is custom.
     * @type {boolean}
     */
    simulatePaperWhite: undefined,


    /**
     * If true, leaves color values unchanged for CMYK objects without embedded profiles and native objects such as line art or type. Note: Converts images whose profiles differ from the profile of the simulated device. Valid only when proofing type is custom.
     * @type {boolean}
     */
    preserveColorNumbers: undefined,


    /**
     * The display performance preferences override for the view.
     * @type {ViewDisplaySettings}
     */
    viewDisplaySetting: ViewDisplaySettings,


    /**
     * The default anchor point around which to transform objects. Can return: AnchorPoint enumerator or Array of 2 Units.
     * @type {varies=any}
     */
    transformReferencePoint: undefined,


    /**
     * The active layer. Can also accept: String.
     * @type {Layer}
     */
    activeLayer: Layer,


    /**
     * The size (as a percentage) to which to enlarge or reduce the view of the document. (Range: 5 to 4000)
     * @type {number}
     */
    zoomPercentage: undefined,


    /**
     * The front-most spread. Can return: Spread or MasterSpread.
     * @type {varies=any}
     */
    activeSpread: undefined,


    /**
     * The front-most page.
     * @type {Page}
     */
    activePage: Page,


    /**
     * The screen mode for layout view.
     * @type {ScreenModeOptions}
     */
    screenMode: ScreenModeOptions,


    /**
     * The selected object(s). Can also accept: Object or NothingEnum enumerator.
     * @type {Object}
     */
    selection: Object,


    /**
     * The bounds of the window (specified in pixels) in the form [top, left, bottom, right].
     * @type {number}
     */
    bounds: undefined,


    /**
     * The key object of the selection. Can also accept: NothingEnum enumerator.
     * @type {PageItem}
     */
    selectionKeyObject: PageItem,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Magnifies or reduces the window to the specified display size.
     *
     * @param {ZoomOptions} [given] The display size.
     * @return undefined
     */
    zoom: function (given) {
        
    },


    /**
     * Selects the specified object(s).
     *
     * @param {varies=any} [selectableItems] The objects to select. Can accept: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator.
     * @param {SelectionOptions} [existingSelection] The selection status of the LayoutWindow in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (selectableItems, existingSelection) {
        
    },


    /**
     * Closes the LayoutWindow.
     *
     * @return undefined
     */
    close: function () {
        
    },


    /**
     * Maximizes the window.
     *
     * @return undefined
     */
    maximize: function () {
        
    },


    /**
     * Minimizes the window.
     *
     * @return undefined
     */
    minimize: function () {
        
    },


    /**
     * Restores the window.
     *
     * @return undefined
     */
    restore: function () {
        
    },


    /**
     * Brings the object to the front.
     *
     * @return undefined
     */
    bringToFront: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the LayoutWindow.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return LayoutWindow
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

