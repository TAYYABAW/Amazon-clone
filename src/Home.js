import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="banner"
          src="https://m.media-amazon.com/images/I/61ASx7NHTWL._SX3000_.jpg"
        />

        <div className="home__row">
          <Product
            id="0"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Buisness Paperback"
            price={29.99}
            image="https://www.booksplus.pk/wp-content/uploads/2018/12/21088-The-Lean-Startup-Eric-Ries.jpg"
            rating={5}
          />
          <Product
            id="1"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Buisness Paperback"
            price={29.99}
            image="https://www.booksplus.pk/wp-content/uploads/2018/12/21088-The-Lean-Startup-Eric-Ries.jpg"
            rating={2}
          />
          <Product
            id="2"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Buisness Paperback"
            price={29.99}
            image="https://www.booksplus.pk/wp-content/uploads/2018/12/21088-The-Lean-Startup-Eric-Ries.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Buisness Paperback"
            price={29.99}
            image="https://www.booksplus.pk/wp-content/uploads/2018/12/21088-The-Lean-Startup-Eric-Ries.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="4"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Buisness Paperback"
            price={29.99}
            image="https://www.booksplus.pk/wp-content/uploads/2018/12/21088-The-Lean-Startup-Eric-Ries.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Buisness Paperback"
            price={29.99}
            image="https://www.booksplus.pk/wp-content/uploads/2018/12/21088-The-Lean-Startup-Eric-Ries.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
