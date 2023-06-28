/*
 * Animation settings.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var AnimationSetting = {


    /**
     * Determines if this animated object has custom settings.
     * @type {boolean}
     * @readonly
     */
    hasCustomSettings: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the AnimationSetting (a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame or EndnoteTextFrame).
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
     * The base animation preset applied. Can return: MotionPreset, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    preset: undefined,


    /**
     * The tranform offset percentage from the target object bounding box's left-top corner.
     * @type {number}
     */
    transformOffsets: undefined,


    /**
     * The duration in second for this animation.
     * @type {number}
     */
    duration: undefined,


    /**
     * The list of motion path points for this animation. Can return: Ordered array containing pathPointArray:Array of Ordered array containing anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, rightDirection:Array of 2 Reals, pathOpen:Boolean.
     * @type {varies=any}
     */
    motionPathPoints: undefined,


    /**
     * The list of motion path points and key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, pathPoint:Ordered array containing anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, rightDirection:Array of 2 Reals.
     * @type {varies=any}
     */
    motionPath: undefined,


    /**
     * The list of opacity key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
     * @type {varies=any}
     */
    opacityArray: undefined,


    /**
     * The list of rotation key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
     * @type {varies=any}
     */
    rotationArray: undefined,


    /**
     * The list of scale x key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
     * @type {varies=any}
     */
    scaleXArray: undefined,


    /**
     * The list of scale y key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
     * @type {varies=any}
     */
    scaleYArray: undefined,


    /**
     * The animation design option.
     * @type {DesignOptions}
     */
    designOption: DesignOptions,


    /**
     * The ease type.
     * @type {AnimationEaseOptions}
     */
    easeType: AnimationEaseOptions,


    /**
     * The number of times this animation plays.
     * @type {number}
     */
    plays: undefined,


    /**
     * Set to true if animation play loops.
     * @type {boolean}
     */
    playsLoop: undefined,


    /**
     * Determines if this object is initially hidden when displayed in an exported SWF file.
     * @type {boolean}
     */
    initiallyHidden: undefined,


    /**
     * Determines if this object is hidden after its animation is played in an exported SWF file.
     * @type {boolean}
     */
    hiddenAfter: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Save a copy of this motion preset to a InDesign motion preset file.
     *
     * @param {File} [to] The Flash motion preset file to export to.
     * @return undefined
     */
    saveACopy: function (to) {
        
    },


    /**
     * Save this motion preset as custom preset.
     *
     * @param {string} [name] The name for the new motion preset.
     * @return MotionPreset
     */
    save: function (name) {
        
    },


    /**
     * Generates a string which, if executed, will return the AnimationSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return AnimationSetting
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

