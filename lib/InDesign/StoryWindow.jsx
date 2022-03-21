/*
 * A story window.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var StoryWindow = {


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
     * Dispatched before the StoryWindow becomes inactive. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_DEACTIVATE: beforeDeactivate,


    /**
     * Dispatched after the StoryWindow becomes active. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_ACTIVATE: afterActivate,


    /**
     * Dispatched when the value of a property changes on this StoryWindow. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_ATTRIBUTE_CHANGED: afterAttributeChanged,


    /**
     * Dispatched after a StoryWindow is opened. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_OPEN: afterOpen,


    /**
     * Dispatched before a StoryWindow is closed. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_CLOSE: beforeClose,


    /**
     * Dispatched when a StoryWindow is closing. Since the close has been committed, it can no longer be canceled. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_CLOSE: afterClose,


    /**
     * The name of the StoryWindow.
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
     * The parent of the StoryWindow (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the StoryWindow within its containing object.
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
     * Selects the specified object(s).
     *
     * @param {varies=any} [selectableItems] The objects to select. Can accept: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator.
     * @param {SelectionOptions} [existingSelection] The selection status of the StoryWindow in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (selectableItems, existingSelection) {
        
    },


    /**
     * Closes the StoryWindow.
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
     * Generates a string which, if executed, will return the StoryWindow.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return StoryWindow
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

