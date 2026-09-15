export class UIManager {
    static clearScreen() {
        document.getElementById('output').innerHTML = "";
    }
    static displayTitle(title) {
        document.getElementById('output').innerHTML += `<h1>${title}</h1>`;
    }
    static displaySubtitle(subtitle) {
        document.getElementById('output').innerHTML += `<h3>${subtitle}</h3>`;
    }
    static logEvent(message) {
        document.getElementById('output').innerHTML += `<p>> ${message}</p>`;
    }
}