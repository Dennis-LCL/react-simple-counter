class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.doubleCount = this.doubleCount.bind(this);
    this.tripleCount = this.tripleCount.bind(this);
    this.setDisplayColor = this.setDisplayColor.bind(this);
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

  setDisplayColor() {
    return this.state.count >= 0
      ? "display positive-count"
      : "display negative-count";
  }

  render() {
    return (
      <React.Fragment>
        <Display className={this.setDisplayColor()} count={this.state.count} />
        <Button type="+1" onClick={this.incrementCount} />
        <Button type="-1" onClick={this.decrementCount} />
        <Button type="2x" onClick={this.doubleCount} />
        <Button type="3x" onClick={this.tripleCount} />
        <br />
      </React.Fragment>
    );
  }
}

const Display = ({ className, count }) => {
  return <div className={className}>{count}</div>;
};

const Button = ({ type, onClick }) => {
  return <button onClick={onClick}>{type}</button>;
};

const App1 = () => {
  return (
    <React.Fragment>
      <Counter counterKey={0} initialCount={10} />
      <Counter counterKey={1} initialCount={5} />
      <Counter counterKey={2} initialCount={3} />
      <Counter counterKey={3} initialCount={1} />
      <Counter counterKey={4} initialCount={7} />
    </React.Fragment>
  );
};

const App2 = () => {
  const counters = [];
  for (let i = 0; i < 5; i++) {
    counters.push(<Counter key={i} initialCount={i} />);
  }

  return <React.Fragment>{counters}</React.Fragment>;
};

const App3 = () => {
  return (
    <React.Fragment>
      {[1, 2, 3, 4, 5].map((number, index) => {
        return <Counter key={index} initialCount={number} />;
      })}
    </React.Fragment>
  );
};

const App4 = () => {
  const counters = [
    { id: "123", initialCount: 0 },
    { id: "456", initialCount: 10 },
    { id: "789", initialCount: -10 },
    { id: "135", initialCount: 6 }
  ];

  const counterItems = counters.map(counter => {
    return <Counter key={counter.id} initialCount={counter.initialCount} />;
  });

  return <React.Fragment>{counterItems}</React.Fragment>;
};

const container = document.getElementById("app");
const element = <App4 />;
ReactDOM.render(element, container);
