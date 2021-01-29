import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Item from "./components/Item.js";
import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanel from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          descLink="https://tesla-clone-9ea17.web.app/https://tesla-clone-9ea17.web.app/"
          backGroundImage={SolarPanel}
          leftBtnText="ORDER NOW"
          leftBtnLink="https://tesla-clone-9ea17.web.app/"
          rightBtnText="LEARN MORE"
          rightBtnLink="https://tesla-clone-9ea17.web.app/"
          twoButtons
          first
        />
        <Item
          title="Model S"
          desc="Starting at $69,420"
          descLink="https://tesla-clone-9ea17.web.app/https://tesla-clone-9ea17.web.app/"
          backGroundImage={ModelS}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink="https://tesla-clone-9ea17.web.app/https://tesla-clone-9ea17.web.app/"
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink="https://tesla-clone-9ea17.web.app/https://tesla-clone-9ea17.web.app/"
          twoButtons
        />
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink="https://tesla-clone-9ea17.web.app/https://tesla-clone-9ea17.web.app/"
          backGroundImage={Model3}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink="https://tesla-clone-9ea17.web.app/https://tesla-clone-9ea17.web.app/"
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink="https://tesla-clone-9ea17.web.app/https://tesla-clone-9ea17.web.app/"
          twoButtons
        />
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink="https://tesla-clone-9ea17.web.app/https://tesla-clone-9ea17.web.app/"
          backGroundImage={ModelX}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink="https://tesla-clone-9ea17.web.app/https://tesla-clone-9ea17.web.app/"
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink="https://tesla-clone-9ea17.web.app/https://tesla-clone-9ea17.web.app/"
          twoButtons
        />
        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          descLink="https://tesla-clone-9ea17.web.app/https://tesla-clone-9ea17.web.app/"
          backGroundImage={ModelY}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink="https://tesla-clone-9ea17.web.app/https://tesla-clone-9ea17.web.app/"
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink="https://tesla-clone-9ea17.web.app/https://tesla-clone-9ea17.web.app/"
          twoButtons
        />
        <Item
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          descLink="https://tesla-clone-9ea17.web.app/"
          backGroundImage={SolarRoof}
          leftBtnText="ORDER NOW"
          leftBtnLink="https://tesla-clone-9ea17.web.app/"
          rightBtnText="LEARN MORE"
          rightBtnLink="https://tesla-clone-9ea17.web.app/"
          twoButtons
        />
        <Item
          title="Accessories"
          desc="https://tesla-clone-9ea17.web.app/"
          descLink="https://tesla-clone-9ea17.web.app/"
          backGroundImage={Accessories}
          leftBtnText="Shop Now"
          leftBtnLink="https://tesla-clone-9ea17.web.app/"
        />
        <Footer />
      </div>
    </div>
  );
}
export default App;
