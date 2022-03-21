/*
 * A guide.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var Guide = {


    /**
     * Dispatched after a Guide is placed. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_PLACE: afterPlace,


    /**
     * If true, the object originated on a master spread and was overridden. If false, the object either originated on a master spread and was not overridden, or the object did not originate on a master page.
     * @type {boolean}
     * @readonly
     */
    overridden: undefined,


    /**
     * An object that originated on a master page and has been overridden. Can return: PageItem, Guide, Graphic, Movie or Sound.
     * @type {varies=any}
     * @readonly
     */
    overriddenMasterPageItem: undefined,


    /**
     * The page on which this page item appears.
     * @type {Page}
     * @readonly
     */
    parentPage: Page,


    /**
     * The unique ID of the Guide.
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
     * The parent of the Guide (a Spread or MasterSpread).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the Guide within its containing object.
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
     * If true, the master page item can be overridden.
     * @type {boolean}
     */
    allowOverrides: undefined,


    /**
     * The color of the guide, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    guideColor: undefined,


    /**
     * The orientation of the guide.
     * @type {HorizontalOrVertical}
     */
    orientation: HorizontalOrVertical,


    /**
     * The location at which to place the guide relative to the current ruler zero point.
     * @type {Measurement Unit (Number or String)=any}
     */
    location: undefined,


    /**
     * If true, horizontal orientation guides stop at the edges of the specified page. If false, the guides extends across the width of the spread and into the pasteboard area.
     * @type {boolean}
     */
    fitToPage: undefined,


    /**
     * The view magnification as a percentage below which guides are no longer displayed. (Range: 5.0 to 4000.0)
     * @type {number}
     */
    viewThreshold: undefined,


    /**
     * If true, the Guide is locked.
     * @type {boolean}
     */
    locked: undefined,


    /**
     * The layer that the Guide is on.
     * @type {Layer}
     */
    itemLayer: Layer,


    /**
     * The type of the guide.
     * @type {GuideTypeOptions}
     */
    guideType: GuideTypeOptions,


    /**
     * The zone of the guide.
     * @type {Measurement Unit (Number or String)=any}
     */
    guideZone: undefined,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * The name of the Guide; this is an alias to the Guide's label property.
     * @type {string}
     */
    name: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Overrides a master page item and places the item on the document page as a new object.
     *
     * @param {Page} [destinationPage] The document page that contains the master page item to override.
     * @return varies=any
     */
    override: function (destinationPage) {
        
    },


    /**
     * Removes the override from a previously overridden master page item.
     *
     * @return undefined
     */
    removeOverride: function () {
        
    },


    /**
     * Detaches an overridden master page item from the master page.
     *
     * @return undefined
     */
    detach: function () {
        
    },


    /**
     * Deletes the Guide.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Moves the guide to a new location. Note: Either the to or the by parameter is required; if both parameters are defined, only the to value is used.
     *
     * @param {Measurement Unit (Number or String)=any} [to] The new location of the guide, in the format [x, y]. (Optional)
     * @param {Measurement Unit (Number or String)=any} [by] The amount to move the guide relative to its current position, in the format [x, y]. (Optional)
     * @return undefined
     */
    move: function (to, by) {
        
    },


    /**
     * Duplicates the Guide.
     *
     * @return Guide
     */
    duplicate: function () {
        
    },


    /**
     * Get the transformation values of the page item.
     *
     * @param {CoordinateSpaces} [inXYZ] The coordinate space to use
     * @return TransformationMatrix
     */
    transformValuesOf: function (inXYZ) {
        
    },


    /**
     * Get the coordinates of the given location in the specified coordinate system.
     *
     * @param {varies=any} [location] The location requested. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
     * @param {CoordinateSpaces} [inXYZ] The coordinate space to use.
     * @param {boolean} [consideringRulerUnits] If true then a ruler location is interpreted using ruler units rather than points. The default value is false. This parameter has no effect unless the reference point is specified relative to a page. (Optional) (default: false)
     * @return varies=any
     */
    resolve: function (location, inXYZ, consideringRulerUnits) {
        
    },


    /**
     * Selects the object.
     *
     * @param {SelectionOptions} [existingSelection] The selection status of the Guide in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (existingSelection) {
        
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
     * Generates a string which, if executed, will return the Guide.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Guide
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

