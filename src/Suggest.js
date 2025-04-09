export const SuggestSeats = (seatCount, seats) => {
    
    
    for (let row of seats) {
        if (rowAvailible(seatCount, row)) {
            let set = new Set();
            const first = firstAvailibleIndex(row);
            for (let i = 0; i < seatCount; i++) {
                set.add(row[first + i].id);
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