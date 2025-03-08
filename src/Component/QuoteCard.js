import React, { useState } from "react";
import Button from "./Button";


const QuoteCard = () => {
    const [quote, SetQuote] = useState("");
    const [showAdvice, SetShowAdvice] = useState(false);
    const [isLoading, SetIsLoading] = useState(false);

    const fetchAdvise = async () => {
        SetShowAdvice(true);
        SetIsLoading(true);
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            const data = await response.json();
            SetQuote(data.slip.advice);
        } catch (error) {
            console.error("API Fetch Error:", error);
            SetQuote("⚠️ Unable to fetch advice. Please try again!");
        }
        SetIsLoading(false);
    }

    return (
        <div className="main-container animated-background">
            <div className="center-container">
                <h2 key={quote} className="quote-text">{showAdvice ? quote : "Are you stuck or don't know what to do? Then click on this button😵"}</h2>
            </div>
            <div className="btn-wrapper"><Button handleClick={fetchAdvise} isLoading={isLoading} /></div>

        </div>
    )
}

export default QuoteCard