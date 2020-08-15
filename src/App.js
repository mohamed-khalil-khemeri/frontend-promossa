import React, { useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Login from "./components/Login";
import Admin from "./components/Admin";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
// import NavBar from "./components/Navbar";
// import Sidebar from './components/Sidebar';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// //import Editor from './components/Editor';
// import Orders from './components/Orders';
// import Users from './components/Users';
// import Feedback from './components/Feedback';
import { getDishes } from "./actions/a_dishes";


import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Categorie from './components/Categorie';
import Catalogue from "./components/Catalogue"


function App(props) {

  // useEffect(
  //  props.getDishes,[]
  // );

  const Adminizer = () => {
    return (<>
      
      <div>
      
        <Switch>
        <Route exact path="/admin"  component={Catalogue} />
        <Route exact path="/Categorie"  component={Categorie} />
        <Redirect to="/" />
        </Switch>

      </div>
      <Sidebar />
    </>)
  }


  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"  component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact  path="/login" component={Login} />
          <Route   component={Adminizer} />
        </Switch>

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
      user: state.r_users
    }
  }),
  { getDishes })
  (App);
