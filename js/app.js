const tween = KUTE.fromTo(
    '#border1',
    { path: 'border1'},
    { path: 'border2'},
    { repeat: 999, duration: 3000, yoyo: true}
)

tween.start()