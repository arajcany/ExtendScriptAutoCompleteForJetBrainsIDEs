/*
 * The log of measurements taken.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var MeasurementLog = {


    /**
     * The object's container.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The class name of the object.
     * @type {string}
     * @readonly
     */
    typename: undefined,



    /**
     * Exports the specified measurements.
     *
     * @param {File} [file] The file to export to. If not specified, a 'file save' dialog is displayed.
     * @param {MeasurementRange} [range] The measurements to export. Default: selected.
     * @param {string} [dataPoints] An array of identifiers of data points to export. The order of the data points is respected in the exported file. Defaults to data points visible in Measurement Log palette.
     * @return undefined
     */
    exportMeasurements: function (file, range, dataPoints) {
        
    },


    /**
     * Deletes the specified measurements.
     *
     * @param {MeasurementRange} [range] The measurements to delete. Default: selected.
     * @return undefined
     */
    deleteMeasurements: function (range) {
        
    },


};

