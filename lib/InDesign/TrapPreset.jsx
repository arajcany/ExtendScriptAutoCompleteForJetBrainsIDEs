/*
 * A trap preset.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var TrapPreset = {


    /**
     * The unique ID of the TrapPreset.
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
     * The parent of the TrapPreset (a Application or Document).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the TrapPreset within its containing object.
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
     * The name of the TrapPreset.
     * @type {string}
     */
    name: undefined,


    /**
     * The default width for trapping all colors except those involving solid black. (Range depends on unit. For points: 0.0 to 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 2.822; cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
     * @type {Measurement Unit (Number or String)=any}
     */
    defaultTrapWidth: Measurement Unit (Number or String)=any,


    /**
     * The black width. (Range depends on unit. For points: 0.0 to 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 2.822; cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
     * @type {Measurement Unit (Number or String)=any}
     */
    blackWidth: Measurement Unit (Number or String)=any,


    /**
     * The join type of the trap preset.
     * @type {EndJoin}
     */
    trapJoin: EndJoin,


    /**
     * The shape to use at the intersection of three-way traps.
     * @type {TrapEndTypes}
     */
    trapEnd: TrapEndTypes,


    /**
     * If true, ensures that vector objects overlap bitmap images.
     * @type {boolean}
     */
    objectsToImages: undefined,


    /**
     * If true, turns on trapping along the boundary of overlapping or abutting bitmap images.
     * @type {boolean}
     */
    imagesToImages: undefined,


    /**
     * If true, turns on trapping among colors within individual bitmap images.
     * @type {boolean}
     */
    internalImages: undefined,


    /**
     * If true, ensures that one-bit images trap to abutting objects.
     * @type {boolean}
     */
    oneBitImages: undefined,


    /**
     * The trap placement between vector objects and bitmap images.
     * @type {TrapImagePlacementTypes}
     */
    imagePlacement: TrapImagePlacementTypes,


    /**
     * The amount (as a percentage) that components of abutting colors must vary before a trap is created. (Range: 1 to 100)
     * @type {number}
     */
    stepThreshold: undefined,


    /**
     * The minimum amount (as a percentage) of black ink required before the black width setting is applied. (Range: 0 to 100)
     * @type {number}
     */
    blackColorThreshold: undefined,


    /**
     * The neutral density value at or above which an ink is considered black. (Range: .001 to 10)
     * @type {number}
     */
    blackDensity: undefined,


    /**
     * The difference (as a percentage) between the neutral densities of abutting colors at which the trap is moved from the darker side of a color edge toward the centerline. (Range: 0 to 100)
     * @type {number}
     */
    slidingTrapThreshold: undefined,


    /**
     * The degree (as a percentage) to which components from abutting colors are used to reduce the trap color. (Range: 0 to 100) Note: 0% makes a trap whose neutral density is equal to the neutral density of the darker color.
     * @type {number}
     */
    colorReduction: undefined,


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
     * Duplicates the TrapPreset.
     *
     * @return TrapPreset
     */
    duplicate: function () {
        
    },


    /**
     * Deletes the trap preset.
     *
     * @param {TrapPreset} [replacingWith] The trap preset to apply in place of the deleted preset.
     * @return undefined
     */
    remove: function (replacingWith) {
        
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
     * Generates a string which, if executed, will return the TrapPreset.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TrapPreset
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

