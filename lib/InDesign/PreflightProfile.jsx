/*
 * A preflight profile.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var PreflightProfile = {


    /**
     * The unique ID of the PreflightProfile.
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
     * The parent of the PreflightProfile (a Application or Document).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the PreflightProfile within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A collection of preflight profile rules.
     * @type {PreflightProfileRules}
     * @readonly
     */
    preflightProfileRules: PreflightProfileRules,


    /**
     * A collection of preflight rule instances.
     * @type {PreflightRuleInstances}
     * @readonly
     */
    preflightRuleInstances: PreflightRuleInstances,


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
     * The name of the PreflightProfile.
     * @type {string}
     */
    name: undefined,


    /**
     * The description of the PreflightProfile.
     * @type {string}
     */
    description: undefined,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the PreflightProfile.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Duplicates the PreflightProfile.
     *
     * @return PreflightProfile
     */
    duplicate: function () {
        
    },


    /**
     * Update the preflight profile by copying from another profile.
     *
     * @param {varies=any} [using] The preflight profile to copy. Can accept: String or PreflightProfile. (Optional)
     * @return undefined
     */
    update: function (using) {
        
    },


    /**
     * Unembed this profile.
     *
     * @return undefined
     */
    unembed: function () {
        
    },


    /**
     * Saves this preflight profile to a InDesign preflight profile file.
     *
     * @param {File} [to] The preflight profile file to save to.
     * @return undefined
     */
    save: function (to) {
        
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
     * Generates a string which, if executed, will return the PreflightProfile.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PreflightProfile
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

