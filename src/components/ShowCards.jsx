import { Tooltip } from "react-tooltip";
import { useCallback } from "react";
import "react-tooltip/dist/react-tooltip.css";
import deck from "../utilities/deck";

const ShowCards = ({ Cards, Size }) => {
    const Classes = useCallback(() => {
        switch (Size) {
            case "sm":
                return "w-[50px] h-[82px]";
            case "md":
                return "w-[75px] h-[123px]";
            default:
                return "w-[100px] h-[164px]";
        }
    }, [Size]);

    const Gap = useCallback(() => {
        switch (Size) {
            case "sm":
                return "gap-x-1";
            case "md":
                return "gap-x-2";
            default:
                return "gap-x-4";
        }
    }, [Size]);

    const CardType = useCallback((Type) => {
        switch (Type)
        {
            case "1":
                return "光";
            case "2":
                return "種";
            case "3":
                return "短冊";
            case "4":
                return "滓";
            default:
                return "?";
        }
    }, []);

    const GapY = useCallback(() => {
        switch (Size) {
            case "sm":
                return "basis-full h-1";
            case "md":
                return "basis-full h-2";
            default:
                return "basis-full h-4";
        }
    }, [Size]);

    const TargetCards = deck
        .filter((card) => {
            return Cards.find(
                (target) =>
                    card.num === target?.num &&
                    card.month === target.month &&
                    card.type === target.type
            );
        })
        .map((card, i) => {
            const cardId = card.num
                ? card.month.toString() +
                  "月-類型" +
                  card.type.toString() +
                  "-" +
                  card.num.toString() +
                  "張"
                : card.month.toString() + "月-類型" + card.type.toString();
            return (
                <>
                    {i == 5 ? <div className={GapY()}></div> : null}
                    <img
                        id={cardId}
                        key={cardId}
                        className={Classes()}
                        src={card.name}
                        alt={cardId}
                    />
                    <Tooltip
                        anchorId={cardId}
                        content={
                            "這是一張" +
                            card.month.toString() +
                            "月份的牌，" +
                            "類型為" +
                            CardType(card.type.toString())
                        }
                        place="bottom"
                    />
                </>
            );
        });

    return (
        <>
            <div className={"flex flex-row flex-wrap " + Gap()}>
                {TargetCards}
            </div>
        </>
    );
};

export default ShowCards;
