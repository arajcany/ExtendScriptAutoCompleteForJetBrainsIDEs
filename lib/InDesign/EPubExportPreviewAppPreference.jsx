/*
 * EPub export preview app preferences.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var EPubExportPreviewAppPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the EPubExportPreviewAppPreference (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


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
     * If true, open docuemnt in viewer after export.
     * @type {boolean}
     */
    viewDocumentAfterExport: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Add a new preview application preference
     *
     * @param {string} [applicationPath] The full path of the application to be added.
     * @param {boolean} [selectedForReflowableEpub] Check if the app is selected in Reflowable ePub export.
     * @param {boolean} [selectedForFixedLayoutEpub] Check if the app is selected in Fixed Layout ePub export.
     * @param {Object} [withProperties] Initial values for properties of the new EPubExportPreviewAppPreference (Optional)
     * @return undefined
     */
    addApplication: function (applicationPath, selectedForReflowableEpub, selectedForFixedLayoutEpub, withProperties) {
        
    },


    /**
     * Remove an application at specified index.
     *
     * @param {number} [indexOfApp] The index of the application to be removed.
     * @param {Object} [withProperties] Initial values for properties of the new EPubExportPreviewAppPreference (Optional)
     * @return undefined
     */
    removeApplication: function (indexOfApp, withProperties) {
        
    },


    /**
     * Get the application at index.
     *
     * @param {boolean} [indexOfApp] The index of the application to get information for.
     * @param {Object} [withProperties] Initial values for properties of the new EPubExportPreviewAppPreference (Optional)
     * @return varies=any
     */
    getApplicationAtIndex: function (indexOfApp, withProperties) {
        
    },


    /**
     * Number of applications added for ePub Preview.
     *
     * @return number
     */
    getApplicationCount: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the EPubExportPreviewAppPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return EPubExportPreviewAppPreference
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

