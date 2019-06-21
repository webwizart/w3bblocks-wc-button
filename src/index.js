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
            let clickedEvt = new CustomEvent('w3bbuttonclick', { detail: { isClicked: this } });
            this.dispatchEvent(clickedEvt);
            console.log('w3bbuttonclick event dispatched');

        }
        get template() {
            return `
                <style>${getStyling()}</style>
                <button 
                    class="${this.theme} ${this.size}" 
                    ${this.disabled && 'disabled'}
                >
                    <slot name="icon-left"></slot>${this.label}<slot name="icon-right"></slot>
                </button>
            `;
        }
        get label() {
            return this.getAttribute('label')
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
        return `    
        :host, w3b-wc-button {
            height: 40px;
            cursor: pointer;
            vertical-align:middle;
        }
        ::sloted {
            vertical-align:middle;
        }
        button {
            border-radius: 10px;
            padding: 8px;
            vertical-align:middle;
        }  
        .primary {
            background-color: var(--w3b-primary-background-color);
            border: var(--w3b-primary-border);
            color: var(--w3b-primary-color);
        }
          
        .danger {
            background-color: var(--w3b-danger-background-color);
            border: var(--w3b-danger-border);
            color: var(--w3b-danger-color);
        }
    
        .secondary {
            background-color: var(--w3b-secondary-background-color);
            border: var(--w3b-secondary-border);
            color: var(--w3b-secondary-color);
        }
        .small {
            font-size: var(--w3b-fontsize-small);
        }
        .medium {
            font-size: var(--w3b-fontsize-medium);
        }
        .large {
            font-size: var(--w3b-fontsize-large);
        }
        button:disabled {
            opacity: var(--w3b-opacity);
        }
        `;
    }
})();