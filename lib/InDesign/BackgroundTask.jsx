/*
 * background task
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var BackgroundTask = {


    /**
     * The name of the BackgroundTask.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The document name on which this task operates.
     * @type {string}
     * @readonly
     */
    documentName: undefined,


    /**
     * Progress information for this task.
     * @type {number}
     * @readonly
     */
    percentDone: undefined,


    /**
     * The current status of this task object.
     * @type {TaskState}
     * @readonly
     */
    status: TaskState,


    /**
     * The alerts encountered while running this task object. Can return: Array of Array of 2 TaskAlertType enumerators or Strings.
     * @type {varies=any}
     * @readonly
     */
    alerts: undefined,


    /**
     * The unique ID of the BackgroundTask.
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
     * The parent of the BackgroundTask (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the BackgroundTask within its containing object.
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
     * Cancels the specified background task.
     *
     * @return undefined
     */
    cancelTask: function () {
        
    },


    /**
     * Waits for the task to finish.
     *
     * @return TaskState
     */
    waitForTask: function () {
        
    },


    /**
     * Queries for a particular property in the task metadata.
     *
     * @param {string} [name] The task property being queried
     * @return any
     */
    queryProperty: function (name) {
        
    },


    /**
     * Generates a string which, if executed, will return the BackgroundTask.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return BackgroundTask
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

