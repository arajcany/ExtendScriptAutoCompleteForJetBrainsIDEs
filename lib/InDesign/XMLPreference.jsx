/*
 * XML preferences.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var XMLPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the XMLPreference (a Application or Document).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


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
     * The preference for deleting the element when deleting the associated content like a page item or a text fragment.
     * @type {boolean}
     */
    deleteElementOnContentDeletion: undefined,


    /**
     * The name of the default tag to use for new story elements. Note: Either specifies an existing tag or creates a new tag.
     * @type {string}
     */
    defaultStoryTagName: undefined,


    /**
     * The color of the default story tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Notes: Valid only when default story tag name value creates a new tag. Does not update the color of an existing tag. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    defaultStoryTagColor: undefined,


    /**
     * The name of the default tag to use for new table elements. Note: Either specifies an existing tag or creates a new tag.
     * @type {string}
     */
    defaultTableTagName: undefined,


    /**
     * The color of the default table tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Notes: Valid only when default table tag name value creates a new tag. Does not update the color of an existing tag. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    defaultTableTagColor: undefined,


    /**
     * The name of the default tag to use for new table cell elements. Note: Either specifies an existing tag or creates a new tag.
     * @type {string}
     */
    defaultCellTagName: undefined,


    /**
     * The color of the default cell tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid only when default cell tag name value creates a new tag. Does not update the color of an existing tag. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    defaultCellTagColor: undefined,


    /**
     * The default name for new image elements created automatically.
     * @type {string}
     */
    defaultImageTagName: undefined,


    /**
     * The color to give a new image tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Used only when the tag needs to be created. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    defaultImageTagColor: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the XMLPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return XMLPreference
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

