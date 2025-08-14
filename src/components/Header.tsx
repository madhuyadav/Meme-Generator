import giftImage from "../images/gift.jpg"

export default function Header() {
    return (
        <header className="header">
            <img 
            style={{width: "50px", height: "50px", borderRadius: "50%"}}
                src={giftImage} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}