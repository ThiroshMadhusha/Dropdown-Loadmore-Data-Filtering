import React from "react";
import { useState } from "react";

function Menu({ menuItem }) {
  // Add Load More Option
  // Page load eka useState eka athulata danna
  const [noOfElement, setnoOfElement] = useState(8);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  const slice = menuItem.slice(0, noOfElement);

  // End Load More Option

  return (
    <>
      {/* uda assign karapu slice eka map ekata assign karanna */}
      <div className="container portfolio_container">
        {slice.map((item) => {
          return (
            <div className="item-con" key={item.id}>
              <div className="item-container">
                <img src={item.image} alt="portfolio project image" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>

                {/* new */}
                <div className="git-btn">
                  <a
                    href={item.github}
                    className="gitbtn"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <button className="btn-load" onClick={() => loadMore()}>
          Load More
        </button>
      </div>
    </>
  );
}

export default Menu;
