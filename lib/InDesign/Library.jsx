/*
 * An object library.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var Library = {


    /**
     * The name of the Library.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The full path to the Library, including the name of the Library.
     * @type {File}
     * @readonly
     */
    fullName: File,


    /**
     * The full path to the file.
     * @type {File}
     * @readonly
     */
    filePath: File,


    /**
     * The associated panel.
     * @type {Panel}
     * @readonly
     */
    associatedPanel: Panel,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the Library (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the Library within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A collection of object library assets.
     * @type {Assets}
     * @readonly
     */
    assets: Assets,


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
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Closes the Library.
     *
     * @return undefined
     */
    close: function () {
        
    },


    /**
     * Stores the specified object in the library.
     *
     * @param {varies=any} [using] The page item(s) to store. Can accept: Array of PageItems, Movies, Sounds, Graphics or XMLElements.
     * @param {Object} [withProperties] Initial values for properties of the new Library (Optional)
     * @return Asset
     */
    store: function (using, withProperties) {
        
    },


    /**
     * Generates a string which, if executed, will return the Library.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Library
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

