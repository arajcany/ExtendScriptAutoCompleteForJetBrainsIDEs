/*
 * Transparency settings for the fill applied to the parent object.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var FillTransparencySetting = {


    /**
     * Blending mode settings.
     * @type {BlendingSetting}
     * @readonly
     */
    blendingSettings: BlendingSetting,


    /**
     * Settings related to the drop shadow effect.
     * @type {DropShadowSetting}
     * @readonly
     */
    dropShadowSettings: DropShadowSetting,


    /**
     * Settings related to the feather effect.
     * @type {FeatherSetting}
     * @readonly
     */
    featherSettings: FeatherSetting,


    /**
     * Settings related to the inner shadow effect.
     * @type {InnerShadowSetting}
     * @readonly
     */
    innerShadowSettings: InnerShadowSetting,


    /**
     * Settings related to the outer glow effect.
     * @type {OuterGlowSetting}
     * @readonly
     */
    outerGlowSettings: OuterGlowSetting,


    /**
     * Settings related to the inner glow effect.
     * @type {InnerGlowSetting}
     * @readonly
     */
    innerGlowSettings: InnerGlowSetting,


    /**
     * Settings related to the bevel and emboss effect.
     * @type {BevelAndEmbossSetting}
     * @readonly
     */
    bevelAndEmbossSettings: BevelAndEmbossSetting,


    /**
     * Settings related to the satin effect
     * @type {SatinSetting}
     * @readonly
     */
    satinSettings: SatinSetting,


    /**
     * Settings related to the directional feather effect.
     * @type {DirectionalFeatherSetting}
     * @readonly
     */
    directionalFeatherSettings: DirectionalFeatherSetting,


    /**
     * Settings related to the gradient feather effect.
     * @type {GradientFeatherSetting}
     * @readonly
     */
    gradientFeatherSettings: GradientFeatherSetting,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the FillTransparencySetting (a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, PageItemDefault or ObjectStyle).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * A collection of preferences objects.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


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
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the FillTransparencySetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return FillTransparencySetting
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

