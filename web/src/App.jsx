import { Toaster } from "react-hot-toast";
import WeatherPage from "./pages/WeatherPage/WeatherPage";

const App = () => {
   return (
      <>
         <Toaster position="top-center" />
         <WeatherPage />
      </>
   );
};

export default App;
