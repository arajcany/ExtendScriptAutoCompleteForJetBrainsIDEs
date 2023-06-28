/*
 * A show/hide fields behavior object.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var ShowHideFieldsBehavior = {


    /**
     * The name of the ShowHideFieldsBehavior.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The unique ID of the ShowHideFieldsBehavior.
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
     * The parent of the ShowHideFieldsBehavior (a Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the ShowHideFieldsBehavior within its containing object.
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
     * The hidden interactive objects. Can return: Array of Buttons, CheckBoxes, ComboBoxes, ListBoxes, RadioButtons, TextBoxes or SignatureFields.
     * @type {varies=any}
     */
    fieldsToHide: undefined,


    /**
     * The visible interactive objects. Can return: Array of Buttons, CheckBoxes, ComboBoxes, ListBoxes, RadioButtons, TextBoxes or SignatureFields.
     * @type {varies=any}
     */
    fieldsToShow: undefined,


    /**
     * If true, the behavior is enabled.
     * @type {boolean}
     */
    enableBehavior: undefined,


    /**
     * The event which triggers the behavior.
     * @type {BehaviorEvents}
     */
    behaviorEvent: BehaviorEvents,


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
     * Deletes the ShowHideFieldsBehavior.
     *
     * @return undefined
     */
    remove: function () {
        
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
     * Generates a string which, if executed, will return the ShowHideFieldsBehavior.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ShowHideFieldsBehavior
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

