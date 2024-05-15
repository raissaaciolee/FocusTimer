import { controls, soundButtons } from "./elements.js"
import * as actions from "./actions.js"
import * as sounds from "./sounds.js"
import * as elements from "./elements.js"
import { updateDisplay } from "./timer.js"
import state from "./state.js"

export function registerControls() {
    //Controles
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action

        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })

    //Botões de Música
    soundButtons.addEventListener('click', (event) => {
        const sound = event.target.dataset.sounds

        if(typeof sounds[sound] != "function") {
            return
        }

        sounds[sound]()
    })
}

export function setMinutes() {
    elements.minutes.addEventListener('focus', () => {
        elements.minutes.textContent = ""
    })

    elements.minutes.onkeypress = (event) => /\d/.test(event.key)

    elements.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent

        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()

        elements.minutes.removeAttribute('contenteditable')
    })
}