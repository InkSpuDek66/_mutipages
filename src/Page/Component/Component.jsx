// import componpents
import Add from "../../components/Add/Add";
import Counter from "../../components/Counter/Counter";
import Timer from "../../components/Timer/Timer";
import Temperatures from "../../components/Temperatures/Temperatures";

// import styles
import "./Component.css";
function Component() {
  return (
    <div className="component-container">
      <div className="component-header-container">
        <h1>Component</h1>
      </div>
      <div className="component-introduce-container">
        <div className="box01">
          <Counter className={"counter"} name={""} value={0} />
          <Timer className={"timer"} name={""} />
        </div>
        <div className="box02">
          <Add className={"add"} name={""} aValue={0} bValue={0} />
        </div>
        <div className="box03">
          <Temperatures
            className={"temperatures"}
            name={""}
            initFahrenheit={0}
          />
        </div>
      </div>
      <div className="component-footer-container">
        <h3>นายสพณดณัย เชื้อชาญ รหัส 66076195</h3>
      </div>
    </div>
  );
}

export default Component;
