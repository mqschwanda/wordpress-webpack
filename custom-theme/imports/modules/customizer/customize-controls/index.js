/**
 * Scripts within the customizer controls window.
 *
 * Contextually shows the color hue control and informs the preview
 * when users open or close the front page sections section.
 */

(function () {
  wp.customize.bind('ready', () => {
    // Only show the color hue control when there's a custom color scheme.
    wp.customize('colorscheme', (setting) => {
      wp.customize.control('colorscheme_hue', (control) => {
        const visibility = function () {
          if (setting.get() === 'custom') {
            control.container.slideDown(180);
          } else {
            control.container.slideUp(180);
          }
        };

        visibility();
        setting.bind(visibility);
      });
    });

    // Detect when the front page sections section is expanded (or closed) so we can adjust the preview accordingly.
    wp.customize.section('custom_theme_options', (section) => {
      section.expanded.bind((isExpanding) => {
        // Value of isExpanding will = true if you're entering the section, false if you're leaving it.
        wp.customize.previewer.send('section-highlight', { expanded: isExpanding });
      });
    });
  });
}(jQuery));
