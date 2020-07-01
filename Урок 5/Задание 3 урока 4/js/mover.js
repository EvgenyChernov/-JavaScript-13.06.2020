let mover = {
    /**
     * Функция олучает координаты после шага игрока, и сравнивает с допустимыми границами игрового поля
     * возваращает true || false
     * @param nextPoint объект содерщаший в качестве свойств координаты игрока.
     * @return {boolean|boolean}
     */
    canPlayerMakeStep(nextPoint) {
        return nextPoint.x >= 0 &&
            nextPoint.x < config.colsCount &&
            nextPoint.y >= 0 &&
            nextPoint.y < config.rowsCount;
    },
    /**
     * Получает и отдает направления от пользователя.
     * @returns {null || number} Возвращает направление, введенное пользователем.
     */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число (2,4,6 или 8), куда Вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert("Для перемещения необходимо ввести одно из чисел 2, 4, 6 или 8.");
                continue;
            }

            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находится пользователь после движения
     * @param {int} direction Направление движения игрока.
     * @returns {{x:int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        return nextPosition;
    }
}