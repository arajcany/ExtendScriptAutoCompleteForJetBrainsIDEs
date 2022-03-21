/*
 * Track changes preferences.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var TrackChangesPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the TrackChangesPreference (a Application).
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
     * The change bar color, specified as an InCopy UI color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
     * @type {varies=any}
     */
    changeBarColor: undefined,


    /**
     * If true, displays added text.
     * @type {boolean}
     */
    showAddedText: undefined,


    /**
     * If true, displays change bars,
     * @type {boolean}
     */
    showChangeBars: undefined,


    /**
     * If true, displays deleted text.
     * @type {boolean}
     */
    showDeletedText: undefined,


    /**
     * If true, displays moved text.
     * @type {boolean}
     */
    showMovedText: undefined,


    /**
     * If true, includes deleted text when using the Spell Check command.
     * @type {boolean}
     */
    spellCheckDeletedText: undefined,


    /**
     * The color for added text, specified as an InCopy UI color. Note: Valid only when added text color choice is change uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
     * @type {varies=any}
     */
    textColorForAddedText: undefined,


    /**
     * The background color for added text, specified as an InCopy UI color. Note: Valid only when added background color choice is change background uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
     * @type {varies=any}
     */
    backgroundColorForAddedText: undefined,


    /**
     * The color for deleted text, specified as an InCopy UI color. Note: Valid only when deleted text color choice is change uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
     * @type {varies=any}
     */
    textColorForDeletedText: undefined,


    /**
     * The background color for deleted text, specified as an InCopy UI color. Note: Valid only when deleted background color choice is change background uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
     * @type {varies=any}
     */
    backgroundColorForDeletedText: undefined,


    /**
     * The color for moved text, specified as an InCopy UI color. Note: Valid only when moved text color choice is change uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
     * @type {varies=any}
     */
    textColorForMovedText: undefined,


    /**
     * The background color for moved text, specified as an InCopy UI color. Note: Valid only when moved background color choice is change background uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
     * @type {varies=any}
     */
    backgroundColorForMovedText: undefined,


    /**
     * The marking that identifies added text.
     * @type {ChangeMarkings}
     */
    markingForAddedText: ChangeMarkings,


    /**
     * The marking that identifies deleted text.
     * @type {ChangeMarkings}
     */
    markingForDeletedText: ChangeMarkings,


    /**
     * The marking that identifies moved text.
     * @type {ChangeMarkings}
     */
    markingForMovedText: ChangeMarkings,


    /**
     * The change bar location.
     * @type {ChangebarLocations}
     */
    locationForChangeBar: ChangebarLocations,


    /**
     * The color option for added text.
     * @type {ChangeTextColorChoices}
     */
    addedTextColorChoice: ChangeTextColorChoices,


    /**
     * The background color option for added text.
     * @type {ChangeBackgroundColorChoices}
     */
    addedBackgroundColorChoice: ChangeBackgroundColorChoices,


    /**
     * The color option for deleted text.
     * @type {ChangeTextColorChoices}
     */
    deletedTextColorChoice: ChangeTextColorChoices,


    /**
     * The background color option for deleted text.
     * @type {ChangeBackgroundColorChoices}
     */
    deletedBackgroundColorChoice: ChangeBackgroundColorChoices,


    /**
     * The color option for moved text.
     * @type {ChangeTextColorChoices}
     */
    movedTextColorChoice: ChangeTextColorChoices,


    /**
     * The background color option for moved text.
     * @type {ChangeBackgroundColorChoices}
     */
    movedBackgroundColorChoice: ChangeBackgroundColorChoices,


    /**
     * If true, prevent duplicate user color for tracked changes background color.
     * @type {boolean}
     */
    preventDuplicateColor: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the TrackChangesPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TrackChangesPreference
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

