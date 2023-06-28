/*
 * Options which may be supplied when opening a file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var OpenOptions = {


    /**
     * Choose to update all text objects for documents saved with legacy texts (pre-Illustrator 11)
     * @type {boolean}
     */
    updateLegacyText: false,


    /**
     * Choose to preserve the spot colors in the gradient mesh objects for legacy documents (pre-Illustrator CS3)
     * @type {boolean}
     */
    updateLegacyGradientMesh: true,


    /**
     * Open the file as library.
     * @type {LibraryType}
     */
    openAs: LibraryType.ILLUSTRATORARTWORK,


    /**
     * Preserve Legacy Artboard (pre-Illustrator CS4) when opening in CS4 or later.
     * @type {boolean}
     */
    preserveLegacyArtboard: true,


    /**
     * Convert crop area to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later. If false then crop areas are discarded.
     * @type {boolean}
     */
    convertCropAreaToArtboard: true,


    /**
     * Create Artboard with dimentions of artwork bounding box when opening legacy document (pre-Illustrator CS4) in CS4 or later.
     * @type {boolean}
     */
    createArtboardWithArtworkBoundingBox: false,


    /**
     * Convert print tiles to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later.
     * @type {boolean}
     */
    convertTilesToArtboard: false,


    /**
     * Add this file to the list of recently opened files.
     * @type {boolean}
     */
    addToRecentFiles: true,




};

