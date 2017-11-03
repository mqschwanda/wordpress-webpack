<?php
/**
 * Custom Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Custom_Theme
 * @since 1.0
 */

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function custom_theme_setup()
{

    /*
     * Let WordPress manage the document title.
     * By adding theme support, we declare that this theme does not use a
     * hard-coded <title> tag in the document head, and expect WordPress to
     * provide it for us.
     */
    add_theme_support('title-tag');

    /*
     * This theme styles the visual editor to resemble the theme style,
     * specifically font, colors, and column width.
     */
    add_editor_style(array('assets/stylesheets/editor-style.css'));
}
add_action('after_setup_theme', 'custom_theme_setup');


/**
 * Enqueue scripts and styles.
 */
function custom_theme_scripts()
{
    wp_enqueue_script('webpack-bundle', get_theme_file_uri('/assets/bundle/index.js'), array(), null, true);
}
add_action('wp_enqueue_scripts', 'custom_theme_scripts');

/**
 * Use front-page.php when Front page displays is set to a static page.
 *
 * @since Custom Theme 1.0
 * @return string The template to be used: '' (defaults to index.php)
 */
function custom_theme_front_page_template()
{
    return '';
}
add_filter('frontpage_template', 'custom_theme_front_page_template');

/**
 * Customizer additions.
 */
require get_parent_theme_file_path('/inc/customizer.php');
