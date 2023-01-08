const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const card_type = [
    // 光
    "Hikari",

    // 種
    "Tane",

    // 短冊
    "Tanzaku",

    // 滓
    "Kasu",
];

const deck_info = [
    // January
    { month: 1, type: 1 },
    { month: 1, type: 3 },
    { month: 1, type: 4, num: 1 },
    { month: 1, type: 4, num: 2 },

    // Feburary
    { month: 2, type: 2 },
    { month: 2, type: 3 },
    { month: 2, type: 4, num: 1 },
    { month: 2, type: 4, num: 2 },

    // March
    { month: 3, type: 1 },
    { month: 3, type: 3 },
    { month: 3, type: 4, num: 1 },
    { month: 3, type: 4, num: 2 },

    // April
    { month: 4, type: 2 },
    { month: 4, type: 3 },
    { month: 4, type: 4, num: 1 },
    { month: 4, type: 4, num: 2 },

    // May
    { month: 5, type: 2 },
    { month: 5, type: 3 },
    { month: 5, type: 4, num: 1 },
    { month: 5, type: 4, num: 2 },

    // June
    { month: 6, type: 2 },
    { month: 6, type: 3 },
    { month: 6, type: 4, num: 1 },
    { month: 6, type: 4, num: 2 },

    // July
    { month: 7, type: 2 },
    { month: 7, type: 3 },
    { month: 7, type: 4, num: 1 },
    { month: 7, type: 4, num: 2 },

    // August
    { month: 8, type: 1 },
    { month: 8, type: 2 },
    { month: 8, type: 4, num: 1 },
    { month: 8, type: 4, num: 2 },

    // September
    { month: 9, type: 2 },
    { month: 9, type: 3 },
    { month: 9, type: 4, num: 1 },
    { month: 9, type: 4, num: 2 },

    // October
    { month: 10, type: 2 },
    { month: 10, type: 3 },
    { month: 10, type: 4, num: 1 },
    { month: 10, type: 4, num: 2 },

    // November
    { month: 11, type: 1 },
    { month: 11, type: 2 },
    { month: 11, type: 3 },
    { month: 11, type: 4 },

    // December
    { month: 12, type: 1 },
    { month: 12, type: 4, num: 1 },
    { month: 12, type: 4, num: 2 },
    { month: 12, type: 4, num: 3 },
];

const deck = deck_info.map((card) => {
    return {
        name:
            "./assets/" + [
                "Hanafuda",
                months[card.month - 1],
                card_type[card.type - 1],
                "num" in card ? card.num : null,
            ]
                .filter((i) => i !== null)
                .join("_") + ".svg.png",
        ...card,
    };
});

export default deck;
