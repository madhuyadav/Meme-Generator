import giftImage from "../images/gift.jpg"

export default function Header() {
    return (
        <header className="header">
            <img 
            style={{width: "100px", height: "100px"}}
                src={giftImage} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}