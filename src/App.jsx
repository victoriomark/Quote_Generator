import axios, { Axios } from "axios";
import SideBar from "./Components/SideBar";
import BoxContainer from "./Components/mainContainer";
function App() {
   return (
      <>
         <main className='containerbg-dark mt-4 d-lg-flex rounded-4 d-md-flex gap-sm-5 justify-content-between align-items-center p-5 '
         >
            <SideBar />
            <BoxContainer />
         </main>
      </>
   );
}

export default App;
