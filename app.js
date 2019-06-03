/*
function Counter(props) {
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <div class="counter">
      <div class="numDisply">{props.startCount}</div>
      <button onClick={handleClick} class="increment">
        +
      </button>
      <button onClick={handleClick} class="decrement">
        -
      </button>
    </div>
  );
}
*/

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    this.setState(state => ({ count: this.state.count + 1 }));
  }

  decrementCount() {
    this.setState(state => ({ count: this.state.count - 1 }));
  }

  doubleCount = () => {
    this.setState(state => ({ count: this.state.count * 2 }));
  };

  tripleCount() {
    this.setState(state => ({ count: this.state.count * 3 }));
  }

  render() {
    return (
      <div class="counter">
        <div class="numDisply">{this.state.count}</div>
        <button onClick={this.incrementCount}>+1</button>
        <button onClick={this.decrementCount}>-1</button>
        <button
          onClick={() => {
            this.decrementCount();
          }}
        >
          -1
        </button>
        <button onClick={this.doubleCount}>2x</button>
        <button onClick={this.tripleCount.bind(this)}>3x</button>
      </div>
    );
  }
}

const container = document.getElementById("app");
const element = <Counter />;
ReactDOM.render(element, container);
