/*
 * Publish export preferences.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var PublishExportPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the PublishExportPreference (a Document).
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
     * The publish cover option.
     * @type {PublishCoverEnum}
     */
    publishCover: PublishCoverEnum,


    /**
     * The epub cover image file path.
     * @type {string}
     */
    coverImageFile: undefined,


    /**
     * The publish page range.
     * @type {string}
     */
    publishPageRange: undefined,


    /**
     * The publish page range format.
     * @type {PageRangeFormat}
     */
    publishPageRangeFormat: PageRangeFormat,


    /**
     * The file format to use for converted images. Note: Valid only when copy optimized images and/or copy formatted images is true.
     * @type {ImageConversion}
     */
    imageConversion: ImageConversion,


    /**
     * The export resolution
     * @type {ImageResolution}
     */
    imageExportResolution: ImageResolution,


    /**
     * The publish description.
     * @type {string}
     */
    publishDescription: undefined,


    /**
     * The file name.
     * @type {string}
     */
    publishFileName: undefined,


    /**
     * the publish format.
     * @type {PublishFormatEnum}
     */
    publishFormat: PublishFormatEnum,


    /**
     * The cover page.
     * @type {string}
     */
    coverPage: undefined,


    /**
     * The color palette for GIF conversion. Note: Not valid when image conversion is JPEG.
     * @type {GIFOptionsPalette}
     */
    gifOptionsPalette: GIFOptionsPalette,


    /**
     * The quality of converted JPEG images. Note: Not valid when image conversion is GIF.
     * @type {JPEGOptionsQuality}
     */
    jpegOptionsQuality: JPEGOptionsQuality,


    /**
     * If PDF should be uploaded while publishing.
     * @type {boolean}
     */
    publishPdf: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the PublishExportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PublishExportPreference
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

