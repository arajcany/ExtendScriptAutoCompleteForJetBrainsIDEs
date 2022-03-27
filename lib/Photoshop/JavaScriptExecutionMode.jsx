/*
 * When should a JavaScript debugger be shown.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var JavaScriptExecutionMode = {


    /**
     * Never show the JavaScript debugger. Treat runtime errors by throwing a JavaScript exceptions.
     * @type {int}
     * @readonly
     */
    NEVER: 1,


    /**
     * Show the JavaScript debugger if a runtime error occurs.
     * @type {int}
     * @readonly
     */
    ONRUNTIMEERROR: 2,


    /**
     * Show the JavaScript debugger when the first line of the JavaScript executes.
     * @type {int}
     * @readonly
     */
    BEFORERUNNING: 3,




};

