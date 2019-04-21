$ = (queryString) => document.querySelector(queryString);
const shiftSound = (sound1) => (sound1 + 1);
let sound1 = 0;
const animate1 = () => {
        sound1 = sound1 + .02;
        if (sound1 > 20){sound1 = -20};
        const position1 = sound1.toString() + ' 0 0';
        console.log(position1);
        $('a-sound').setAttribute('position', position1);
        requestAnimationFrame(animate1);
};
requestAnimationFrame(animate1);
