/*
 * Guide preferences.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var GuidePreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the GuidePreference (a Application or Document).
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
     * If true, places guides behind all other objects on the spread.
     * @type {boolean}
     */
    guidesInBack: undefined,


    /**
     * If true, displays the guides.
     * @type {boolean}
     */
    guidesShown: undefined,


    /**
     * If true, guides cannot be moved, added, or deleted.
     * @type {boolean}
     */
    guidesLocked: undefined,


    /**
     * If true, an object within the specified range snaps to the nearest guide when the object is created, moved, or resized. For range information, see guide snapto zone.
     * @type {boolean}
     */
    guidesSnapto: undefined,


    /**
     * The magnification (as a percentage) less than which ruler guides do not appear. (Range: 5 to 4000)
     * @type {number}
     */
    rulerGuidesViewThreshold: undefined,


    /**
     * The color of the guide, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    rulerGuidesColor: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the GuidePreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return GuidePreference
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

