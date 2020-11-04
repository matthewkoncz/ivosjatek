// Import React modules.
import React from "react";

// Import Instagram Embed tool.
import InstagramEmbed from "react-instagram-embed";

interface SiteElementModel {
    slug?: string; 
    type?: string; 
    url?: string; 
    text?: string; 
    img?: string; 
    desc?: string; 
    level?: number; 
}

interface DrinkingGameProps {
    siteElements: SiteElementModel[];
}

/**
 * The component describes a drinking game.
 */
const DrinkingGame = (props: DrinkingGameProps) => {

    const createHeader = (siteObject, index) => {
        let level = siteObject.level;
        let text = siteObject.text;
        if (level === 1) {
            return <h1 key={`h1-${index}`} className="post-h">{text}</h1>
        }
        else if (level === 2) {
            return <h2 key={`h2-${index}`} className="post-h">{text}</h2>
        }
        else if (level === 3) {
            return <h3 key={`h3-${index}`} className="post-h">{text}</h3>
        }
        else if (level === 4) {
            return <h4 key={`h4-${index}`} className="post-h">{text}</h4>
        }
        else if (level === 5) {
            return <h5 key={`h5-${index}`} className="post-h">{text}</h5>
        }
    }

    const createParagraph = (siteObject, index) => {
        let text = siteObject.text;
        return <p key={`p-${index}`} className="post-p">{text}</p>
    }

    const createSource = (siteObject, index) => {
        let text = siteObject.text;
        return <p key={`p-${index}`} className="post-source-p">{text}</p>
    }

    const createLink = (siteObject, index) => {
        let url = siteObject.url;
        let text = siteObject.text;
        return <a key={`a-${index}`} href={url}>{text}</a>
    }

    const createIGPost = (siteObject, index) => {
        return <div key={`ig-${index}`} className="post-social-media centered" >
            <InstagramEmbed
                url={siteObject.url}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
            />
        </div>
    }

    const createCards = (siteObject, index) => {
        return <div key={index} className="centered">
            {siteObject.cards.map((card, cardIndex) => {
                return <div key={cardIndex} className="post-card">
                    <div className="post-card-text">
                        {card}
                    </div>
                </div>
            })}
            <div>
                Ivósjáték: <a href="/">katt ide</a>
            </div>
        </div>
    }

    const createImage = (siteObject, index) => {
        return (
            <div key={index} className="centered">
                <img
                    width="100%"
                    className="post-image"
                    alt="drink"
                    src={siteObject.url}>
                </img>
            </div>)
    }

    const createRedditCard = (siteObject, index) => {
        return (
            <blockquote key={index} className="reddit-card">
                <a href={siteObject.url}>link</a>
            </blockquote>
        )
    }

    return (
        <div key={props.siteElements[0].slug} className="page-frame">
            {props.siteElements.map((siteObject, index) => {
                if (siteObject.type === 'header') {
                    return createHeader(siteObject, index);
                }
                else if (siteObject.type === 'par') {
                    return createParagraph(siteObject, index);
                }
                else if (siteObject.type === 'src') {
                    return createSource(siteObject, index);
                }
                else if (siteObject.type === 'link') {
                    return createLink(siteObject, index);
                }
                else if (siteObject.type === 'ig') {
                    return createIGPost(siteObject, index);
                }
                else if (siteObject.type === 'img') {
                    return createImage(siteObject, index);
                }
                else if (siteObject.type === 'reddit') {
                    return createRedditCard(siteObject, index);
                }
                return "";
            })}
        </div>
    );
}

// Export component.
export default DrinkingGame;