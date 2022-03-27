/*
 * When should a JavaScript debugger be shown.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var JavaScriptExecutionMode = {


    /**
     * Never show the JavaScript debugger. Treat runtime errors by throwing a JavaScript exceptions.
     * @type {int}
     * @readonly
     */
    never: 1,


    /**
     * Show the JavaScript debugger is a runtime error occurs.
     * @type {int}
     * @readonly
     */
    OnRuntimeError: 2,


    /**
     * Show the JavaScript debugger at the first line of the JavaScript.
     * @type {int}
     * @readonly
     */
    BeforeRunning: 3,




};

