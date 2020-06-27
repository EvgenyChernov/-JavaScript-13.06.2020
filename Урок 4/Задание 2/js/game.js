let game = {
    /**
     * Запускает игру
     */
    run() {
        while (true) {
            // получаем направлеие от игрока.
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра окончена");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            if (mover.canPlayerMakeStep(nextPoint)) { // в случае выполнения условия координаты игрока перезапишутся, игровое поле очистится и заново отрисуется
                player.move(nextPoint);
                renderer.clear();
                renderer.render();
            } else {
                alert("Допустимы шаги в рамках игрового поля ")
            }

        }
    },
    /**
     * Этот метод выполняется при открытии страницы
     */
    init() {
        console.log("Ваше положение на поле в виде о.")
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};
game.init();
