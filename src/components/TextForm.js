import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import sentiment from 'sentiment';

export default function TextForm(props) {

    const clearText = () => {
        setText('');
        props.showAlert("Text Cleared", 'success');
    }

    const changToUP = () => {
        let a = text.toUpperCase();
        setText(a);
        props.showAlert("Converted to Uppercase", 'success');
    }

    const handleonchange = (event) => {
        setText(event.target.value);
    }

    const changeToLo = () => {
        let a = text.toLowerCase();
        setText(a)
        props.showAlert("Converted to Lowercase", 'success');
    }

    const countUniqueWords = () => {
        let wordsArray = text.split(/\s+/).filter((word) => word.length > 0);
        let uniqueWords = new Set(wordsArray);
        props.showAlert(`Unique words count: ${uniqueWords.size}`, 'success');
    }

    const findMostFrequentWord = () => {
        let wordsArray = text.split(/\s+/).filter((word) => word.length > 0);
        let wordFrequency = {};
        wordsArray.forEach((word) => {
            wordFrequency[word] = (wordFrequency[word] || 0) + 1;
        });
        let maxFrequency = 0;
        let mostFrequentWord = '';
        for (let word in wordFrequency) {
            if (wordFrequency[word] > maxFrequency) {
                maxFrequency = wordFrequency[word];
                mostFrequentWord = word;
            }
        }
        props.showAlert(`Most frequent word: "${mostFrequentWord}" (${maxFrequency} times)`, 'success');
    }

    const generateQRCode = () => {
        setShowQRCode(true);
    }

    const analyzeSentiment = () => {
        const sentimentAnalyzer = new sentiment();
        let result = sentimentAnalyzer.analyze(text);
        let sentimentResult = result.score > 0 ? 'Positive' : result.score < 0 ? 'Negative' : 'Neutral';
        props.showAlert(`Sentiment analysis: ${sentimentResult}`, 'success');
    }

    const reverseText = () => {
        let reversedText = text.split('').reverse().join('');
        setText(reversedText);
        props.showAlert("Text Reversed", 'success');
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(' ');
        setText(newText);
        props.showAlert("Extra Spaces Removed", 'success');
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", 'success');
    }

    const [text, setText] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);
    const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;

    return (
        <>
            <div className={`container  text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#121212' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-danger mx-1 my-2" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-2" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-2" onClick={generateQRCode}>Generate QR Code</button>
                <button className="btn btn-primary mx-1 my-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1 my-2" onClick={changToUP}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={changeToLo}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={countUniqueWords}>Count Unique Words</button>
                <button className="btn btn-primary mx-1 my-2" onClick={findMostFrequentWord}>Most Frequent Word</button>
                <button className="btn btn-primary mx-1 my-2" onClick={analyzeSentiment}>Analyze Sentiment</button>
                <button className="btn btn-primary mx-1 my-2" onClick={reverseText}>Reverse Text</button>
                
                

            </div>
            <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Text Summary</h1>
                <p>
                    {wordCount} words and {text.length} characters
                </p>
                <p>
                    {0.008 * wordCount} minutes to read for average person
                </p>
                <h2>Preview</h2>
                <p>
                    {text.length > 0 ? text : "Nothing to preview"}
                </p>
                {showQRCode && <QRCode value={text} />}
            </div>
        </>
    );
}
