import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './AutoPlay.js'

const video = document.getElementById('video')
const btn = document.getElementById('btn')
const toggleMute = document.getElementById('toggleMute')


const player = new MediaPlayer({el: video, plugins: [new AutoPlay()]})    

btn.onclick = () => player.togglePlay()
toggleMute.onclick = () => player.toggleMute()
