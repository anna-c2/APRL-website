class ProjectCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
            </style>

            <div class="card">
            <p>
            </div>
        `

    }
}