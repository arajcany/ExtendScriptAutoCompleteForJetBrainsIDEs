/*
 * The application's behavior regarding image previews and file extensions when a save method is called.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var SaveBehavior = {


    /**
     * Never save the item with the file.
     * @type {int}
     * @readonly
     */
    NEVERSAVE: 1,


    /**
     * Always save the item with the file.
     * @type {int}
     * @readonly
     */
    ALWAYSSAVE: 2,


    /**
     * Prompt the user whether to save the item with the file.
     * @type {int}
     * @readonly
     */
    ASKWHENSAVING: 3,




};

