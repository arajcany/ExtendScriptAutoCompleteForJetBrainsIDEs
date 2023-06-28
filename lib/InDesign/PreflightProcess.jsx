/*
 * An active preflight process.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var PreflightProcess = {


    /**
     * The target document the process is inspecting.
     * @type {Document}
     * @readonly
     */
    targetObject: Document,


    /**
     * The preflight profile the process is using.
     * @type {PreflightProfile}
     * @readonly
     */
    appliedProfile: PreflightProfile,


    /**
     * The description of the PreflightProcess.
     * @type {string}
     * @readonly
     */
    description: undefined,


    /**
     * The results found by the process as a large string.
     * @type {string}
     * @readonly
     */
    processResults: undefined,


    /**
     * A string containing a description of all elements visited by the process.
     * @type {string}
     * @readonly
     */
    processInventory: undefined,


    /**
     * The aggregated results found by the process. Can return: Ordered array containing documentName:String, profileName:String, results:Array of Ordered array containing parentNodeID:Long Integer, errorName:String, pageNumber:String, errorInfo:String, errorDetail:Array of Ordered array containing label:String, description:String.
     * @type {varies=any}
     * @readonly
     */
    aggregatedResults: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the PreflightProcess (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the PreflightProcess within its containing object.
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
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the PreflightProcess.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Waits for the process to finish, up to an optional maximum amount of time. No other processes get cycles during this time.
     *
     * @param {number} [waitTime] The maximum time to wait, in seconds; if omitted, waits until completion no matter how long it takes. (Optional)
     * @return boolean
     */
    waitForProcess: function (waitTime) {
        
    },


    /**
     * Saves a report of the completed preflight process.
     *
     * @param {File} [to] The preflight report to save to.
     * @param {boolean} [autoOpen] If true, automatically open the report after creation. (Optional) (default: false)
     * @return undefined
     */
    saveReport: function (to, autoOpen) {
        
    },


    /**
     * Generates a string which, if executed, will return the PreflightProcess.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PreflightProcess
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

