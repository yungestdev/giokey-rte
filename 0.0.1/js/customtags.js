class RichTextEditor extends HTMLElement {
    constructor () {
        super();

        const container = document.createElement("div");
        container.setAttribute("class", "rtecontainer");

        container.innerHTML = `
        <div class="options">
            <!-- Text Format -->
            <button id="bold" class="option-button format">
                <i class="fa-solid fa-bold"></i>
            </button>
            <button id="italic" class="option-button format">
                <i class="fa-solid fa-italic"></i>
            </button>
            <button id="underline" class="option-button format">
                <i class="fa-solid fa-underline"></i>
            </button>
            <button id="strikethrough" class="option-button format">
                <i class="fa-solid fa-strikethrough"></i>
            </button>
            <button id="superscript" class="option-button script">
                <i class="fa-solid fa-superscript"></i>
            </button>
            <button id="subscript" class="option-button script">
                <i class="fa-solid fa-subscript"></i>
            </button>
            <!-- List -->
            <button id="insertOrderedList" class="option-button">
                <div class="fa-solid fa-list-ol"></div>
            </button>
            <button id="insertUnorderedList" class="option-button">
                <i class="fa-solid fa-list"></i>
            </button>
            <!-- Undo/Redo -->
            <button id="undo" class="option-button">
                <i class="fa-solid fa-rotate-left"></i>
            </button>
            <button id="redo" class="option-button">
                <i class="fa-solid fa-rotate-right"></i>
            </button>
            <!-- Link -->
            <button id="createLink" class="adv-option-button">
                <i class="fa fa-link"></i>
            </button>
            <button id="unlink" class="option-button">
                <i class="fa fa-unlink"></i>
            </button>
            <!-- Alignment -->
            <button id="justifyLeft" class="option-button align">
                <i class="fa-solid fa-align-left"></i>
            </button>
            <button id="justifyCenter" class="option-button align">
                <i class="fa-solid fa-align-center"></i>
            </button>
            <button id="justifyRight" class="option-button align">
                <i class="fa-solid fa-align-right"></i>
            </button>
            <button id="justifyFull" class="option-button align">
                <i class="fa-solid fa-align-justify"></i>
            </button>
            <button id="indent" class="option-button spacing">
                <i class="fa-solid fa-indent"></i>
            </button>
            <button id="outdent" class="option-button spacing">
                <i class="fa-solid fa-outdent"></i>
            </button>
            <!-- Headings -->
            <select id="formatBlock" class="adv-option-button">
                <option value="H1">H1</option>
                <option value="H2">H2</option>
                <option value="H3">H3</option>
                <option value="H4">H4</option>
                <option value="H5">H5</option>
                <option value="H6">H6</option>
            </select>
            <!-- Font -->
            <select id="fontName" class="adv-option-button"></select>
            <select id="fontSize" class="adv-option-button"></select>
            <!-- Color -->
            <div class="input-wrapper">
                <input type="color" id="foreColor" class="adv-option-button" />
                <label for="foreColor">Font Color</label>
            </div>
            <div class="input-wrapper">
                <input type="color" id="backColor" class="adv-option-button" />
                <label for="backColor">Highlight Color</label>
            </div>
        </div>
        <div id="text-input" contenteditable="true"></div>
        `;
        this.appendChild(container);
    }
}
customElements.define("giokey-rte", RichTextEditor);