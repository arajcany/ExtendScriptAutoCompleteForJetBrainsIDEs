/*
 * Options that can be specified when opening a document in RAW format.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var RawFormatOpenOptions = {


    /**
     * The image height (in pixels)
     * @type {int}
     */
    height: int,


    /**
     * The image width (in pixels)
     * @type {int}
     */
    width: int,


    /**
     * The number of channels in the image. Valid only when 'bits per channel' = 16. Range: 1 to 56.
     * @type {int}
     */
    channelNumber: int,


    /**
     * If true, color values are stored sequentially.
     * @type {boolean}
     */
    interleaveChannels: undefined,


    /**
     * The number of bits for each channel. Valid values: 8 or 16.
     * @type {int}
     */
    bitsPerChannel: int,


    /**
     * The order in which bytes will be read. Valid only when 'bits per channel' = 16.
     * @type {ByteOrderType}
     */
    byteOrder: ByteOrderType,


    /**
     * The number of bytes of information that will appear in the file before actual image information begins; that is, the number of zeroes inserted at the beginning of the file as placeholders. Range: 0 to 1919999.
     * @type {int}
     */
    headerSize: int,


    /**
     * If true, the header is retained when saving.
     * @type {boolean}
     */
    retainHeader: undefined,




};

