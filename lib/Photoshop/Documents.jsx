/*
 * A collection of documents.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var Documents = {


    /**
     * The object's container.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The class name of the object.
     * @type {string}
     * @readonly
     */
    typename: undefined,


    /**
     * Number of elements in the collection.
     * @type {int}
     * @readonly
     */
    length: int,



    /**
     * A document.
     *
     * @param {UnitValue} [width] The width of the document.
     * @param {UnitValue} [height] The height of the document.
     * @param {number} [resolution] The resolution of the document (in pixels per inch) (default: 72)
     * @param {string} [name] The name of the document.
     * @param {NewDocumentMode} [mode] The document mode. (default: NewDocumentMode.RGB)
     * @param {DocumentFill} [initialFill] The initial fill of the document. (default: DocumentFill.WHITE)
     * @param {number} [pixelAspectRatio] The initial pixel aspect ratio of the document. (default: 1.0)
     * @param {BitsPerChannelType} [bitsPerChannel] The number of bits per channel. (default: BitsPerChannelType.EIGHT)
     * @param {string} [colorProfileName] The name of color profile for document.
     * @return Document
     */
    add: function (width, height, resolution, name, mode, initialFill, pixelAspectRatio, bitsPerChannel, colorProfileName) {
        
    },


    /**
     * Get the first element in the collection with the provided name.
     *
     * @param {string} [name]
     * @return Document
     */
    getByName: function (name) {
        
    },


    /**
     * Get an element in the collection with the provided index.
     *
     * @param {uint} [index]
     * @return Document
     */
    []: function (index) {
        
    },


};

