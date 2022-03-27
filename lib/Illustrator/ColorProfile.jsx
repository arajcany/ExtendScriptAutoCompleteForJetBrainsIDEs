/*
 * PDF ICC profile inclusion.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var ColorProfile = {


    /**
     * All profiles removed (embedProfile == false)
     * @type {int}
     * @readonly
     */
    None: 0,


    /**
     * Everything gets tagged (embedProfile == true)
     * @type {int}
     * @readonly
     */
    INCLUDEALLPROFILE: 1,


    /**
     * Leave tagged items tagged, untagged items untagged.
     * @type {int}
     * @readonly
     */
    LEAVEPROFILEUNCHANGED: 2,


    /**
     * Tag all RGB, leave CMYK unchanged.
     * @type {int}
     * @readonly
     */
    INCLUDERGBPROFILE: 3,


    /**
     * Everything ends up tagged with the destination profile.
     * @type {int}
     * @readonly
     */
    INCLUDEDESTPROFILE: 4,




};

