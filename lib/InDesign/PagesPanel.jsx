/*
 * Pages panel.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var PagesPanel = {


    /**
     * The name of the PagesPanel.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the PagesPanel (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the PagesPanel within its containing object.
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
     * View setting for how to arrange the pages in the page section of the panel.
     * @type {PageViewOptions}
     */
    pagesViewSetting: PageViewOptions,


    /**
     * Page icon size.
     * @type {IconSizes}
     */
    iconSize: IconSizes,


    /**
     * Master page icon size.
     * @type {IconSizes}
     */
    masterIconSize: IconSizes,


    /**
     * If true, master page icons will be arranged vertically around the binding spine. If false, master page icons will be arranged horizontally.
     * @type {boolean}
     */
    masterVerticalView: undefined,


    /**
     * Specifies the behavior of the document and master page areas of the panel when the panel is resized.
     * @type {PanelLayoutResize}
     */
    resizeBehavior: PanelLayoutResize,


    /**
     * If true, the pages area of the panel will be drawn above the master pages area.
     * @type {boolean}
     */
    pagesOnTop: undefined,


    /**
     * If true, display thumbnails of the pages in the pages area of the panel.
     * @type {boolean}
     */
    pagesThumbnails: undefined,


    /**
     * If true, display thumbnails of the pages in the master pages area of the panel.
     * @type {boolean}
     */
    mastersThumbnails: undefined,


    /**
     * If true, a transparency icon will display next to spreads with elements having transparency applied.
     * @type {boolean}
     */
    transparencyIcons: undefined,


    /**
     * If true, a page transitions icon will display next to spreads with page transitions applied.
     * @type {boolean}
     */
    transitionsIcons: undefined,


    /**
     * If true, a rotation icon will display next to spreads with non-zero rotation applied.
     * @type {boolean}
     */
    rotationIcons: undefined,


    /**
     * If true, the panel is visible.
     * @type {boolean}
     */
    visible: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the PagesPanel.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PagesPanel
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

