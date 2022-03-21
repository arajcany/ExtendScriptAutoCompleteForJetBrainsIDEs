/*
 * HTML export preferences.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var HTMLExportPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the HTMLExportPreference (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


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
     * If true, InDesign will generate class attributes for elements in HTML, else will generate plain html without class attributes.
     * @type {boolean}
     */
    includeClassesInHTML: undefined,


    /**
     * Use SVG As
     * @type {UseSVGAsEnum}
     */
    useSVGAs: UseSVGAsEnum,


    /**
     * If true and have selection, export selected content to HTML.
     * @type {boolean}
     */
    exportSelection: undefined,


    /**
     * The export order.
     * @type {ExportOrder}
     */
    exportOrder: ExportOrder,


    /**
     * The bullet export option.
     * @type {BulletListExportOption}
     */
    bulletExportOption: BulletListExportOption,


    /**
     * The numbered list export option.
     * @type {NumberedListExportOption}
     */
    numberedListExportOption: NumberedListExportOption,


    /**
     * If true, open docuemnt in viewer after export.
     * @type {boolean}
     */
    viewDocumentAfterExport: undefined,


    /**
     * The export order.
     * @type {ImageExportOption}
     */
    imageExportOption: ImageExportOption,


    /**
     * The export resolution
     * @type {ImageResolution}
     */
    imageExportResolution: ImageResolution,


    /**
     * Allows user to select the image size option for conversion
     * @type {ImageSizeOption}
     */
    customImageSizeOption: ImageSizeOption,


    /**
     * If true, format image based on layout appearence.
     * @type {boolean}
     */
    preserveLayoutAppearence: undefined,


    /**
     * Alignment applied to images
     * @type {ImageAlignmentType}
     */
    imageAlignment: ImageAlignmentType,


    /**
     * Space Before applied to images
     * @type {number}
     */
    imageSpaceBefore: undefined,


    /**
     * Space After applied to images
     * @type {number}
     */
    imageSpaceAfter: undefined,


    /**
     * The file format to use for converted images. Note: Valid only when copy optimized images and/or copy formatted images is true.
     * @type {ImageConversion}
     */
    imageConversion: ImageConversion,


    /**
     * The color palette for GIF conversion. Note: Not valid when image conversion is JPEG.
     * @type {GIFOptionsPalette}
     */
    gifOptionsPalette: GIFOptionsPalette,


    /**
     * If true, generates interlaced GIFs. Note: Not valid  when image conversion is JPEG.
     * @type {boolean}
     */
    gifOptionsInterlaced: undefined,


    /**
     * The quality of converted JPEG images. Note: Not valid when image conversion is GIF.
     * @type {JPEGOptionsQuality}
     */
    jpegOptionsQuality: JPEGOptionsQuality,


    /**
     * The formatting method for converted JPEG images. Note: Not valid  when image conversion is GIF.
     * @type {JPEGOptionsFormat}
     */
    jpegOptionsFormat: JPEGOptionsFormat,


    /**
     * The PNG compression level.
     * @type {number}
     */
    level: undefined,


    /**
     * ignore object level image conversion settings.
     * @type {boolean}
     */
    ignoreObjectConversionSettings: undefined,


    /**
     * The server path for image .
     * @type {string}
     */
    serverPath: undefined,


    /**
     * The image extension on server.
     * @type {string}
     */
    imageExtension: undefined,


    /**
     * If true, output local style override.
     * @type {boolean}
     */
    preserveLocalOverride: undefined,


    /**
     * The file path of external cascading style sheets.
     * @type {string}
     */
    externalStyleSheets: undefined,


    /**
     * The file path of external javascripts.
     * @type {string}
     */
    javascripts: undefined,


    /**
     * If true, InDesign will generate cascade style sheet.
     * @type {boolean}
     */
    generateCascadeStyleSheet: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the HTMLExportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return HTMLExportPreference
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

