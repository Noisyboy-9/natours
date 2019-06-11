'use strict';

export default class Popup {
  constructor(popup, popupContent, openButtons, closeButton) {
    this._popup = document.querySelector(popup);
    this._popupContent = document.querySelector(popupContent);
    this._OpenButtons = document.querySelectorAll(openButtons);
    this._closeButton = document.querySelector(closeButton);
    this.buttonClickListener();
  }

  buttonClickListener() {
    this._OpenButtons.forEach(openButton => {
      openButton.addEventListener('click', event => {
        event.preventDefault();

        this.showPopupBackground();
        this.showPopContent();
      });
    });
  }

  showPopupBackground() {
    this._popup.style.opacity = 1;
    this._popup.style.visibility = 'visible';
  }

  showPopContent() {
    this._popupContent.style.transform = 'translate(-50%, -50%) scale(1)';
    this._popupContent.style.opacity = 1;

    this.setCloseListener();
  }

  setCloseListener() {
    this._closeButton.addEventListener('click', event => {
      event.preventDefault();
      this.closePopup();
    });
  }

  closePopup() {
    this._popupContent.style.transform = 'translate(-50%, -50%) scale(.25)';
    this._popupContent.style.opacity = 0;

    this._popup.style.opacity = 0;
    this._popup.style.visibility = 'hidden';
  }
}
