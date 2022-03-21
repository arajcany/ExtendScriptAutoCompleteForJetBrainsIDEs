/*
 * A text variable definition in a document.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var TextVariable = {


    /**
     * Variable instances associated with the text variable.
     * @type {TextVariableInstance}
     * @readonly
     */
    associatedInstances: TextVariableInstance,


    /**
     * The preferences associated with the text variable. Can return: PageNumberVariablePreference, ChapterNumberVariablePreference, DateVariablePreference, FileNameVariablePreference, MatchCharacterStylePreference, MatchParagraphStylePreference, CustomTextVariablePreference or CaptionMetadataVariablePreference.
     * @type {varies=any}
     * @readonly
     */
    variableOptions: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the TextVariable (a Application or Document).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the TextVariable within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A collection of preferences objects.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


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
     * The name of the TextVariable.
     * @type {string}
     */
    name: undefined,


    /**
     * The variable type.
     * @type {VariableTypes}
     */
    variableType: VariableTypes,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the TextVariable.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Convert all of this variable's instances to text.
     *
     * @return Text
     */
    convertToText: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the TextVariable.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TextVariable
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

