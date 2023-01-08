const Card = ({ image, isSelected, onClick }) => {
    return (
        <div className="card">
            <div className={isSelected ? "selected" : null} onClick={onClick}>
                <img src={image} className="card-face" alt="" />
                <div className="card-back">
                    Card
                    <br />
                    Back
                </div>
            </div>
        </div>
    );
};

export default Card;
