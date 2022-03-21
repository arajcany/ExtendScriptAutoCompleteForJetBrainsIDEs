/*
 * An XML rule processor.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var XMLRuleProcessor = {


    /**
     * If true, the XML rule process has halted.
     * @type {boolean}
     * @readonly
     */
    halted: undefined,


    /**
     * The XPath condition paths of the rules in the rule set.
     * @type {string}
     * @readonly
     */
    rulePaths: undefined,


    /**
     * The unique ID of the XMLRuleProcessor.
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
     * The parent of the XMLRuleProcessor (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the XMLRuleProcessor within its containing object.
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
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * The name of the XMLRuleProcessor; this is an alias to the XMLRuleProcessor's label property.
     * @type {string}
     */
    name: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the XMLRuleProcessor.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Start processing an XML rule set.
     *
     * @param {XMLElement} [initialElement] The XML element at which to start processing the rule set.
     * @return XMLRuleMatchData
     */
    startProcessingRuleSet: function (initialElement) {
        
    },


    /**
     * Finds the next matching XML element.
     *
     * @return XMLRuleMatchData
     */
    findNextMatch: function () {
        
    },


    /**
     * Process the XML elements of the current XML element.
     *
     * @return XMLRuleMatchData
     */
    startProcessingSubtree: function () {
        
    },


    /**
     * Do not process XML elements (children) of the current XML element.
     *
     * @return undefined
     */
    skipChildren: function () {
        
    },


    /**
     * Stop processing XML rule set.
     *
     * @return undefined
     */
    endProcessingRuleSet: function () {
        
    },


    /**
     * Halt the XML rule processor.
     *
     * @return undefined
     */
    halt: function () {
        
    },


    /**
     * Sets the label to the value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @param {string} [value] The value.
     * @return undefined
     */
    insertLabel: function (key, value) {
        
    },


    /**
     * Gets the label value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @return string
     */
    extractLabel: function (key) {
        
    },


    /**
     * Generates a string which, if executed, will return the XMLRuleProcessor.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return XMLRuleProcessor
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

