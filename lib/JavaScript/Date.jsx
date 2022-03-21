/*
 * A date/time object.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var Date = {




    /**
     * Parses a string, returning a new Date object. The string should be similar to the string returned bt toString().
     *
     * @param {string} [text] The string to parse.
     * @return Date
     */
    parse: function (text) {
        
    },


    /**
     * Returns the number of milliseconds between midnight January 1, 1970, UTC, and the specified time.
     *
     * @param {number} [year] The year expressed in four digits, for example, 2001.
     * @param {number} [month] An integer value from 0 (Jan) to 11 (Dec). (default: 0)
     * @param {number} [day] An integer value from 1 to 31, If this argument is not supplied, its value is set to 0. (default: 0)
     * @param {number} [hours] An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0. (default: 0)
     * @param {number} [min] An integer value from 0 to 59. If this argument is not supplied, its value is set to 0. (default: 0)
     * @param {number} [sec] An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0. (default: 0)
     * @param {number} [ms] An integer value from 0 to 999. If this argument is not supplied, its value is set to 0. (default: 0)
     * @return Date
     */
    UTC: function (year, month, day, hours, min, sec, ms) {
        
    },


    /**
     * Returns the day of the month of the specified Date object in local time.
     *
     * @return number
     */
    getDate: function () {
        
    },


    /**
     * Returns the day of the week for the specified Date object in local time.
     *
     * @return number
     */
    getDay: function () {
        
    },


    /**
     * Returns the year of the specified Date object, as a difference from 1900, in local time.
     *
     * @return number
     */
    getYear: function () {
        
    },


    /**
     * Returns the four digit year of the specified Date object in local time.
     *
     * @return number
     */
    getFullYear: function () {
        
    },


    /**
     * Returns the hour of the specified Date object in local time.
     *
     * @return number
     */
    getHours: function () {
        
    },


    /**
     * Returns the milliseconds of the specified Date object in local time.
     *
     * @return number
     */
    getMilliseconds: function () {
        
    },


    /**
     * Returns the minutes of the specified Date object in local time.
     *
     * @return number
     */
    getMinutes: function () {
        
    },


    /**
     * Returns the month of the specified Date object in local time.
     *
     * @return number
     */
    getMonth: function () {
        
    },


    /**
     * Returns the seconds of the specified Date object in local time.
     *
     * @return number
     */
    getSeconds: function () {
        
    },


    /**
     * Returns the number of milliseconds since midnight January 1,1970 UTC for the specified Date object.
     *
     * @return number
     */
    getTime: function () {
        
    },


    /**
     * Returns the difference in minutes between the computer's local time and UTC.
     *
     * @return number
     */
    getTimezoneOffset: function () {
        
    },


    /**
     * Returns the day of the month of the specified Date object according to UTC.
     *
     * @return number
     */
    getUTCDate: function () {
        
    },


    /**
     * Returns the day of the week for the specified Date object according to UTC.
     *
     * @return number
     */
    getUTCDay: function () {
        
    },


    /**
     * Returns the four digit year of the specified Date object according to UTC.
     *
     * @return number
     */
    getUTCFullYear: function () {
        
    },


    /**
     * Returns the hour of the specified Date object according to UTC.
     *
     * @return number
     */
    getUTCHours: function () {
        
    },


    /**
     * Returns the milliseconds of the specified Date object according to UTC.
     *
     * @return number
     */
    getUTCMilliseconds: function () {
        
    },


    /**
     * Returns the minutes of the specified Date object according to UTC.
     *
     * @return number
     */
    getUTCMinutes: function () {
        
    },


    /**
     * Returns the month of the specified Date object according to UTC.
     *
     * @return number
     */
    getUTCMonth: function () {
        
    },


    /**
     * Returns the seconds of the specified Date object according to UTC.
     *
     * @return number
     */
    getUTCSeconds: function () {
        
    },


    /**
     * Sets the day of the month of a specified Date object according to local time.
     *
     * @param {number} [date] An integer from 1 to 31 indicating the day of the month.
     * @return number
     */
    setDate: function (date) {
        
    },


    /**
     * Sets the year of a specified Date object according to local time.
     *
     * @param {number} [year] A four-digit integer value indicating the year to set.
     * @return number
     */
    setFullYear: function (year) {
        
    },


    /**
     * Sets the hours of a specified Date object according to local time.
     *
     * @param {number} [hour] An integer value from 0 (midnight) to 23 (11 PM).
     * @return number
     */
    setHours: function (hour) {
        
    },


    /**
     * Sets the milliseconds of a specified Date object according to local time.
     *
     * @param {number} [ms] An integer value from 0 to 999.
     * @return number
     */
    setMilliseconds: function (ms) {
        
    },


    /**
     * Sets the minutes of a specified Date object according to local time.
     *
     * @param {number} [minutes] An integer value from 0 to 59.
     * @return number
     */
    setMinutes: function (minutes) {
        
    },


    /**
     * Sets the seconds of a specified Date object according to local time.
     *
     * @param {number} [seconds] An integer value from 0 to 59.
     * @return number
     */
    setSeconds: function (seconds) {
        
    },


    /**
     * Sets the month of a specified Date object according to local time.
     *
     * @param {number} [month] An integer value from 0 (Jan) to 11 (Dec).
     * @return number
     */
    setMonth: function (month) {
        
    },


    /**
     * Sets the date of a specified Date object according to universal time.
     *
     * @param {number} [date] An integer from 1 to 31 indicating the day of the month.
     * @return number
     */
    setUTCDate: function (date) {
        
    },


    /**
     * Sets the year of a specified Date object according to UTC, can also set the month and date.
     *
     * @param {number} [year] The year expressed in four digits.
     * @return number
     */
    setUTCFullYear: function (year) {
        
    },


    /**
     * Sets the hours of a specified Date object according to UTC.
     *
     * @param {number} [hours] An integer value from 0 (midnight) to 23 (11 PM) indicating the hour to be set.
     * @return number
     */
    setUTCHours: function (hours) {
        
    },


    /**
     * Sets the milliseconds of a specified Date object according to UTC.
     *
     * @param {number} [ms] An integer value in the range of 0 to 999 indicating the number of milliseconds to set.
     * @return number
     */
    setUTCMilliseconds: function (ms) {
        
    },


    /**
     * Sets the minutes of a specified Date object according to UTC.
     *
     * @param {number} [min] An integer value in the range 0 to 59 indicating the number of minutes to be set.
     * @return number
     */
    setUTCMinutes: function (min) {
        
    },


    /**
     * Sets the seconds of a specified Date object according to UTC.
     *
     * @param {number} [sec] An integer value in the range 0 to 59 indicating the number of seconds to set.
     * @return number
     */
    setUTCSeconds: function (sec) {
        
    },


    /**
     * Sets the month of a specified Date object according to UTC.
     *
     * @param {number} [month] An integer value in the range 0 (Jan.) to 11 (Dec.) indicating the month to set.
     * @return number
     */
    setUTCMonth: function (month) {
        
    },


    /**
     * Sets the date of a specified Date object in milliseconds since midnight, January 1, 1970.
     *
     * @param {number} [ms] An integer indicating the number of milliseconds between the date set and midnight, January 1, 1970.
     * @return number
     */
    setTime: function (ms) {
        
    },


    /**
     * Sets the year of a specified Date object according to local time, as a difference between the current year and 1900.
     *
     * @param {number} [year] An integer value indicating the year to set.
     * @return number
     */
    setYear: function (year) {
        
    },


    /**
     * 
     *
     * @return string
     */
    toDateString: function () {
        
    },


    /**
     * 
     *
     * @return string
     */
    toTimeString: function () {
        
    },


    /**
     * 
     *
     * @return string
     */
    toLocaleString: function () {
        
    },


    /**
     * 
     *
     * @return string
     */
    toLocaleDateString: function () {
        
    },


    /**
     * 
     *
     * @return string
     */
    toLocaleTimeString: function () {
        
    },


    /**
     * 
     *
     * @return string
     */
    toGMTString: function () {
        
    },


    /**
     * 
     *
     * @return string
     */
    toUTCString: function () {
        
    },


    /**
     * Returns a string value representing the date and time stored in the Date object in human readable format.
     *
     * @return string
     */
    toString: function () {
        
    },


    /**
     * The valueOf() method returns the number of milliseconds that have passed since midnight, Returns an integer.
     *
     * @return number
     */
    valueOf: function () {
        
    },


    /**
     * Creates a string representation of this object that can be fed back to ;eval() ;to re-create an object. Works only with built-in classes.
     *
     * @return string
     */
    toSource: function () {
        
    },


};

