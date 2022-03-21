/*
 * XML export preferences.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var XMLExportPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the XMLExportPreference (a Application or Document).
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
     * If true, displays exported XML content in a specified viewer.
     * @type {boolean}
     */
    viewAfterExport: undefined,


    /**
     * The preferred browser for viewing XML. Can return: File or NothingEnum enumerator.
     * @type {varies=any}
     */
    preferredBrowser: undefined,


    /**
     * If true, exports XML content from the selected XML element. If false, exports the entire document.
     * @type {boolean}
     */
    exportFromSelected: undefined,


    /**
     * The file encoding type for exporting XML content.
     * @type {XMLFileEncoding}
     */
    fileEncoding: XMLFileEncoding,


    /**
     * If true, includes Ruby text in the exported XML content.
     * @type {boolean}
     */
    ruby: undefined,


    /**
     * If true, excludes the DTD from the exported XML content.
     * @type {boolean}
     */
    excludeDtd: undefined,


    /**
     * If true, copies original images to the images subfolder.
     * @type {boolean}
     */
    copyOriginalImages: undefined,


    /**
     * If true, copies optimized images to the images subfolder.
     * @type {boolean}
     */
    copyOptimizedImages: undefined,


    /**
     * If true, copies formatted images to the images subfolder.
     * @type {boolean}
     */
    copyFormattedImages: undefined,


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
     * If true, transforms the XML using an XSLT file.
     * @type {boolean}
     */
    allowTransform: undefined,


    /**
     * The name of the XSLT file. Note: Valid when allow transform is true. Can return: File or XMLTransformFile enumerator.
     * @type {varies=any}
     */
    transformFilename: undefined,


    /**
     * If true, replaces special characters with character references.
     * @type {boolean}
     */
    characterReferences: undefined,


    /**
     * The export format for untagged tables in tagged stories.
     * @type {XMLExportUntaggedTablesFormat}
     */
    exportUntaggedTablesFormat: XMLExportUntaggedTablesFormat.CALS,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the XMLExportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return XMLExportPreference
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

