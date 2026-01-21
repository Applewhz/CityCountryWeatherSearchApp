import { Toaster } from "react-hot-toast";
import WeatherPage from "./pages/WeatherPage/WeatherPage";
import { useTheme } from "./hooks/useTheme";

const App = () => {
   const { theme, toggleTheme } = useTheme();
   return (
      <>
         <Toaster position="top-center" />
         <button
            onClick={toggleTheme}
            style={{
               position: "fixed",
               width: "80px",
               height: "40px",
               top: "16px",
               right: "16px",
               zIndex: 1000,
            }}
         >
            {theme === "light" ? "Dark Theme" : "Light Theme"}
         </button>
         <WeatherPage />
      </>
   );
};

export default App;
