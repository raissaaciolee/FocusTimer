import state from "./state.js"
import { musicButtons } from "./elements.js"

const musics = {
    forestMusic: new Audio('./music/Floresta.wav'),
    rainMusic: new Audio('./music/Chuva.wav'),
    coffeeShopMusic: new Audio('./music/Cafeteria.wav'),
    fireplaceMusic: new Audio('./music/Lareira.wav')
}

export function forestSound() {
    musicButtons.forestButton.classList.toggle('music-on')

    if(state.isMute) {
        musics.forestMusic.play()
    } else {
        musics.forestMusic.pause()
    }

    state.isMute = !state.isMute
    musics.forestMusic.loop = true
}

export function rainSound() {
    musicButtons.rainButton.classList.toggle('music-on')

    if(state.isMute) {
        musics.rainMusic.play()
    } else {
        musics.rainMusic.pause()
    }

    state.isMute = !state.isMute
    musics.rainMusic.loop = true
}

export function fireplaceSound() {
    musicButtons.fireplaceButton.classList.toggle('music-on')

    if(state.isMute) {
        musics.fireplaceMusic.play()
    } else {
        musics.fireplaceMusic.pause()
    }

    state.isMute = !state.isMute
    musics.fireplaceMusic.loop = true
}

export function coffeeShopSound() {
    musicButtons.coffeeButton.classList.toggle('music-on')

    if(state.isMute) {
        musics.coffeeShopMusic.play()
    } else {
        musics.coffeeShopMusic.pause()
    }

    state.isMute = !state.isMute
    musics.coffeeShopMusic.loop = true
}