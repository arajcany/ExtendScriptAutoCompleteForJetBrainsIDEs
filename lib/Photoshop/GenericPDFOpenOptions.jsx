/*
 * Options that can be specified when opening a generic PDF document.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var GenericPDFOpenOptions = {


    /**
     * The resolution of the document (in pixels per inch)
     * @type {number}
     */
    resolution: undefined,


    /**
     * The document mode.
     * @type {OpenDocumentMode}
     */
    mode: OpenDocumentMode,


    /**
     * If true, anti-aliasing is used.
     * @type {boolean}
     */
    antiAlias: undefined,


    /**
     * The number of the page or image to open.
     * @type {int}
     */
    page: int,


    /**
     * The number of the 3d object to open.
     * @type {int}
     */
    object: int,


    /**
     * DEPRECATED.
     * @type {boolean}
     */
    constrainProportions: undefined,


    /**
     * DEPRECATED.
     * @type {UnitValue}
     */
    height: UnitValue,


    /**
     * DEPRECATED.
     * @type {UnitValue}
     */
    width: UnitValue,


    /**
     * The number of bits per channel.
     * @type {BitsPerChannelType}
     */
    bitsPerChannel: BitsPerChannelType,


    /**
     * If true, the value specified in the page property refers to a page number. If false, the value specifies an image number.
     * @type {boolean}
     */
    usePageNumber: undefined,


    /**
     * If true, the value specified in the page property refers to a page number. If false, the value specifies an image number.
     * @type {boolean}
     */
    use3DObjectNumber: undefined,


    /**
     * The name of the document.
     * @type {string}
     */
    name: undefined,


    /**
     * The cropping method to use.
     * @type {CropToType}
     */
    cropPage: CropToType,


    /**
     * If true, suppresses any warnings that may occur during opening.
     * @type {boolean}
     */
    suppressWarnings: undefined,




};

