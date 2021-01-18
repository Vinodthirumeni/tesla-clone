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
          descLink=""
          backGroundImage={SolarPanel}
          leftBtnText="ORDER NOW"
          leftBtnLink="https://www.tesla.com/energy/design"
          rightBtnText="LEARN MORE"
          rightBtnLink="https://www.tesla.com/solarpanels"
          twoButtons
          first
        />
        <Item
          title="Model S"
          desc="Starting at $69,420"
          descLink=""
          backGroundImage={ModelS}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink="https://www.tesla.com/null_IN/models/design#battery"
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink="https://www.tesla.com/inventory/new/ms"
          twoButtons
        />
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink="https://www.tesla.com/support/delivery-options"
          backGroundImage={Model3}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink="https://www.tesla.com/null_IN/model3/design#battery"
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink="https://www.tesla.com/inventory/new/m3"
          twoButtons
        />
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink="https://www.tesla.com/support/delivery-options"
          backGroundImage={ModelX}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink="https://www.tesla.com/null_IN/modelx/design#battery"
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink="https://www.tesla.com/inventory/new/mx"
          twoButtons
        />
        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          descLink="https://www.tesla.com/support/delivery-options"
          backGroundImage={ModelY}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink="https://www.tesla.com/null_IN/modely/design#battery"
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink="https://www.tesla.com/modely"
          twoButtons
        />
        <Item
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          descLink=""
          backGroundImage={SolarRoof}
          leftBtnText="ORDER NOW"
          leftBtnLink="https://www.tesla.com/solarroof/design"
          rightBtnText="LEARN MORE"
          rightBtnLink="https://www.tesla.com/solarroof"
          twoButtons
        />
        <Item
          title="Accessories"
          desc=""
          descLink=""
          backGroundImage={Accessories}
          leftBtnText="Shop Now"
          leftBtnLink="https://shop.tesla.com/"
        />
      <Footer />
        
      </div>
    </div>
  );
}

export default App;
