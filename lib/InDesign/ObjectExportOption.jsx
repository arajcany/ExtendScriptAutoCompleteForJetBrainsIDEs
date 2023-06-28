/*
 * Export options for the object
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var ObjectExportOption = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the ObjectExportOption (a ObjectStyle, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, TextFrame or EndnoteTextFrame).
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
     * The epub type as recommended by IDPF
     * @type {string}
     */
    epubType: undefined,


    /**
     * size settings to be used for the object
     * @type {SizeTypeEnum}
     */
    sizeType: SizeTypeEnum,


    /**
     * Custom size applied to the object
     * @type {string}
     */
    customSize: undefined,


    /**
     * Preserve Appearance from Layout
     * @type {PreserveAppearanceFromLayoutEnum}
     */
    preserveAppearanceFromLayout: PreserveAppearanceFromLayoutEnum,


    /**
     * The source type of alternate text
     * @type {SourceType}
     */
    altTextSourceType: SourceType,


    /**
     * The source type of actual text
     * @type {SourceType}
     */
    actualTextSourceType: SourceType,


    /**
     * The custom alternate text entered by the user
     * @type {string}
     */
    customAltText: undefined,


    /**
     * The custom actual text entered by the user
     * @type {string}
     */
    customActualText: undefined,


    /**
     * The metadata property to use as source of alternate text. Can return: Ordered array containing namespacePrefix:String, propertyPath:String.
     * @type {varies=any}
     */
    altMetadataProperty: undefined,


    /**
     * The metadata property to use as source of actual text. Can return: Ordered array containing namespacePrefix:String, propertyPath:String.
     * @type {varies=any}
     */
    actualMetadataProperty: undefined,


    /**
     * The tag type of page item
     * @type {TagType}
     */
    applyTagType: TagType,


    /**
     * Allows user to select the image format for conversion
     * @type {ImageFormat}
     */
    imageConversionType: ImageFormat,


    /**
     * The export resolution
     * @type {ImageResolution}
     */
    imageExportResolution: ImageResolution,


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
     * If true, custom layout is enabled for object
     * @type {boolean}
     */
    customLayout: undefined,


    /**
     * Custom Layout settings to be used for object
     * @type {CustomLayoutTypeEnum}
     */
    customLayoutType: CustomLayoutTypeEnum,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Provides the alternate text for the object
     *
     * @return string
     */
    altText: function () {
        
    },


    /**
     * Provides the actual text for the object
     *
     * @return string
     */
    actualText: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the ObjectExportOption.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ObjectExportOption
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

