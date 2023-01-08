import React from "react";

function Menu({ menuItem }) {
  return (
    <div className="portfolio_container">
      {menuItem.map((item) => {
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
  );
}

export default Menu;
