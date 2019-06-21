
![W3bButtons](./w3bbutton.png)
# W3bButton
[https://webwizart.github.io/w3bblocks/](https://webwizart.github.io/w3bblocks/)

<!-- vscode-markdown-toc -->
* 1. [General guidance](#Generalguidance)
* 2. [Variations](#Variations)
* 3. [Labels](#Labels)
* 4. [Icons](#Icons)
* 5. [Danger Button](#DangerButton)
* 6. [Properties](#Properties)
* 7. [Examples](#Examples)
* 8. [Getting Started](#GettingStarted)
	* 8.1. [Install dependencies](#Installdependencies)
	* 8.2. [Start](#Start)
	* 8.3. [Build](#Build)
	* 8.4. [Test](#Test)
	* 8.5. [Coverage](#Coverage)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# Usage
##  1. <a name='Generalguidance'></a>General guidance
Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.

Buttons are used primarily on action items. Some examples include Add, Save, Delete, and Sign up. Each page can have one or two primary buttons. Any remaining calls-to-action should be represented as secondary buttons.

Do not use buttons as navigational elements. Instead, use links when the desired action is to take the user to a new page.

##  2. <a name='Variations'></a>Variations
- Primary -	For the principal call to action on the page.
- Secondary -	For secondary actions on each page.
- Button with icon -	When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.
- Disabled button -	Use when the user cannot proceed until an input is collected.
- Danger button -	When an action has potentially destructive effects on the user’s data (delete, remove, etc).

##  3. <a name='Labels'></a>Labels
Button labels should clearly indicate the action of the button. Use active verbs, such as Add or Delete. Use sentence-style capitalization (only the first word in a phrase and any proper nouns capitalized) and no more than three words for button labels.

For sets of buttons, use specific labels, such as Save or Discard, instead of using OK and Cancel. This is particularly helpful when the user is confirming an action.

##  4. <a name='Icons'></a>Icons
- Use icons (16px) within buttons.
- Wrap icons with `<w3b-wc-button >`
- Icons should always appear to the right of the text.
- Icons used in buttons must be directly related to the action that the user is taking.
- Icons must be the same color value as the text within a button.

##  5. <a name='DangerButton'></a>Danger Button
Danger buttons have a different visual style to inform users of potentially destructive actions they are about to take. If using the danger button as a standalone, we recommend styling it as a secondary button. Within a set, the danger button should be styled as a primary button.

# Style 
<li>--w3b-fontsize-small:</li>
<li>--w3b-fontsize-medium:</li>
<li>--w3b-fontsize-large:</li>
<li>--w3b-opacity:</li>
<li>--w3b-icon-position:</li>
<li>--w3b-primary-color:</li>
<li>--w3b-primary-background-color:</li>
<li>--w3b-primary-border:</li>
<li>--w3b-secondary-color:</li>
<li>--w3b-secondary-background-color:</li>
<li>--w3b-secondary-border:</li>
<li>--w3b-danger-color:</li>
<li>--w3b-danger-background-color:</li>
<li>--w3b-danger-border:</li>

# Code
##  6. <a name='Properties'></a>Properties
The **w3b-wc-button** component extends from **HTMLElement** and has most of the native properties. 

Custom attributes will be prefixed with `w3b`,  **w3b-style, w3b-theme, w3b-size**

 - label - **string**: The text displayed on the button or button label
 - disabled - **boolean**: the component is inactive
 - theme - **string**: `primary/secondary/danger`
 - size - **string**: `small/medium/large`
 - You can listen to the w3bbuttonclick event: 
    ```
    window.addEventListener('w3bbuttonclick', function (event) { 
        console.log(event.detail); }, true);
    ```
    Console result:
    ```
    {isClicked: w3b-wc-button.danger} {isClicked: w3b-wc-button.create}
    ```
##  7. <a name='Examples'></a>Examples
Make a new Default W3bButton
~~~ JavaScript
<w3b-wc-button ></w3b-wc-button >
~~~

Make a new Configured W3bButton
~~~ JavaScript
<div>
    <h3>Text Buttons</h3>
    <w3b-wc-button size="large" label="button" theme="primary" disabled></w3b-wc-button>
    <w3b-wc-button size="large" label="button" theme="secondary" disabled></w3b-wc-button>
</div>

~~~

##  8. <a name='GettingStarted'></a>Getting Started

###  8.1. <a name='Installdependencies'></a>Install dependencies

```
$ npm install
```

###  8.2. <a name='Start'></a>Start

Run a webserver in the root directory 'http-server (node)' or 'SimpleHTTPServer (python)'

###  8.3. <a name='Build'></a>Build

gives you a build folder and a transpiled version of the butten with styling.
tests and coverage are triggered first before build

```
$ npm run build
```

###  8.4. <a name='Test'></a>Test

```
$ npm run test
```

###  8.5. <a name='Coverage'></a>Coverage

to get a coverage report in console and a website report

```
$ npm run coverage
```
