/*
 * A collection of documents.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
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
     * Create a new document from a preset.
     *
     * @param {string} [startupPreset] The name of a startup document preset.
     * @param {DocumentPreset} [presetSettings] Custom settings to apply to the preset.
     * @param {boolean} [showOptionsDialog] If false, do not show Options dialog.
     * @return Document
     */
    addDocument: function (startupPreset, presetSettings, showOptionsDialog) {
        
    },


    /**
     * Create a document from the preset with option to throw dialog to customize present settings.
     *
     * @param {string} [startupPreset] The name of startup document preset.
     * @param {boolean} [showOptionsDialog] Argument controls if options Dialog is shown or not.
     * @return Document
     */
    addDocumentWithDialogOption: function (startupPreset, showOptionsDialog) {
        
    },


    /**
     * A document.
     *
     * @param {DocumentColorSpace} [documentColorSpace] The color model used for the document. (default: DocumentColorSpace.CMYK)
     * @param {number} [width] Width of the artboard. (default: 612.0)
     * @param {number} [height] Height of the artboard. (default: 792.0)
     * @param {Int32} [numArtboards] Number of artboards for new document.Range (1:100). (default: 1)
     * @param {DocumentArtboardLayout} [artboardLayout] Layout of artboards for new document. (default: DocumentArtboardLayout.GridByRow)
     * @param {number} [artboardSpacing] Spacing between artboards for new document. (default: 20.0)
     * @param {Int32} [artboardRowsOrCols] Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts. (default: 1)
     * @return Document
     */
    add: function (documentColorSpace, width, height, numArtboards, artboardLayout, artboardSpacing, artboardRowsOrCols) {
        
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
     * Arranges the documents in the specified style.
     *
     * @param {DocumentLayoutStyle} [layoutStyle] The document layout style.
     * @return boolean
     */
    arrange: function (layoutStyle) {
        
    },


};

