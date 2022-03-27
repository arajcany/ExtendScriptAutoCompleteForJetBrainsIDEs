/*
 * Crop box.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var PDFBoxType = {


    /**
     * Crop to ArtBox. The art box defines the extent of the page's meaningful content (including potential white space) as intended by the page's creator.
     * @type {int}
     * @readonly
     */
    PDFARTBOX: 0,


    /**
     * Crop to CropBox. The crop box is the region of the page to display and to print.
     * @type {int}
     * @readonly
     */
    PDFCROPBOX: 1,


    /**
     * Crop to TrimBox. The trim box specifies the positioning of the page's content within the imposition.
     * @type {int}
     * @readonly
     */
    PDFTRIMBOX: 2,


    /**
     * Crop to BleedBox. The bleed box defines the region to which the contents of the page should be clipped when output in a production environment.
     * @type {int}
     * @readonly
     */
    PDFBLEEDBOX: 3,


    /**
     * Crop to MediaBox. The media box is a natural size of the page. For example, the dimensions of A4 sheet of paper.
     * @type {int}
     * @readonly
     */
    PDFMEDIABOX: 4,


    /**
     * Crop to Bounding Box. The bounding box is the rectangle that encloses all text, graphics, and images on the page.
     * @type {int}
     * @readonly
     */
    PDFBOUNDINGBOX: 5,




};

