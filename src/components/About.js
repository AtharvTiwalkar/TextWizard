import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';


export default function About(props) {


    const [myStyle, setMyStyle] = useState({
        backgroundColor: 'white',
        color: 'black'
    })

    const { mode } = props;


    useEffect(() => {
        toggleMode();
        // eslint-disable-next-line
    }, [mode]);

    const toggleMode = () => {//if const not written it will give error as not define   
        if (mode === 'dark') {
            setMyStyle({
                backgroundColor: 'black',
                color: 'white'
            }
            )
        } else {
            setMyStyle({
                backgroundColor: 'white',
                color: 'black'
            }
            )
        }
    }

    return (
        <>
            <div className='container my-3' style={myStyle}>
                <h1>About</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                Clear Text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Clear Text:</strong> This feature allows you to instantly clear all the text in the input area. It's perfect for starting fresh without manually deleting everything.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                Copy Text
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Copy Text:</strong> This feature copies the text to your clipboard with a single click, making it easy to paste it wherever you need.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                Generate QR Code
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Generate QR Code:</strong> This feature generates a QR code from the text you've entered, which can be scanned by a mobile device to quickly share the text.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={myStyle}>
                                Remove Extra Spaces
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Remove Extra Spaces:</strong> This feature cleans up your text by removing any extra spaces, ensuring that it is neat and well-formatted.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={myStyle}>
                                Convert to Uppercase
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Convert to Uppercase:</strong> This feature changes all the text to uppercase, making it easier to read or emphasize.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={myStyle}>
                                Convert to Lowercase
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Convert to Lowercase:</strong> This feature changes all the text to lowercase, which can be useful for standardizing the text format.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" style={myStyle}>
                                Count Unique Words
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Count Unique Words:</strong> This feature counts the unique words in your text, providing you with an idea of how diverse your vocabulary is in the document.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight" style={myStyle}>
                                Most Frequent Word
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Most Frequent Word:</strong> This feature identifies the most frequently occurring word in your text, giving you insights into the main themes or repetitive terms.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine" style={myStyle}>
                                Analyze Sentiment
                            </button>
                        </h2>
                        <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Analyze Sentiment:</strong> This feature analyzes the sentiment of your text, determining whether it has a positive, negative, or neutral tone.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen" style={myStyle}>
                                Reverse Text
                            </button>
                        </h2>
                        <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Reverse Text:</strong> This feature reverses the order of characters in your text, creating a mirror image of the original text.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
