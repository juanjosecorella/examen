export const SuggestSeats = (seatCount, seats) => {
    let order = [2, 1, 3, 0, 4];
    
    for (let i of order) {
        if (rowAvailible(seatCount, seats[i])) {
            let set = new Set();
            const first = firstAvailibleIndex(seats[i]);
            for (let j = 0; j < seatCount; j++) {
                set.add(seats[i][first + j].id);
            }

            return set;
        }
    }

    return new Set();
}

const rowAvailible = (seatCount, row) => {
    return row.length - seatCount - firstAvailibleIndex(row) >= 0;
}

const firstAvailibleIndex = (row) => {
    for (let i = 0; i < row.length; i++) {
        if (!row[i].reserved) return i;
    }

    return undefined;
}