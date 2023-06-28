/*
 * PDF color conversion policy.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var ColorConversion = {


    /**
     * Preserves color data as is.
     * @type {int}
     * @readonly
     */
    None: 0,


    /**
     * Converts all colors to the profile selected for Destination.
     * @type {int}
     * @readonly
     */
    COLORCONVERSIONTODEST: 1,


    /**
     * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
     * @type {int}
     * @readonly
     */
    COLORCONVERSIONREPURPOSE: 2,




};

