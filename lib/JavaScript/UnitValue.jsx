/*
 * Represents a measurement as a combination of values and unit.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var UnitValue = {


    /**
     * The base unit for all conversions.
     * @type {UnitValue}
     */
    baseUnit: UnitValue,


    /**
     * The unit name.
     * @type {string}
     * @readonly
     */
    type: undefined,


    /**
     * The numeric value.
     * @type {number}
     */
    value: undefined,


    /**
     * The base unit.
     * @type {UnitValue}
     */
    baseUnit: UnitValue,



    /**
     * Converts this instance to a different unit.
     *
     * @param {string} [unitName] The unit name.
     * @return any
     */
    convert: function (unitName) {
        
    },


    /**
     * Returns this instance as a different unit.
     *
     * @param {string} [unitName] The unit name.
     * @return UnitValue
     */
    as: function (unitName) {
        
    },


};

