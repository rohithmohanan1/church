import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Components/home';
import Contact from '../Components/contact';
import Gallery from '../Components/gallery';
import Aboutus from '../Components/aboutus';
import History from '../Components/History';
import Newsandevents from '../Components/Newsandevents';
import Onlineofferings from '../Components/onlineofferings';
import PAYMENT from '../Components/PAYMENT';
import Adminlogin from '../Components/adminlogin';
import Dashbord from '../Components/dashbord';
import Settings from '../Components/Settings';
import Settings_1 from '../Components/Settings_1';
import Settings_2 from '../Components/Settings_2';
import Bookdofferings from '../Components/bookdofferings';
import Bookdofferings_1 from '../Components/bookdofferings_1';
import Add0ffering from '../Components/add0ffering';
import Addevents from '../Components/addevents';
import Addevents_1 from '../Components/addevents_1';
import Alladmin from '../Components/alladmin';
import Addadmin from '../Components/addadmin';
import Gallery1 from '../Components/gallery1';
import Gallery2 from '../Components/gallery2';
import IconlyLightArrowDown2 from '../Components/IconlyLightArrowDown2';


const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				
				<Route exact path="/"><Home /></Route>
				<Route exact path="/contact"><Contact /></Route>
				<Route exact path="/gallery"><Gallery /></Route>
				<Route exact path="/aboutus"><Aboutus /></Route>
				<Route exact path="/history"><History /></Route>
				<Route exact path="/newsandevents"><Newsandevents /></Route>
				<Route exact path="/onlineofferings"><Onlineofferings /></Route>
				<Route exact path="/payment"><PAYMENT /></Route>
				<Route exact path="/adminlogin"><Adminlogin /></Route>
				<Route exact path="/dashbord"><Dashbord /></Route>
				<Route exact path="/settings"><Settings /></Route>
				<Route exact path="/settings_1"><Settings_1 /></Route>
				<Route exact path="/settings_2"><Settings_2 /></Route>
				<Route exact path="/bookdofferings"><Bookdofferings /></Route>
				<Route exact path="/bookdofferings_1"><Bookdofferings_1 /></Route>
				<Route exact path="/add0ffering"><Add0ffering /></Route>
				<Route exact path="/addevents"><Addevents /></Route>
				<Route exact path="/addevents_1"><Addevents_1 /></Route>
				<Route exact path="/alladmin"><Alladmin /></Route>
				<Route exact path="/addadmin"><Addadmin /></Route>
				<Route exact path="/gallery1"><Gallery1 /></Route>
				<Route exact path="/gallery2"><Gallery2 /></Route>
				{/* <Route exact path="/nav"><NAV /></Route> */}
				<Route exact path="/iconlylightarrowdown2"><IconlyLightArrowDown2 /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;