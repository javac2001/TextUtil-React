import React from 'react'
export default function About(props) {
    return (
        <>
            <div className="container">
                <h1 className='mb-5' style={{ color: props.mode === "light" ? "black" : "white" }}>About TextUtil</h1>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Analyze Your text
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                This application can analyze your text in a number of ways, including:
                                <ul>
                                    <li><strong>Sentiment analysis:</strong>This determines the overall sentiment of your text, whether it is positive, negative, or neutral.</li>
                                    <li><strong>Topic modeling:</strong>This identifies the main topics of your text.</li>
                                    <li><strong>Text classification:</strong>This classifies your text into a predetermined set of categories.</li>
                                    <li><strong>Keyphrase extraction:</strong>This identifies the most important keywords in your text.</li>
                                    <li><strong>Entity extraction:</strong>This identifies named entities in your text, such as people, organizations, and places.</li>
                                </ul>
                                The application can also be used to generate different creative text formats,  like poems, code, scripts, musical pieces, email, letters, etc. It will try its best to fulfill all your requirements.

                                The application is still under development, but it has the potential to be a powerful tool for understanding and analyzing text.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free to use
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                The phrase "Free to use" can mean a few different things, depending on the context. In general, it means that the content or functionality is available to use without any additional cost or fees. However, there are a few different ways that this can be interpreted.
                                <ul>
                                    <li><strong>Freeware:</strong>Freeware is software that is available for free to use, but it is not open source. This means that the source code is not available to the public, and users cannot modify or redistribute the software.</li>
                                    <li><strong>Open source software:</strong>Open source software is software that is available for free to use, and the source code is also available to the public. This means that users can modify and redistribute the software, as long as they follow the terms of the license.</li>
                                    <li><strong>Freemium:</strong>Freemium is a business model where some content or functionality is available for free, but other content or functionality is only available for a fee. This is a common model for software applications, where the basic features are free to use, but additional features or functionality are only available for a subscription fee.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser Compatible
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            Browser compatibility refers to the ability of a website or application to be displayed and function properly in different web browsers. This is important because not everyone uses the same web browser, and if a website is not compatible with a particular browser, users may not be able to access it or use it properly.<br/><br/>
                            There are a number of factors that can affect browser compatibility, including the following:
                            <ul>
                                <li>The version of the web browser</li>
                                <li>The operating system that the web browser is running on</li>
                                <li>The browser's settings</li>
                                <li>The website's code</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
