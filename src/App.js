import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./index.css";

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          message: "When I let go of what I am, I become what I might be.",
          author: "Lao Tzu",
          color: "blue",
        },
        {
          message:
            "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
          author: "Aristotle",
          color: "green",
        },
        {
          message:
            "A person who never made a mistake never tried anything new.",
          author: "Albert Einstein",
          color: "purple",
        },

        {
          message:
            "I am not a product of my circumstances. I am a product of my decisions.",
<<<<<<< HEAD
          author: "Stephen Covey",
=======
          author: "Albert Einstein",
>>>>>>> 24b60f47e6e1d0a279b511a4e49b85eb95a2d355
          color: "orange",
        },
        {
          message: "Do what you can, where you are, with what you have.",
          author: "Teddy Roosevelt",
          color: "grey",
        },
      ],
      currentQuoteIndex: 0,
    };
    this.nextQuote = this.nextQuote.bind(this);
  }

  nextQuote = () => {
    const { quotes, currentQuoteIndex } = this.state;
    let nextIndex = currentQuoteIndex + 1;

    if (nextIndex === quotes.length) {
      nextIndex = 0;
    }

    document.body.classList.add("fade-in");
    setTimeout(() => {
      this.setState({
        currentQuoteIndex: nextIndex,
      });
      document.body.classList.remove("fade-in");
    }, 500);
  };

  render() {
    const { quotes, currentQuoteIndex } = this.state;
    const { message, author, color } = quotes[currentQuoteIndex];
    const style = {
      color: color,
      button: {
        backgroundColor: color,
        color: "white",
      },
    };
    document.body.style.backgroundColor = color;
    return (
      <div>
        <h1 className="heading">Quote Generator.</h1>
        <div id="quote-box" style={style}>
          <h3 id="text">
            <FormatQuoteIcon style={{ fontSize: "50px" }} />
            {message}
          </h3>
          <p id="author">- {author}</p>
          <div id="buttons">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `${message} - ${author}`
              )}`}
              style={style.button}
              id="twitter"
              target="_top"
            >
              {" "}
              <TwitterIcon />
            </a>
            <button
              id="new quote"
              style={style.button}
              onClick={this.nextQuote}
            >
              New quote
            </button>
          </div>
        </div>
        <p className="by">By SamuoCodes</p>
      </div>
    );
  }
}

export default Quotes;
