import deck from "./deck";

const shuffle = () => (
    deck
        .sort(() => Math.random() - .5)
        .map((card) => ({...card, id: Math.random()}))
)

export default shuffle