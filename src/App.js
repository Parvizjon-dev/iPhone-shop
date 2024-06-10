import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import 'bootstrap/dist/css/bootstrap.css'
import ListGroup from "./components/ListGroup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "iPhone 13 Green",
          img: "iphone13-green.png",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-13",
          price: "799",
        },
        {
          id: 2,
          title: "iPhone 13 Blue",
          img: "iphone13.png",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-13",
          price: "899",
        },
        {
          id: 3,
          title: "iPhone 14 Light-blue",
          img: "iphone-14-blue.png",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-14",
          price: "999",
        },
        {
          id: 4,
          title: "iPhone 14 Pro Max",
          img: "iphone-14-promax.webp",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-14",
          price: "1099",
        },
        {
          id: 5,
          title: "iPhone 15 Pro",
          img: "iphone-15-Pro.webp",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-15",
          price: "1299",
        },
        {
          id: 6,
          title: "iPhone 13 Blue",
          img: "iphone13.png",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-13",
          price: "799",
        },
        {
          id: 7,
          title: "iPhone 14 Gold",
          img: "iphone-14-gold.jpg",
          desc: "Lorem ipsum lorem klffds",
          category: "iphone-14",
          price: "899",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <ListGroup />
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });

    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
