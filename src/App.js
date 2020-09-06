import React, { useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Login from "./components/Login";
import Admin from "./components/Admin";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
import Client from "./components/Client";
import ConfirmEmail from "./components/ConfirmEmail";
import Navbar from "./components/Navbar";
// import Sidebar from './components/Sidebar';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// //import Editor from './components/Editor';
// import Orders from './components/Orders';
// import Users from './components/Users';
// import Feedback from './components/Feedback';
//import { getDishes } from "./actions/a_dishes";


import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Categorie from './components/Categorie';
import Catalogue from "./components/Catalogue"

import { getCategorie } from "./actions/a_categorie";
import { getCatalogue } from "./actions/a_catalogue";
import { set_active_article_list } from "./actions/a_active_article_list";
import { get_current_user } from './actions/a_current_user'
import Home from './components/Home';


function App(props) {

  useEffect(() => {
    props.getCategorie();
    props.getCatalogue();
    props.get_current_user();
  }, []);

  const period_timout = (x) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;


    const a = new Date();
    const b = new Date(x);

    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    let p = ((utc2 - utc1) / _MS_PER_DAY);
    if (p < 0) {
      return "expired";
    } else if (p == 0) {
      return p + 1;
    } else {
      return p + 1;
    }
  };

  const active_catalogues = () => {
    return props.cataList.filter(e => period_timout(e.period.fin) !== "expired")
  }

  const active_article_list = () => {
    let Vactive_catalogues = active_catalogues();
    let active_article_list = [];
    Vactive_catalogues.forEach(e => {
      let new_promolist = e.promoList.map(el => { return { ...el, magasin: e.magasin, period: e.period } })
      active_article_list = [...active_article_list, ...new_promolist];
    });
    return active_article_list;


  }

  props.set_active_article_list(active_article_list())


  return (
    <>
      <Router>
        <Navbar />
        {console.log("userj : ", props.user)}
        {props.user ?
          props.user == "none" ?
            <Switch>
              <Route exact path="/" component={Home} />

              {/* <Route exact path="/" render={() => (
                <div className="app-container">
                  <div>
                    <NavLink exact to="/admin" className="normal-sidebar" activeClassName="active-sidebar" >ADMIN</NavLink>
                    <NavLink exact to="/login" className="normal-sidebar" activeClassName="active-sidebar" >Login</NavLink>
                    <NavLink exact to="/shop/0" className="normal-sidebar" activeClassName="active-sidebar" >Client Front !</NavLink>

                  </div>
                </div>
              )} /> */}

              <Route exact path="/verifyEmail" render={() => (
                <div className="vContainer">
                  <div className="verifyEmail">
                    first step is done ,Second step : please go to your email inbox or spam folder then click on the link
              </div>
                </div>
              )} />

              <Route exact path="/confirmEmail/:id" component={ConfirmEmail} />
              <Route exact path="/shop/:categorieId" component={Client} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Redirect to="/" />
            </Switch>
            : props.user.role == "client" ?
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shop/:categorieId" component={Client} />
                <Redirect to="/" />
              </Switch>
              : props.user.role == "admin" ?
                <Switch>
                  {/* <Route exact path="/" component={Home} /> */}
                  <Route exact path="/shop/:categorieId" component={Client} />
                  <Route path="/" component={Admin} />
                </Switch>
                : null : null

        }
      </Router>
    </>
  )

  //   return (
  //     <React.Fragment>
  //       <Router>
  //         <NavBar />

  //         {(props.user === "none") ?
  //           <div>
  //             <div className="app-container">
  //               <Switch>
  //                 <Route path="/" exact /*render={(props) => <Dishes {...props} />}*/ component={() => <Dishes />} />
  //                 <Redirect to="/" />
  //                 <Route />
  //               </Switch>
  //             </div>
  //             {/* <Testimonials />
  //             <Footer /> */}
  //           </div>


  //           : (props.user.role) ?
  //             (props.user.role === "user") ?
  //               <div className="app-container">
  //                 <div className="app-inner-container">
  //                 <div className="app-inner-inner-container">
  //                 <Switch>
  //                   <Route path="/" exact component={Dishes} />
  //                   <Route path="/orders" component={Orders} />
  //                   <Route path="/feedback" component={Feedback} />
  //                   {/* <Route path="/contact" component={<contact />} /> */}
  //                   <Redirect to="/" />
  //                 </Switch>
  //                 </div>
  //                 <Sidebar />
  //               </div>
  //               </div>

  //               : (props.user.role === "admin") ?
  //                 <div className="app-container">
  //                   <div className="app-inner-container">
  //                   <div className="app-inner-inner-container">

  //                   <Switch>
  //                     <Route path="/" exact component={Dishes} />
  //                     <Route path="/add/:add"  component={() => <Editor />} />
  //                     <Route path="/edit/:dish/:iDish"  component={() => <Editor />} />
  //                     <Route path="/orders" component={Orders} />
  //                     <Route path="/users" component={Users} />
  //                     <Route path="/feedback" component={Feedback} />
  //                     {/* <Route path="/notification" component={<notification />} /> */}
  //                     {/* <Route path="/Letters" component={<Letters />} /> */}
  //                     {/* <Route path="/contact" component={<contact />} /> */}
  //                     <Redirect to="/" />
  //                   </Switch>
  //                   </div>
  //                   <Sidebar />
  //                 </div>
  //                 </div>
  //                 : <div>euhhh !</div>
  //             : <div>euhhh !</div>
  //         }

  //       </Router>
  //     </React.Fragment >




  //     // <div>
  //     //   {console.log("props.list : ", props.list)}
  //     //   <button onClick={props.getDishes}>get dishes list</button>
  //     //   {
  //     //     props.list.map(e => <div key={e.id}>{e.id} /   {e.title}</div>)
  //     //   }
  //     // </div>
  //   )
  //   // <NavBar />
  //   // <Router>
  //   //   <Switch>
  //   //     <Route />
  //   //     <Route />
  //   //   </Switch>
  //   // </Router>






  //   // <div className="App">
  //   //   <input ref={x => cmd = x} placeholder="text will be passed as a commande"></input>
  //   //   <button onClick={() => { props.Add_Cmd(cmd.value); console.log("input is  : ", cmd.value) }}>pass the command</button>
  //   //   <div>{props.Cmd_State.map(e=><li key={e.id}>{e.text}</li>)}</div>
  //   // </div>

}

export default connect(
  (state => {
    return {
      cataList: state.r_catalogue,
      user: state.r_current_user,
    }
  }),
  { getCategorie, getCatalogue, set_active_article_list, get_current_user })
  (App);
