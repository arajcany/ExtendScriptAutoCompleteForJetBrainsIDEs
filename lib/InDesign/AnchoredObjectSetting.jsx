/*
 * The settings for an anchored object.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var AnchoredObjectSetting = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the AnchoredObjectSetting (a Application, Document, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, TextFrame, EndnoteTextFrame, Button, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject or ObjectStyle).
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
     * The position of the anchored object relative to the anchor.
     * @type {AnchorPosition}
     */
    anchoredPosition: AnchorPosition,


    /**
     * If true, the position of the anchored object is relative to the binding spine of the page or spread.
     * @type {boolean}
     */
    spineRelative: undefined,


    /**
     * If true, prevents manual positioning of the anchored object.
     * @type {boolean}
     */
    lockPosition: undefined,


    /**
     * If true, pins the position of the anchored object within the text frame top and bottom.
     * @type {boolean}
     */
    pinPosition: undefined,


    /**
     * The point in the anchored object to position.
     * @type {AnchorPoint}
     */
    anchorPoint: AnchorPoint,


    /**
     * When anchored position is above line, the position of the anchored object is relative to the text area. When anchored position is custom, the horizontal alignment of the anchored object is set by the horizontal reference point. Note: Not valid when anchored position is inline.
     * @type {HorizontalAlignment}
     */
    horizontalAlignment: HorizontalAlignment,


    /**
     * The horizontal reference point on the page. Valid only when anchored position is custom.
     * @type {AnchoredRelativeTo}
     */
    horizontalReferencePoint: AnchoredRelativeTo,


    /**
     * The vertical alignment of the anchored object reference point with the vertical reference point on the page. Notes: Valid only when anchored position is custom.
     * @type {VerticalAlignment}
     */
    verticalAlignment: VerticalAlignment,


    /**
     * The vertical reference point on the page. Valid when anchored position is custom.
     * @type {VerticallyRelativeTo}
     */
    verticalReferencePoint: VerticallyRelativeTo,


    /**
     * The horizontal (x) offset of the anchored object.
     * @type {Measurement Unit (Number or String)=any}
     */
    anchorXoffset: undefined,


    /**
     * The vertical (y) offset of the anchored object. Corresponds to the space after property for above line positioning.
     * @type {Measurement Unit (Number or String)=any}
     */
    anchorYoffset: undefined,


    /**
     * The space above an above-line anchored object.
     * @type {Measurement Unit (Number or String)=any}
     */
    anchorSpaceAbove: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Inserts the anchored object into specified story.
     *
     * @param {InsertionPoint} [storyOffset] The location within the story, specified as an insertion point.
     * @param {AnchorPosition} [anchoredPosition] The position of the anchored object relative to the anchor. (Optional)
     * @return undefined
     */
    insertAnchoredObject: function (storyOffset, anchoredPosition) {
        
    },


    /**
     * Releases the anchored object from its associated text.
     *
     * @return undefined
     */
    releaseAnchoredObject: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the AnchoredObjectSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return AnchoredObjectSetting
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

