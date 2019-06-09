'use strict';

export default class navigationShowAnimation {
  constructor(nav, background, button, icon) {
    nav = document.querySelector(nav);
    background = document.querySelector(background);
    button = document.querySelector(button);
    icon = document.querySelector(icon);

    this._nav = nav;
    this._background = background;
    this._button = button;
    this._icon = icon;
    this._show = false; //Boolean showing the navigation or not

    this.setButtonClickListener();
  }

  setButtonClickListener() {
    this._button.addEventListener('click', e => {
      e.preventDefault();
      this._show = !this._show;
      this.toggleBackground();
      this.showNavigation();
      this.toggleIconStatus();
    });
  }

  toggleBackground() {
    if (this._show) {
      this._background.style.transform = 'scale(80)';
    } else {
      this._background.style.transform = 'scale(1)';
    }
  }

  showNavigation() {
    if (this._show) {
      this._nav.style.width = '100%';
      this._nav.style.opacity = '1';
    } else {
      this._nav.style.width = '0%';
      this._nav.style.opacity = '0';
    }
  }

  toggleIconStatus() {
    if (this._show) {
      this._icon.classList.add('navigation__icon--for-animation');
    } else {
      this._icon.classList.remove('navigation__icon--for-animation');
    }
  }
}
