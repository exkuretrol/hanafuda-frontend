const combinations = [
    {
        name: "五光",
        description: "光牌 5 張。",
        points: 10,
        cards: [
            { month: 1, type: 1 },
            { month: 3, type: 1 },
            { month: 8, type: 1 },
            { month: 11, type: 1 },
            { month: 12, type: 1 },
        ],
    },
    {
        name: "四光",
        description: "不包含雨的光牌 4 張。",
        points: 8,
        cards: [
            { month: 1, type: 1 },
            { month: 3, type: 1 },
            { month: 8, type: 1 },
            { month: 12, type: 1 },
        ],
    },
    {
        name: "雨四光",
        description: "包含雨的光牌 4 張。",
        points: 7,
        cards: [
            { month: 1, type: 1 },
            { month: 3, type: 1 },
            { month: 8, type: 1 },
            { month: 11, type: 1 },
        ]
    },
    {
        name: "三光",
        description: "不包含雨的光牌 3 張。",
        points: 5,
        cards: [
            { month: 1, type: 1 },
            { month: 3, type: 1 },
            { month: 8, type: 1 },
        ]
    },
    {
        name: "豬鹿蝶",
        description: "六月、七月、十月的種牌。",
        points: 5,
        cards: [
            { month: 6, type: 2 },
            { month: 7, type: 2 },
            { month: 10, type: 2 },
        ]
    },
    {
        name: "赤短",
        description: "一月、二月、三月的短冊牌。",
        points: 5,
        cards: [
            { month: 1, type: 3 },
            { month: 2, type: 3 },
            { month: 3, type: 3 },
        ]
    },
    {
        name: "青短",
        description: "六月、九月、十月的短冊牌。",
        points: 5,
        cards: [
            { month: 6, type: 3 },
            { month: 9, type: 3 },
            { month: 10, type: 3 },
        ]
    },
    {
        name: "種",
        description: "任意種牌 5 張。",
        points: 1,
        cards: [
            { month: 2, type: 2 },
            { month: 4, type: 2 },
            { month: 5, type: 2 },
            { month: 8, type: 2 },
            { month: 9, type: 2 },
        ]
    },
    {
        name: "短冊",
        description: "任意短冊牌 5 張。",
        points: 1,
        cards: [
            { month: 2, type: 3 },
            { month: 3, type: 3 },
            { month: 6, type: 3 },
            { month: 7, type: 3 },
            { month: 9, type: 3 },
        ]
    },
    {
        name: "滓",
        description: "任意滓牌 10 張。",
        points: 1,
        cards: [
            { month: 1, type: 4, num: 1 },
            { month: 1, type: 4, num: 2 },
            { month: 2, type: 4, num: 1 },
            { month: 2, type: 4, num: 2 },
            { month: 3, type: 4, num: 1 },
            { month: 3, type: 4, num: 2 },
            { month: 4, type: 4, num: 1 },
            { month: 4, type: 4, num: 2 },
            { month: 5, type: 4, num: 1 },
            { month: 5, type: 4, num: 2 },
        ]
    }, 
];

export default combinations;
