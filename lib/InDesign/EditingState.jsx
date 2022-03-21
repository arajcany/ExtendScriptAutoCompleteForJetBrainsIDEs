/*
 * The editing state of the file in Version Cue.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var EditingState = {


    /**
     * The editing status is not known.
     * @type {number}
     * @readonly
     */
    EDITING_UNKNOWN: 1986217301,


    /**
     * The file is not currently in use and is not locked.
     * @type {number}
     * @readonly
     */
    EDITING_NOWHERE: 1986217294,


    /**
     * Lock held but not usable.
     * @type {number}
     * @readonly
     */
    EDITING_REMOTELY: 1986217298,


    /**
     * The file has been modified locally and not locked.
     * @type {number}
     * @readonly
     */
    EDITING_LOCALLY: 1986217292,


    /**
     * The file has been locked locally and may be modified.
     * @type {number}
     * @readonly
     */
    EDITING_LOCALLY_LOCKED: 1986217291,


    /**
     * The file was modified locally or remotely while it was locked and therefore two versions exist.
     * @type {number}
     * @readonly
     */
    EDITING_CONFLICT: 1986217283,




};

