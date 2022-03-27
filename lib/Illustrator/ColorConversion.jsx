/*
 * PDF color conversion policy.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
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

