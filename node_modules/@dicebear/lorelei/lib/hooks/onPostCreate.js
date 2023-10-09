/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/FCwwMBxsRND9Mbtpg5PUic
 */
export function onPostCreate({ prng, options, components, colors }) {
    if (components.beard && colors.hair === colors.mouth) {
        colors.mouth = '#ffffff';
    }
}
