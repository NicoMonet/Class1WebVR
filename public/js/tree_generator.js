function generateNumber(){
    return(Math.floor(Math.random() * 50));
}

function generatePositionVector(){
    return(generateNumber() + " " + 0 + " " + generateNumber() + " ");
}

window.onload = function(){

    
    let scene = document.querySelector('a-scene');

    document.addEventListener('keyup', function (k) {
        if (k.keyCode == 32) {
            for(let i=0; i < 25; i++) {

                let entity = document.createElement('a-entity');

                entity.setAttribute('obj-model', 'obj: #tree');
                entity.setAttribute('material', 'src: #texture');
                entity.setAttribute('position', generatePositionVector());

                scene.appendChild(entity);

                // console.log(generateNumber());
                console.log(generatePositionVector());
            }
        }
    });
}