/*
 * Options for specifying default endnote formatting.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var EndnoteOption = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the EndnoteOption (a Application or Document).
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
     * Title of the endnotes. (Limit: 0 to 100 characters)
     * @type {string}
     */
    endnoteTitle: undefined,


    /**
     * The paragraph style to apply to endnote title.
     * @type {ParagraphStyle}
     */
    endnoteTitleStyle: ParagraphStyle,


    /**
     * The endnote numbering style. Can return: FootnoteNumberingStyle enumerator or String.
     * @type {varies=any}
     */
    endnoteNumberingStyle: undefined,


    /**
     * The number at which to start endnote numbering.
     * @type {number}
     */
    startEndnoteNumberAt: undefined,


    /**
     * The point at which to restart endnote numbering. Can return: EndnoteRestarting enumerator or String.
     * @type {varies=any}
     */
    restartEndnoteNumbering: undefined,


    /**
     * The position of endnote reference numbers in the main text. Can return: FootnoteMarkerPositioning enumerator or String.
     * @type {varies=any}
     */
    endnoteMarkerPositioning: undefined,


    /**
     * The character style to apply to endnote reference numbers in the main text.
     * @type {CharacterStyle}
     */
    endnoteMarkerStyle: CharacterStyle,


    /**
     * The paragraph style to apply to endnote text.
     * @type {ParagraphStyle}
     */
    endnoteTextStyle: ParagraphStyle,


    /**
     * The text to insert between the endnote marker number and the endnote text. (Range: 0 to 100 characters)
     * @type {string}
     */
    endnoteSeparatorText: undefined,


    /**
     * Scope value of the endnotes. Can return: EndnoteScope enumerator or String.
     * @type {varies=any}
     */
    scopeValue: undefined,


    /**
     * Frame creation of the endnotes. Can return: EndnoteFrameCreate enumerator or String.
     * @type {varies=any}
     */
    frameCreateOption: undefined,


    /**
     * The position of the endnote prefix and/or suffix. Can return: FootnotePrefixSuffix enumerator or String.
     * @type {varies=any}
     */
    showEndnotePrefixSuffix: undefined,


    /**
     * The prefix text of the endnote. (Limit: 0 to 100 characters)
     * @type {string}
     */
    endnotePrefix: undefined,


    /**
     * The suffix text of the endnote. (Limit: 0 to 100 characters)
     * @type {string}
     */
    endnoteSuffix: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the EndnoteOption.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return EndnoteOption
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

