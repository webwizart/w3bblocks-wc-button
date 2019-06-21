"use strict";

(function () {
  class W3bWcButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.innerHTML = this.template;
    }

    connectedCallback() {
      // if the button isn't disabled, attach click event!
      if (!this.disabled) {
        this.addEventListener('click', this.onButtonClick);
      }
    }

    disconnectedCallback() {
      this.removeEventListener('click', this.onButtonClick);
      console.log(this.isConnected());
    }

    static get observedAttributes() {
      return ['disabled, label, theme, size'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      this.shadowRoot.innerHTML = this.template;
    }

    onButtonClick() {
      let clickedEvt = new CustomEvent('w3bbuttonclick', {
        detail: {
          isClicked: this
        }
      });
      this.dispatchEvent(clickedEvt);
      console.log('w3bbuttonclick event dispatched');
    }

    get template() {
      return "\n                <style>".concat(getStyling(), "</style>\n                <button \n                    class=\"").concat(this.theme, " ").concat(this.size, "\" \n                    ").concat(this.disabled && 'disabled', "\n                >\n                    <slot name=\"icon-left\"></slot>").concat(this.label, "<slot name=\"icon-right\"></slot>\n                </button>\n            ");
    }

    get label() {
      return this.getAttribute('label');
    }

    set label(value) {
      this.setAttribute('label', value);
    }

    get disabled() {
      return this.hasAttribute('disabled');
    }

    set disabled(isDisabled) {
      if (isDisabled === '' || isDisabled === true) {
        this.removeEventListener('click', this.onButtonClick);
        this.setAttribute('disabled', '');
      } else {
        this.addEventListener('click', this.onButtonClick);
        this.removeAttribute('disabled');
      }
    }

    get size() {
      return this.getAttribute('size');
    }

    set size(value) {
      this.setAttribute('size', value);
    }

    get theme() {
      return this.getAttribute('theme');
    }

    set theme(value) {
      this.setAttribute('theme', value);
    }

  }

  customElements.define("w3b-wc-button", W3bWcButton);
  /**
   * Private function:
   * ------------------------------------------------
   * Return the styling of this component in a string => used in the template getter
   */

  function getStyling() {
    return "    \n        :host, w3b-wc-button {\n            height: 40px;\n            cursor: pointer;\n            vertical-align:middle;\n        }\n        ::sloted {\n            vertical-align:middle;\n        }\n        button {\n            border-radius: 10px;\n            padding: 8px;\n            vertical-align:middle;\n        }  \n        .primary {\n            background-color: var(--w3b-primary-background-color);\n            border: var(--w3b-primary-border);\n            color: var(--w3b-primary-color);\n        }\n          \n        .danger {\n            background-color: var(--w3b-danger-background-color);\n            border: var(--w3b-danger-border);\n            color: var(--w3b-danger-color);\n        }\n    \n        .secondary {\n            background-color: var(--w3b-secondary-background-color);\n            border: var(--w3b-secondary-border);\n            color: var(--w3b-secondary-color);\n        }\n        .small {\n            font-size: var(--w3b-fontsize-small);\n        }\n        .medium {\n            font-size: var(--w3b-fontsize-medium);\n        }\n        .large {\n            font-size: var(--w3b-fontsize-large);\n        }\n        button:disabled {\n            opacity: var(--w3b-opacity);\n        }\n        ";
  }
})();