/*
 * A character string. Each character is adressable by index.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var String = {


    /**
     * The length of the string.
     * @type {number}
     * @readonly
     */
    length: undefined,



    /**
     * Returns a string created by concatenation one or more characters specified as ASCII values.
     *
     * @param {number} [value1] One or more ASCII values.
     * @return String
     */
    fromCharCode: function (value1) {
        
    },


    /**
     * Returns itself.
     *
     * @return string
     */
    toString: function () {
        
    },


    /**
     * Creates a string representation of this object that can be fed back to ;eval() ;to re-create an object. Works only with built-in classes.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns itself.
     *
     * @return string
     */
    valueOf: function () {
        
    },


    /**
     * Returns the character at the specified index.
     *
     * @param {number} [index] An integer between 0 and string.length -1, specifying the character to return.
     * @return string
     */
    charAt: function (index) {
        
    },


    /**
     * Returns the Unicode value of the character at the given index.
     *
     * @param {number} [index] An integer between 0 and string.length -1, specifying the character.
     * @return number
     */
    charCodeAt: function (index) {
        
    },


    /**
     * If necessary, converts the one or more given values to strings.
     *
     * @param {string} [value] The values to be concatenated with the given string.
     * @return string
     */
    concat: function (value) {
        
    },


    /**
     * Returns the index within the string of the first occurrence of the specified string, starting the search at fromIndex if provided.
     *
     * @param {string} [searchValue] The string for which to search.
     * @param {number} [offset] The starting offset of the search.
     * @return number
     */
    indexOf: function (searchValue, offset) {
        
    },


    /**
     * Returns the index within the string of the last occurrence of the specified value.
     *
     * @param {string} [searchValue] The string for which to search.
     * @param {number} [offset] The starting offset of the search.
     * @return number
     */
    lastIndexOf: function (searchValue, offset) {
        
    },


    /**
     * Extracts a substring of the given string and returns it as a new string.
     *
     * @param {number} [startSlice] The index at which to begin extraction.
     * @param {number} [endSlice] The index at which to end extraction.
     * @return string
     */
    slice: function (startSlice, endSlice) {
        
    },


    /**
     * Returns a new string which contains all the characters of the original string converted to lowercase.
     *
     * @return string
     */
    toLowerCase: function () {
        
    },


    /**
     * Returns a new string which contains all the characters of the original string converted to uppercase.
     *
     * @return string
     */
    toUpperCase: function () {
        
    },


    /**
     * Returns a new string which contains all the characters of the original string converted to lowercase (localized).
     *
     * @return string
     */
    toLocaleLowerCase: function () {
        
    },


    /**
     * Returns a new string which contains all the characters of the original string converted to uppercase (localized).
     *
     * @return string
     */
    toLocaleUpperCase: function () {
        
    },


    /**
     * Performs a localized comparison of two strings.
     *
     * @param {string} [what] The string to compare with.
     * @return number
     */
    localeCompare: function (what) {
        
    },


    /**
     * Matches a string against a regular expression.
     *
     * @param {RegExp} [regexp] The regular expression to use.
     * @return Array
     */
    match: function (regexp) {
        
    },


    /**
     * 
     *
     * @param {any} [what] 
     * @param {string} [withXYZ]
     * @return string
     */
    replace: function (what, withXYZ) {
        
    },


    /**
     * 
     *
     * @param {RegExp} [search]
     * @return number
     */
    search: function (search) {
        
    },


    /**
     * Splits a string into a group of substrings, places those strings in an array, and returns the array.
     *
     * @param {string} [delimiter] Specifies the string to use for delimiting.
     * @param {number} [limit]
     * @return string
     */
    split: function (delimiter, limit) {
        
    },


    /**
     * Returns a string containing the characters beginning at the specified index, start, through the specified number of characters.
     *
     * @param {number} [start] Location at which to begin extracting characters.
     * @param {number} [length] (OptIonal) The number of characters to extract.
     * @return string
     */
    substr: function (start, length) {
        
    },


    /**
     * Returns a substring of the given string by extracting characters from indexA up to but not including indexB.
     *
     * @param {number} [indexA] The index to begin extracting.
     * @param {number} [indexB] (Optional) The index at which to end extraction.
     * @return string
     */
    substring: function (indexA, indexB) {
        
    },


    /**
     * Returns a string consisting of this string enclosed in a <a> tag.
     *
     * @param {string} [name] The text to be stored in the anchors' name attribute.
     * @return string
     */
    anchor: function (name) {
        
    },


    /**
     * Returns a string consisting of this string enclosed in a <big> tag.
     *
     * @return string
     */
    big: function () {
        
    },


    /**
     * Returns a string consisting of this string enclosed in a <blink> tag.
     *
     * @return string
     */
    blink: function () {
        
    },


    /**
     * Returns a string consisting of this string enclosed in a <b> tag.
     *
     * @return string
     */
    bold: function () {
        
    },


    /**
     * Returns a string consisting of this string enclosed in a <tt> tag.
     *
     * @return string
     */
    fixed: function () {
        
    },


    /**
     * Returns a string consisting of this string enclosed in a <font> tag.
     *
     * @param {string} [color] The value to be stored in the tag's color attribute.
     * @return string
     */
    fontcolor: function (color) {
        
    },


    /**
     * Returns a string consisting of this string enclosed in a <font> tag.
     *
     * @param {number} [size] The value to be stored in the tag's size attribute.
     * @return string
     */
    fontsize: function (size) {
        
    },


    /**
     * Returns a string consisting of this string enclosed in a <i> tag.
     *
     * @return string
     */
    italics: function () {
        
    },


    /**
     * Returns a string consisting of this string enclosed in a <a> tag.
     *
     * @param {string} [href] The value to be stored in the tag's href attribute.
     * @return string
     */
    link: function (href) {
        
    },


    /**
     * Returns a string consisting of this string enclosed in a <small> tag.
     *
     * @return string
     */
    small: function () {
        
    },


    /**
     * Returns a string consisting of this string enclosed in a <strike> tag.
     *
     * @return string
     */
    strike: function () {
        
    },


    /**
     * Returns a string consisting of this string enclosed in a <sub> tag.
     *
     * @return string
     */
    sub: function () {
        
    },


    /**
     * Returns a string consisting of this string enclosed in a <sup> tag.
     *
     * @return string
     */
    sup: function () {
        
    },


};

