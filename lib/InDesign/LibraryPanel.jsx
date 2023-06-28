/*
 * Library panel
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var LibraryPanel = {


    /**
     * The library displayed in this LibraryPanel
     * @type {Library}
     * @readonly
     */
    associatedLibrary: Library,


    /**
     * The name of the LibraryPanel.
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
     * The parent of the LibraryPanel (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the LibraryPanel within its containing object.
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
     * LibraryPanel view
     * @type {LibraryPanelViews}
     */
    view: LibraryPanelViews,


    /**
     * The sort order of the assets in the LibraryPanel
     * @type {SortAssets}
     */
    sortOrder: SortAssets,


    /**
     * The selected object(s). Can also accept: Object or NothingEnum enumerator.
     * @type {Object}
     */
    selection: Object,


    /**
     * If true, the panel is visible.
     * @type {boolean}
     */
    visible: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Show all assets
     *
     * @return undefined
     */
    showAll: function () {
        
    },


    /**
     * Selects the specified object(s).
     *
     * @param {varies=any} [selectableItems] The objects to select. Can accept: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator.
     * @param {SelectionOptions} [existingSelection] The selection status of the LibraryPanel in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (selectableItems, existingSelection) {
        
    },


    /**
     * Generates a string which, if executed, will return the LibraryPanel.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return LibraryPanel
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

