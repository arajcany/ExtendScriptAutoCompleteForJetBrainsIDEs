/*
 * EPub fixed layout export preferences.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var EPubFixedLayoutExportPreference = {


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
     * The parent of the EPubFixedLayoutExportPreference (a Book or Document).
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
     * The export resolution
     * @type {ImageResolution}
     */
    imageExportResolution: ImageResolution,


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
     * The name of TOC style to generate epub TOC.
     * @type {string}
     */
    tocStyleName: undefined,


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
     * The epub page range.
     * @type {string}
     */
    epubPageRange: undefined,


    /**
     * The epub page range format.
     * @type {PageRangeFormat}
     */
    epubPageRangeFormat: PageRangeFormat,


    /**
     * The control for spreads in fixed layout EPub.
     * @type {EpubFixedLayoutSpreadControl}
     */
    epubSpreadControlOptions: EpubFixedLayoutSpreadControl,


    /**
     * The epub navigation style.
     * @type {EpubNavigationStyle}
     */
    epubNavigationStyles: EpubNavigationStyle,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the EPubFixedLayoutExportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return EPubFixedLayoutExportPreference
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

