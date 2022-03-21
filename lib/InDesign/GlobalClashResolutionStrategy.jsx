/*
 * The resolution strategy to employ for imported styles that have the same names as existing styles.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var GlobalClashResolutionStrategy = {


    /**
     * Overwrites existing styles whose names clash with imported items.
     * @type {number}
     * @readonly
     */
    LOAD_ALL_WITH_OVERWRITE: 1279350607,


    /**
     * Renames imported styles whose names clash with existing items to preserve existing items.
     * @type {number}
     * @readonly
     */
    LOAD_ALL_WITH_RENAME: 1279350610,


    /**
     * Does not import styles whose names clash with existing items.
     * @type {number}
     * @readonly
     */
    DO_NOT_LOAD_THE_STYLE: 1147495276,




};

