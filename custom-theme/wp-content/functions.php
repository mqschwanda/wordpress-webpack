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
  // This script styles the visual editor to resemble the theme style
  function editor_style()
  {
    wp_enqueue_style(
      'editor-style',
      get_theme_file_uri('/assets/stylesheets/editor.css')
    );

    wp_enqueue_script(
      'webpack-style-js',
      get_theme_file_uri('/assets/javascripts/style.js'),
      array(),
      null,
      true
    );

    wp_enqueue_script(
      'editor-bundle',
      get_theme_file_uri('/assets/javascripts/customizer.js'),
      array(),
      null,
      true
    );
  }
  add_action('editor_enqueue_scripts', 'editor_style');
}
add_action('after_setup_theme', 'custom_theme_setup');


// Enqueue scripts and styles.
function custom_theme_scripts()
{

  wp_enqueue_style(
    'webpack-css',
    get_theme_file_uri('/assets/stylesheets/index.css')
  );

  wp_enqueue_script(
    'webpack-style-js',
    get_theme_file_uri('/assets/javascripts/style.js'),
    array(),
    null,
    true
  );

  wp_enqueue_script(
    'webpack-js',
    get_theme_file_uri('/assets/javascripts/index.js'),
    array(),
    null,
    true
  );
}
add_action('wp_enqueue_scripts', 'custom_theme_scripts');

// Editor additions.
require get_parent_theme_file_path('/editor.php');
