import color from 'color';

const lightScale = 0.15;
const primaryColor = '#333';
const secondaryColor = '#fff';

const smallScreen = 600;
const mediumScreen = 992;
const largeScreen = 1200;
const smallScreenUp = smallScreen + 1;
const mediumScreenUp = mediumScreen + 1;
const largeScreenUp = largeScreen + 1;

const headerHeight = 64;
const headerHeightMobile = 56;

const zDepth0 = 'none !important';
const zDepth1 = '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)';
const zDepth2 = '0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)';
const zDepth3 = '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)';
const zDepth4 = '0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3)';
const zDepth5 = '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3)';
const zDepth6 = '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)';

const componentBorderRadius = 2;
const componentPadding = 24;
const componentMargin = 10;

export default {
  // Colors
  primaryColor,
  primaryColorLight: color(primaryColor).lighten(lightScale).string(),
  primaryColorDark: color(primaryColor).darken(lightScale).string(),
  secondaryColor,
  secondaryColorLight: color(secondaryColor).lighten(lightScale).string(),
  secondaryColorDark: color(secondaryColor).darken(lightScale).string(),
  successColor: color('green').string(),
  errorColor: color('red').string(),
  linkColor: color('blue').string(),
  linkMarginRight: '24px',
  linkTransition: 'color .3s ease',
  // Media Query Ranges
  smallScreen: `${smallScreen}px`,
  mediumScreen: `${mediumScreen}px`,
  largeScreen: `${largeScreen}px`,
  smallScreenUp: `${smallScreenUp}px`,
  mediumScreenUp: `${mediumScreenUp}px`,
  largeScreenUp: `${largeScreenUp}px`,
  mediumAndUp: `only screen and (min-width : ${smallScreenUp}px)`,
  largeAndUp: `only screen and (min-width : ${mediumScreenUp}px)`,
  extraLargeAndUp: `only screen and (min-width : ${largeScreenUp}px)`,
  smallAndDown: `only screen and (max-width : ${smallScreen}px)`,
  mediumAndDown: `only screen and (max-width : ${mediumScreen}px)`,
  mediumOnly: `only screen and (min-width : ${smallScreenUp}px) and (max-width : ${mediumScreen}px)`,
  // Header
  headerHeight: `${headerHeight}px`,
  headerLineHeight: `${headerHeight}px`,
  headerHeightMobile: `${headerHeightMobile}px`,
  headerLineHeightMobile: `${headerHeightMobile}px`,
  headerFontSize: '1rem',
  headerColor: secondaryColor,
  headerBgColor: primaryColor,
  // Header
  brandHeight: `${headerHeight}px`,
  brandLineHeight: `${headerHeight}px`,
  brandHeightMobile: `${headerHeightMobile}px`,
  brandLineHeightMobile: `${headerHeightMobile}px`,
  brandFontSize: `${34}px`,
  brandColor: secondaryColor,
  brandBgColor: primaryColor,
  navLinkBgHover: 'rgba(0,0,0,0.1)',
  // Typography
  headerFontFamily: 'Roboto',
  paragraphFontFamily: 'Roboto',
  headerFontColor: '#222222',
  paragraphFontColor: '#333333',
  h1FontSize: '4.2rem',
  h2FontSize: '3.56rem',
  h3FontSize: '2.92rem',
  h4FontSize: '2.28rem',
  h5FontSize: '1.64rem',
  h6FontSize: '1rem',
  offBlack: 'rgba(0, 0, 0, 0.87)',
  // Footer
  footerColor: secondaryColor,
  footerBgColor: primaryColor,
  footerCopyrightColor: 'rgba(255,255,255,.8)',
  footerCopyrightBgColor: 'rgba(51,51,51,.08)',
  footerHeight: '40px',
  // Components
  componentShadow: zDepth1,
  componentShadowHover: zDepth2,
  componentBorder: '1px solid rgba(160, 160, 160, 0.2)',
  componentBorderRadius: `${componentBorderRadius}px`,
  componentBottomBorderRadius: `0 0 ${componentBorderRadius}px ${componentBorderRadius}px`,
  componentBgColor: '#fff',
  componentTransition: 'box-shadow .25s',
  componentPadding: `${componentPadding}px`,
  componentInternalPadding: `${componentPadding * (2 / 3)}px`,
  componentMargin: `${componentMargin}px`,
  componentTitleLineHeight: '32px',
  componentTitleMarginBottom: '8px',
  componentTitleFontSize: '24px',
  componentTitleFontWeight: 300,
  componentParagraphMargin: 0,

  // // 2. Badges
  // $badge-bg-color: $secondary-color !default;
  // $badge-height: 22px !default;
  // // 3. Buttons
  // // Shared styles
  // $button-border: none !default;
  // $button-background-focus: lighten($secondary-color, 4%) !default;
  // $button-font-size: 1rem !default;
  // $button-icon-font-size: 1.3rem !default;
  // $button-height: 36px !default;
  // $button-padding: 0 2rem !default;
  // $button-radius: 2px !default;
  // // Disabled styles
  // $button-disabled-background: #DFDFDF !default;
  // $button-disabled-color: #9F9F9F !default;
  // // Raised buttons
  // $button-raised-background: $secondary-color !default;
  // $button-raised-background-hover: lighten($button-raised-background, 5%) !default;
  // $button-raised-color: #fff !default;
  // // Large buttons
  // $button-large-icon-font-size: 1.6rem !default;
  // $button-large-height: $button-height * 1.5 !default;
  // // Flat buttons
  // $button-flat-color: #343434 !default;
  // $button-flat-disabled-color: lighten(#999, 10%) !default;
  // // Floating buttons
  // $button-floating-background: $secondary-color !default;
  // $button-floating-background-hover: $button-floating-background !default;
  // $button-floating-color: #fff !default;
  // $button-floating-size: 40px !default;
  // $button-floating-large-size: 56px !default;
  // $button-floating-radius: 50% !default;
  // // 4. Cards
  // $card-padding: 24px !default;
  // $card-bg-color: #fff !default;
  // $card-link-color: color("orange", "accent-2") !default;
  // $card-link-color-light: lighten($card-link-color, 20%) !default;
  // // 5. Carousel
  // $carousel-height: 400px !default;
  // $carousel-item-height: $carousel-height / 2 !default;
  // $carousel-item-width: $carousel-item-height !default;
  // // 6. Collapsible
  // $collapsible-height: 3rem !default;
  // $collapsible-line-height: $collapsible-height !default;
  // $collapsible-header-color: #fff !default;
  // $collapsible-border-color: #ddd !default;
  // // 7. Chips
  // $chip-bg-color: #e4e4e4 !default;
  // $chip-border-color: #9e9e9e !default;
  // $chip-selected-color: #26a69a !default;
  // $chip-margin: 5px !default;
  // // 8. Date + Time Picker
  // $datepicker-display-font-size: 2.8rem;
  // $datepicker-weekday-color: rgba(0, 0, 0, .87) !default;
  // $datepicker-weekday-bg: darken($secondary-color, 7%) !default;
  // $datepicker-date-bg: $secondary-color !default;
  // $datepicker-year: rgba(255, 255, 255, .7) !default;
  // $datepicker-focus: rgba(0,0,0, .05) !default;
  // $datepicker-selected: $secondary-color !default;
  // $datepicker-selected-outfocus: desaturate(lighten($secondary-color, 35%), 15%) !default;
  // $timepicker-clock-color: rgba(0, 0, 0, .87) !default;
  // $timepicker-clock-plate-bg: #eee;
  // // 9. Dropdown
  // $dropdown-bg-color: #fff !default;
  // $dropdown-hover-bg-color: #eee !default;
  // $dropdown-color: $secondary-color !default;
  // $dropdown-item-height: 50px !default;
  // // 11. Forms
  // // Text Inputs + Textarea
  // $input-height: 3rem !default;
  // $input-border-color: color("grey", "base") !default;
  // $input-border: 1px solid $input-border-color !default;
  // $input-background: #fff !default;
  // $input-error-color: $error-color !default;
  // $input-success-color: $success-color !default;
  // $input-focus-color: $secondary-color !default;
  // $input-font-size: 1rem !default;
  // $input-margin-bottom: 20px;
  // $input-margin: 0 0 $input-margin-bottom 0 !default;
  // $input-padding: 0 !default;
  // $input-transition: all .3s !default;
  // $label-font-size: .8rem !default;
  // $input-disabled-color: rgba(0,0,0, .42) !default;
  // $input-disabled-solid-color: #949494 !default;
  // $input-disabled-border: 1px dotted $input-disabled-color !default;
  // $input-invalid-border: 1px solid $input-error-color !default;
  // $placeholder-text-color: lighten($input-border-color, 20%) !default;
  // // Radio Buttons
  // $radio-fill-color: $secondary-color !default;
  // $radio-empty-color: #5a5a5a !default;
  // $radio-border: 2px solid $radio-fill-color !default;
  // // Range
  // $range-height: 14px !default;
  // $range-width: 14px !default;
  // $track-height: 3px !default;
  // // Select
  // $select-border: 1px solid #f2f2f2 !default;
  // $select-background: rgba(255, 255, 255, 0.90) !default;
  // $select-focus: 1px solid lighten($secondary-color, 47%) !default;
  // $select-option-hover: rgba(0,0,0,.06) !default;
  // $select-option-focus: rgba(0,0,0,.03) !default;
  // $select-padding: 5px !default;
  // $select-radius: 2px !default;
  // $select-disabled-color: rgba(0,0,0,.3) !default;
  //
  // // Switches
  // $switch-bg-color: $secondary-color !default;
  // $switch-checked-lever-bg: desaturate(lighten($switch-bg-color, 25%), 25%) !default;
  // $switch-unchecked-bg: #F1F1F1 !default;
  // $switch-unchecked-lever-bg: rgba(0,0,0,.38) !default;
  // $switch-radius: 15px !default;
  // // 13. Grid
  // $num-cols: 12 !default;
  // $gutter-width: 1.5rem !default;
  // $element-top-margin: $gutter-width/3 !default;
  // $element-bottom-margin: ($gutter-width*2)/3 !default;
  // // 15. Side Navigation
  // $sidenav-font-size: 14px !default;
  // $sidenav-font-color: rgba(0,0,0,.87) !default;
  // $sidenav-bg-color: #fff !default;
  // $sidenav-padding: 16px !default;
  // $sidenav-item-height: 48px !default;
  // $sidenav-line-height: $sidenav-item-height !default;
  // // 16. Photo Slider
  // $slider-bg-color: color('grey', 'base') !default;
  // $slider-bg-color-light: color('grey', 'lighten-2') !default;
  // $slider-indicator-color: color('green', 'base') !default;
  // // 17. Spinners | Loaders
  // $spinner-default-color: $secondary-color !default;
  // // 18. Tabs
  // $tabs-underline-color: $primary-color-light !default;
  // $tabs-text-color: $primary-color !default;
  // $tabs-bg-color: #fff !default;
  // // 19. Tables
  // $table-border-color: #d0d0d0 !default;
  // $table-striped-color: #f2f2f2 !default;
  // // 20. Toasts
  // $toast-height: 48px !default;
  // $toast-color: #323232 !default;
  // $toast-text-color: #fff !default;
  // $toast-action-color: #eeff41;
  // // 23. Flow Text
  // $range : $large-screen - $small-screen !default;
  // $intervals: 20 !default;
  // $interval-size: $range / $intervals !default;
  // // 24. Collections
  // $collection-border-color: #e0e0e0 !default;
  // $collection-bg-color: #fff !default;
  // $collection-active-bg-color: $secondary-color !default;
  // $collection-active-color: lighten($secondary-color, 55%) !default;
  // $collection-hover-bg-color: #ddd !default;
  // $collection-link-color: $secondary-color !default;
  // $collection-line-height: 1.5rem !default;
  // // 25. Progress Bar
  // $progress-bar-color: $secondary-color !default;
};
