/*
 * General application preferences.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var GeneralPreference = {


    /**
     * The value of the system reported main monitor resolution
     * @type {number}
     * @readonly
     */
    mainMonitorPpi: undefined,


    /**
     * If true, application bar is shown.
     * @type {boolean}
     * @readonly
     */
    applicationBarShown: undefined,


    /**
     * If true, application lives in a frame.
     * @type {boolean}
     * @readonly
     */
    useApplicationFrame: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the GeneralPreference (a Application).
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
     * Tool tip behavior.
     * @type {ToolTipOptions}
     */
    toolTips: ToolTipOptions,


    /**
     * Controls whether or not to greek vector graphics when dragging at high quality.
     * @type {boolean}
     */
    greekVectorGraphicsOnDrag: undefined,


    /**
     * Show the conveyor on content collector or content placer tool activation
     * @type {boolean}
     */
    showConveyor: undefined,


    /**
     * Enable the creation of links on content place
     * @type {boolean}
     */
    createLinksOnContentPlace: undefined,


    /**
     * Enable the mapping of styles on content place
     * @type {boolean}
     */
    mapStylesOnContentPlace: undefined,


    /**
     * Enable the use of a custom monitor resolution in pixels per inch as opposed to querying the system settings
     * @type {boolean}
     */
    useCustomMonitorResolution: undefined,


    /**
     * When using a custom monitor resolution, what is the value of that resolution in pixels per inch
     * @type {number}
     */
    customMonitorPpi: undefined,


    /**
     * Specify the Application User Interface brightness preference (from 0.0 to 1.0). To use color theme brightness preset values, specify 0.0 for Dark, 0.50 for Medium Dark, 0.51 for Medium Bright, and 1.0 for Bright. Any value between 0.0 and 1.0 will automatically be mapped to closest preset.
     * @type {number}
     */
    uiBrightnessPreference: undefined,


    /**
     * Specify the Pasteboard color preference (0 or 1). Specify 0 to set preference to Default White, and 1 to set preference to Match with Theme Color.
     * @type {number}
     */
    pasteboardColorPreference: undefined,


    /**
     * If true, show What's New dialog on startup.
     * @type {boolean}
     */
    showWhatsNewOnStartup: undefined,


    /**
     * If true, on creating new swatch through the new swatch dialog, it will be exported to CC Libraries as well
     * @type {boolean}
     */
    autoAddSwatchToCCLibraries: undefined,


    /**
     * If true, on creating new char style through the new char style dialog, it will be exported to CC Libraries as well
     * @type {boolean}
     */
    autoAddCharStyleToCCLibraries: undefined,


    /**
     * If true, on creating new para style through the new para style dialog, it will be exported to CC Libraries as well
     * @type {boolean}
     */
    autoAddParaStyleToCCLibraries: undefined,


    /**
     * If true, show start workspace when no documents are open
     * @type {boolean}
     */
    showStartWorkspace: undefined,


    /**
     * If true, show stock cart adornment on unlicensed stock images
     * @type {boolean}
     */
    showStockPurchaseAdornment: undefined,


    /**
     * Controls whether or not the content grabber adornment is shown.
     * @type {boolean}
     */
    showContentGrabber: undefined,


    /**
     * Controls whether or not the live corners grabber adornment is shown.
     * @type {boolean}
     */
    showLiveCorners: undefined,


    /**
     * Controls whether or not to show the master page overlay when a page is selected using the Page Tool.
     * @type {boolean}
     */
    showMasterPageOverlay: undefined,


    /**
     * Controls whether page items move when a page is repositioned from the UI. The option/alt key temporarily reverses this property
     * @type {boolean}
     */
    objectsMoveWithPage: undefined,


    /**
     * Controls whether or not you can select and interact with a locked item. When this is off, only position is locked.
     * @type {boolean}
     */
    preventSelectingLockedItems: undefined,


    /**
     * Controls whether or not multi-touch gestures are enabled.
     * @type {boolean}
     */
    enableMultiTouchGestures: undefined,


    /**
     * Controls the appearance of the Tools panel.
     * @type {ToolsPanelOptions}
     */
    toolsPanel: ToolsPanelOptions,


    /**
     * If true, panel drawers close automatically.
     * @type {boolean}
     */
    autoCollapseIconPanels: undefined,


    /**
     * Controls whether or not to show thumbnails of imported files in the Place icon.
     * @type {boolean}
     */
    placeCursorUsesThumbnails: undefined,


    /**
     * If true, Large Tabs are shown for panels else Smaller tabs are shown
     * @type {boolean}
     */
    panelTabHeightPreference: undefined,


    /**
     * If true, legacy new document dialog will be shown when Ctrl/Cmd + N are pressed.
     * @type {boolean}
     */
    showLegacyNewDocumentDialog: undefined,


    /**
     * If true, vertical reveal strips appear when palette UI is hidden.
     * @type {boolean}
     */
    autoShowHiddenPanels: undefined,


    /**
     * If true, documents open as tabs.
     * @type {boolean}
     */
    openDocumentsAsTabs: undefined,


    /**
     * If true, floating windows can be docked by user as tabs.
     * @type {boolean}
     */
    enableFloatingWindowDocking: undefined,


    /**
     * Number of items to show in the Open Recent menu list. Range: 0 to 30
     * @type {number}
     */
    openRecentLength: undefined,


    /**
     * Controls whether or not to dynamically display transformation information as part of the cursor while manipulating page items.
     * @type {boolean}
     */
    showTransformationValues: undefined,


    /**
     * Controls whether or not the anchor object adornment is shown.
     * @type {boolean}
     */
    showAnchorObjectAdornment: undefined,


    /**
     * Controls whether or not to highlight object under selection tool.
     * @type {boolean}
     */
    highlightObjectUnderSelectionTool: undefined,


    /**
     * If true, enable content-aware fit as default while placing items
     * @type {boolean}
     */
    enableContentAwareFit: undefined,


    /**
     * The pages to create preview images for. Note: Valid when include preview is true.
     * @type {PreviewPagesOptions}
     */
    previewPages: PreviewPagesOptions,


    /**
     * The location in which to store temporary files.
     * @type {File}
     */
    temporaryFolder: File,


    /**
     * The page numbering method.
     * @type {PageNumberingOptions}
     */
    pageNumbering: PageNumberingOptions,


    /**
     * The threshold at which to trigger font subsetting based on the number of glyphs the font contains.
     * @type {number}
     */
    completeFontDownloadGlyphLimit: undefined,


    /**
     * If true, includes a preview in saved documents.
     * @type {boolean}
     */
    includePreview: undefined,


    /**
     * If true, use incoming spot color definition in case of conflict, when placing or pasting content
     * @type {boolean}
     */
    useIncomingSpotUponConflict: undefined,


    /**
     * If true, objects after ungrouping go back to their original layers.
     * @type {boolean}
     */
    ungroupRemembersLayers: undefined,


    /**
     * The preview size. Note: Valid when include preview is true.
     * @type {PreviewSizeOptions}
     */
    previewSize: PreviewSizeOptions,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the GeneralPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return GeneralPreference
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

