/*
 * Options for saving a document in TIFF format.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var TiffSaveOptions = {


    /**
     * If true, the alpha channels are saved.
     * @type {boolean}
     */
    alphaChannels: undefined,


    /**
     * If true, the layers are saved.
     * @type {boolean}
     */
    layers: undefined,


    /**
     * If true, the annotations are saved.
     * @type {boolean}
     */
    annotations: undefined,


    /**
     * If true, spot colors are saved.
     * @type {boolean}
     */
    spotColors: undefined,


    /**
     * If true, the color profile is embedded in the document.
     * @type {boolean}
     */
    embedColorProfile: undefined,


    /**
     * The compression type.
     * @type {TiffEncodingType}
     */
    imageCompression: TiffEncodingType.NONE,


    /**
     * The quality of the produced image, which is inversely proportionate to the amount of JPEG compression. Valid only for JPEG compressed TIFF documents. Range: 0 to 12.
     * @type {int}
     */
    jpegQuality: int,


    /**
     * The order in which the bytes will be read. Default: Mac OS when running in Mac OS, and IBM PC when running in Windows.
     * @type {ByteOrderType}
     */
    byteOrder: ByteOrderType,


    /**
     * If true, preserves multi-resolution information.
     * @type {boolean}
     */
    saveImagePyramid: false,


    /**
     * If true, saves the transparency as an additional alpha channel when the file is opened in another application.
     * @type {boolean}
     */
    transparency: undefined,


    /**
     * The method of compression to use when saving layers (as opposed to saving composite data). Valid only when 'layers' = true.
     * @type {LayerCompressionType}
     */
    layerCompression: LayerCompressionType,


    /**
     * If true, the channels in the image are interleaved.
     * @type {boolean}
     */
    interleaveChannels: true,




};

