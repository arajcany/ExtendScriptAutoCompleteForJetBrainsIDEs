/*
 * Default properties specific to frame grids.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var StoryGridDataInformation = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the StoryGridDataInformation (a Application or Document).
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
     * The font applied to the StoryGridDataInformation, specified as either a font object or the name of font family. Can return: Font or String.
     * @type {varies=any}
     */
    appliedFont: undefined,


    /**
     * The name of the font style.
     * @type {string}
     */
    fontStyle: undefined,


    /**
     * The text size.
     * @type {Measurement Unit (Number or String)=any}
     */
    pointSize: undefined,


    /**
     * The amount of white space between characters.
     * @type {number}
     */
    characterAki: undefined,


    /**
     * The amount of white space between lines.
     * @type {number}
     */
    lineAki: undefined,


    /**
     * The horizontal scaling applied to the StoryGridDataInformation.
     * @type {number}
     */
    horizontalScale: undefined,


    /**
     * The vertical scaling applied to the StoryGridDataInformation.
     * @type {number}
     */
    verticalScale: undefined,


    /**
     * The line justification.
     * @type {LineAlignment}
     */
    lineAlignment: LineAlignment,


    /**
     * The alignment to the frame grid or baseline grid.
     * @type {GridAlignment}
     */
    gridAlignment: GridAlignment,


    /**
     * The alignment of small characters to the largest character in the line.
     * @type {CharacterAlignment}
     */
    characterAlignment: CharacterAlignment,


    /**
     * The grid view setting.
     * @type {GridViewSettings}
     */
    gridView: GridViewSettings,


    /**
     * The character count location. Note: Valid when show character count is true.
     * @type {CharacterCountLocation}
     */
    characterCountLocation: CharacterCountLocation,


    /**
     * The character size for the character count display.
     * @type {number}
     */
    characterCountSize: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the StoryGridDataInformation.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return StoryGridDataInformation
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

