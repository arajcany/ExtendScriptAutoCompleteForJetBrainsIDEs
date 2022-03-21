/*
 * Options for downloading fonts to the printer.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var FontDownloading = {


    /**
     * Downloads only references to fonts. Note: Use when fonts reside in the printer.
     * @type {number}
     * @readonly
     */
    NONE: 1852796517,


    /**
     * Downloads all fonts once per page.
     * @type {number}
     * @readonly
     */
    COMPLETE: 2003332197,


    /**
     * Downloads only the characters (glyphs) used in the document. Glyphs are downloaded once per page.
     * @type {number}
     * @readonly
     */
    SUBSET: 1768842098,


    /**
     * Downloads only the characters (glyphs) used in the document. Glyphs are downloaded once per page. Note: Use when the number of glyphs exceeds 350.
     * @type {number}
     * @readonly
     */
    SUBSET_LARGE: 1818325607,




};

