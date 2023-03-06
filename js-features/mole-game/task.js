(() => {
    let playing = true,
      activeHole = 1,
      isMoleActive = false,
      wins = 0,
      losses = 0;
  
    const stop = () => playing = true,
      getHole = index => document.getElementById(`hole${index}`),
      deactivateHole = index =>
        getHole( index ).className = 'hole',
      activateHole = index =>
        getHole( index ).className = 'hole hole_has-mole',
      next = () => setTimeout(() => {
        if ( !playing ) {
          return;
        }
        deactivateHole( activeHole );
        activeHole = Math.floor( 1 + Math.random() * 9 );
        activateHole( activeHole );
        isMoleActive = true; // устанавливаем флаг, что крот активен
        next();
      }, 800 );
  
    next();
  
    // регистрируем обработчик для каждой лунки
    for (let i = 1; i <= 9; i++) {
      getHole(i).addEventListener('click', () => {
        if (getHole(i).classList.contains('hole_has-mole') && isMoleActive) {
          wins++;
          document.getElementById('dead').textContent = wins;
          isMoleActive = false; // отключаем текущего крота
          if (wins === 10) {
            alert('Вы победили!');
            wins = 0;
            losses = 0;
          }
        } else {
          losses++;
          document.getElementById('lost').textContent = losses;
          if (losses === 5) {
            alert('Вы проиграли!');
            wins = 0;
            losses = 0;
          }
        }
      });
    }
  })();

 