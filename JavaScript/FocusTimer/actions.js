import state from "./state.js"
import { countdown, updateDisplay } from "./timer.js"
import * as elements from "./elements.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    updateDisplay()
}

export function set() {
    elements.minutes.setAttribute('contenteditable', true)
    elements.minutes.focus()
}

export function addMinutes() {
    if (state.minutes > 59) {
        return
    }

    elements.minutes.textContent = String(state.minutes += 5).padStart(2, "0")
}

export function removeMinutes() {
    if(elements.minutes.textContent < 5) {
        return
    } 

    elements.minutes.textContent = String(state.minutes -= 5).padStart(2, "0")
}