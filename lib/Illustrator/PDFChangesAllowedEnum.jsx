/*
 * Options available for making changes to a pdf document.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var PDFChangesAllowedEnum = {


    /**
     * No changes allowed - 128bit.
     * @type {int}
     * @readonly
     */
    CHANGE128NONE: 1,


    /**
     * Editing page allowed - 128bit.
     * @type {int}
     * @readonly
     */
    CHANGE128EDITPAGE: 2,


    /**
     * Filling in of form field and signing allowed - 128bit.
     * @type {int}
     * @readonly
     */
    CHANGE128FILLFORM: 3,


    /**
     * Comment allowed - 128bit.
     * @type {int}
     * @readonly
     */
    CHANGE128COMMENTING: 4,


    /**
     * Any changes allowed except extracting of pages- 128bit.
     * @type {int}
     * @readonly
     */
    CHANGE128ANYCHANGES: 5,


    /**
     * No changes allowed - 40bit.
     * @type {int}
     * @readonly
     */
    CHANGE40NONE: 6,


    /**
     * Comment allowed - 40bit.
     * @type {int}
     * @readonly
     */
    CHANGE40COMMENTING: 7,


    /**
     * Page layout allowed - 40bit.
     * @type {int}
     * @readonly
     */
    CHANGE40PAGELAYOUT: 8,


    /**
     * Any changes allowed except extracting of pages- 40bit.
     * @type {int}
     * @readonly
     */
    CHANGE40ANYCHANGES: 9,




};

