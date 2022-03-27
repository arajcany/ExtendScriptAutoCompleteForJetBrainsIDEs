/*
 * Options which may be supplied when saving a document as an FXG file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var FXGSaveOptions = {


    /**
     * All the artboards or range of the artboards will be saved.
     * @type {boolean}
     */
    saveMultipleArtboards: false,


    /**
     * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
     * @type {string}
     */
    artboardRange: undefined,


    /**
     * The version of the FXG file format to create.
     * @type {FXGVersion}
     */
    version: FXGVersion.VERSION2PT0,


    /**
     * Choose to preserve the editing capabilities of FXG.
     * @type {boolean}
     */
    preserveEditingCapabilities: true,


    /**
     * Choose to include unused symbols.
     * @type {boolean}
     */
    includeUnusedSymbols: false,


    /**
     * Choose to downsample the linked images(72ppi)
     * @type {boolean}
     */
    downsampleLinkedImages: false,


    /**
     * Choose to include metadata (XMP)
     * @type {boolean}
     */
    includeMetadata: false,


    /**
     * The policy used by FXG to preserve filters.
     * @type {FiltersPreservePolicy}
     */
    filtersPolicy: FiltersPreservePolicy.KEEPFILTERSEDITABLE,


    /**
     * The policy used by FXG to preserve text.
     * @type {TextPreservePolicy}
     */
    textPolicy: TextPreservePolicy.AUTOMATICALLYCONVERTTEXT,


    /**
     * The policy used by FXG to preserve gradients.
     * @type {GradientsPreservePolicy}
     */
    gradientsPolicy: GradientsPreservePolicy.AUTOMATICALLYCONVERTGRADIENTS,


    /**
     * The policy used by FXG to expand blends.
     * @type {BlendsExpandPolicy}
     */
    blendsPolicy: BlendsExpandPolicy.AUTOMATICALLYCONVERTBLENDS,




};

