/*
 * Options for selection status in relation to previously selected objects.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var SelectionOptions = {


    /**
     * Adds the object to the existing selection; if no object was previously selected, makes the object the only selected object.
     * @type {number}
     * @readonly
     */
    ADD_TO: 1633969202,


    /**
     * Deselects the object.
     * @type {number}
     * @readonly
     */
    REMOVE_FROM: 1919249734,


    /**
     * Selects the object and deselects any previously selected objects.
     * @type {number}
     * @readonly
     */
    REPLACE_WITH: 1919250519,


    /**
     * Sets the key object. At least 2 objects must be selected, and the key object specified must be one of them.
     * @type {number}
     * @readonly
     */
    SET_KEY: 1936028779,




};

