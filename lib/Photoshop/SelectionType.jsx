/*
 * The selection behavior when a selection already exists.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var SelectionType = {


    /**
     * Replace the selected area.
     * @type {int}
     * @readonly
     */
    REPLACE: 1,


    /**
     * Add the selection to an already selected area.
     * @type {int}
     * @readonly
     */
    EXTEND: 2,


    /**
     * Remove the selection from the already selected area.
     * @type {int}
     * @readonly
     */
    DIMINISH: 3,


    /**
     * Make the selection only the area where the new selection intersects the already selected area.
     * @type {int}
     * @readonly
     */
    INTERSECT: 4,




};

