'use strict';
import navigationShowAnimation from './lib/NavigationShowAnimation';
import Popup from './lib/Popup';

new navigationShowAnimation(
  '#navigation-nav',
  '#navigation-background',
  '#navigation-button',
  '#navigation-icon'
);

new Popup('#popup', '#popup-content', '#showPopupBtn', '#popup-close');
