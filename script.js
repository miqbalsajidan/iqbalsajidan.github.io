        const audio = document.getElementById('audio');
        const bunga = document.querySelector('.bunga');
        
        bunga.addEventListener('animationstart', () => {
            audio.play();
        });
        
        bunga.addEventListener('animationiteration', () => {
            audio.play();
        });
        
        bunga.addEventListener('animationend', () => {
            audio.play();
        });
        