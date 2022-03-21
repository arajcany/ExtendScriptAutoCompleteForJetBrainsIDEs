/*
 * Book content file status options.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var BookContentStatus = {


    /**
     * The book content object is not open and is unchanged.
     * @type {number}
     * @readonly
     */
    NORMAL: 1852797549,


    /**
     * The book content object is missing because it has been moved, renamed, or deleted.
     * @type {number}
     * @readonly
     */
    MISSING_DOCUMENT: 1148150605,


    /**
     * The book content object has been modified after repagination.
     * @type {number}
     * @readonly
     */
    DOCUMENT_OUT_OF_DATE: 1148150596,


    /**
     * The book content object is being used by someone else and is therefore locked.
     * @type {number}
     * @readonly
     */
    DOCUMENT_IN_USE: 1148150601,


    /**
     * The book content object is open.
     * @type {number}
     * @readonly
     */
    DOCUMENT_IS_OPEN: 1148150607,




};

