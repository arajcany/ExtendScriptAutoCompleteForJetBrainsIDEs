/*
 * EPub export preferences.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var EPubExportPreference = {


    /**
     * The PNG compression level.
     * @type {number}
     * @readonly
     */
    level: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the EPubExportPreference (a Book or Document).
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
     * The epub title.
     * @type {string}
     */
    epubTitle: undefined,


    /**
     * The epub creator.
     * @type {string}
     */
    epubCreator: undefined,


    /**
     * The epub subject.
     * @type {string}
     */
    epubSubject: undefined,


    /**
     * The epub description.
     * @type {string}
     */
    epubDescription: undefined,


    /**
     * The epub date.
     * @type {string}
     */
    epubDate: undefined,


    /**
     * The epub rights.
     * @type {string}
     */
    epubRights: undefined,


    /**
     * If true, InDesign will use existing image for graphic objects on export.
     * @type {boolean}
     */
    useExistingImageOnExport: undefined,


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
     * The epub publisher.
     * @type {string}
     */
    epubPublisher: undefined,


    /**
     * The epub unique identifier, like ISBN.
     * @type {string}
     */
    id: undefined,


    /**
     * The export order.
     * @type {ExportOrder}
     */
    exportOrder: ExportOrder,


    /**
     * The epub cover option.
     * @type {EpubCover}
     */
    epubCover: EpubCover,


    /**
     * The epub cover image file path.
     * @type {string}
     */
    coverImageFile: undefined,


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
     * Left margin of the epub.
     * @type {number}
     */
    leftMargin: undefined,


    /**
     * Right margin of the epub.
     * @type {number}
     */
    rightMargin: undefined,


    /**
     * Top margin of the epub.
     * @type {number}
     */
    topMargin: undefined,


    /**
     * Bottom margin of the epub.
     * @type {number}
     */
    bottomMargin: undefined,


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
     * If true, image page break settings will be used in objects
     * @type {boolean}
     */
    useImagePageBreak: undefined,


    /**
     * Image page break settings to be used with objects
     * @type {ImagePageBreakType}
     */
    imagePageBreak: ImagePageBreakType,


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
     * ignore object level image conversion settings.
     * @type {boolean}
     */
    ignoreObjectConversionSettings: undefined,


    /**
     * The name of TOC style to generate epub TOC.
     * @type {string}
     */
    tocStyleName: undefined,


    /**
     * If  true, break InDesign document into smaller piece when generating epub.
     * @type {boolean}
     */
    breakDocument: undefined,


    /**
     * The name of paragraph style to break InDesign document.
     * @type {string}
     */
    paragraphStyleName: undefined,


    /**
     * If  true, strip soft return.
     * @type {boolean}
     */
    stripSoftReturn: undefined,


    /**
     * If true, output local style override.
     * @type {boolean}
     */
    preserveLocalOverride: undefined,


    /**
     * If true, embed font in epub.
     * @type {boolean}
     */
    embedFont: undefined,


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
     * The version of EPUB.
     * @type {EpubVersion}
     */
    version: EpubVersion,


    /**
     * If true, InDesign will generate cascade style sheet.
     * @type {boolean}
     */
    generateCascadeStyleSheet: undefined,


    /**
     * The placement of footnote for EPub export
     * @type {EPubFootnotePlacement}
     */
    footnotePlacement: EPubFootnotePlacement,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the EPubExportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return EPubExportPreference
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

