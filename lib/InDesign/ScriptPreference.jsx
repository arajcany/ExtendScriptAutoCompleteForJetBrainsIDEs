/*
 * Scripting environment preferences.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var ScriptPreference = {


    /**
     * The path to the Scripts folder for the application.
     * @type {File}
     * @readonly
     */
    scriptsFolder: File,


    /**
     * A list of the scripts in the Scripts folder. Can return: Array of Array of 2 Strings or Files.
     * @type {varies=any}
     * @readonly
     */
    scriptsList: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the ScriptPreference (a Application).
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
     * The version of the scripting environment. Can also accept: Real.
     * @type {string}
     */
    version: undefined,


    /**
     * Controls the display of dialogs and alerts during script processing.
     * @type {UserInteractionLevels}
     */
    userInteractionLevel: UserInteractionLevels,


    /**
     * The measurement unit used during script processing. Can return: AutoEnum enumerator or MeasurementUnits enumerator.
     * @type {varies=any}
     */
    measurementUnit: undefined,


    /**
     * If true, enables redraw during script execution.
     * @type {boolean}
     */
    enableRedraw: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the ScriptPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ScriptPreference
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

