import React, { useEffect, useState } from "react";
import "./Register.css";
import {
  register_user,
  sendNotification,
  resetNotification,
} from "../actions/a_users";
//import { addToCart, removeFromCart } from "../actions/a_cart";
import { NavLink } from "react-router-dom";
import logo from "../bou9.webp";

import Notification from "./Notification";

import { connect } from "react-redux";

function Register(props) {
  let logInputs = {};

  // useEffect(() => {
  //   props.getDishes();
  // }, []);
  // console.log("notification : ", props.notification);
  //const [able, setable] = useState(false);

  // if (props.notification.type == "error") { setable(false); console.log(" error payloads : ",props.notification.payload); }
  // if (props.notification.type == "success") { setable(false); console.log(" success payloads : ",props.notification.payload); }

  // const [filter_key, set_filter_key] = useState("active");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [birthday, setbirthday] = useState("");
  const [adress, setadress] = useState("");

  const [phone, setphone] = useState("");

  const [gov, setgov] = useState("");
  const [deleg, setdeleg] = useState("");

  const [genre, setgenre] = useState("");
  // let menu = [...props.dishesList];

  let gouvernorat = [
    {
      gov: "Tunis",
      deleg: [
        "Bab Bhar",
        "Bab Souika",
        "Bardo",
        "Bouhaira",
        "Carthage",
        "El Khadra",
        "El Menzah",
        "El Ouardia",
        "El Tahrir",
        "Ezzouhour",
        "Hrairia",
        "Jebel Jelloud",
        "Kabaria",
        "La Goulette",
        "La Marsa",
        "Le Kram",
        "Medina",
        "Omrane",
        "Omrane Superieur",
        "Sidi El Bechir",
        "Sidi Hassine",
        "Sijoumi",
      ],
    },
    {
      gov: "Ariana",
      deleg: [
        "Ariana Medina",
        "Ettadhamen",
        "Kalaat El Andalous",
        "Mnihla",
        "Raoued",
        "Sidi Thabet",
        "Soukra",
      ],
    },
    {
      gov: "Manouba",
      deleg: [
        "Borj El Amri",
        "Douar Hicher",
        "El Battan",
        "Jedaida",
        "Manouba",
        "Mornaguia",
        "Oued Ellil",
        "Tebourba",
      ],
    },
    {
      gov: "Ben Arous",
      deleg: [
        "Ben Arous",
        "Boumhel",
        "El Mourouj",
        "Ezzahra",
        "Fouchana",
        "Hammam Chott",
        "Hammam Lif",
        "M'Hamdia",
        "Medina Jedida",
        "Megrine",
        "Mornag",
        "Rades",
      ],
    },
    {
      gov: "Nabeul",
      deleg: [
        "Beni Khalled",
        "Beni Khiar",
        "Bou Argoub",
        "Dar Chaabane El Fehri",
        "El Mida",
        "Grombalia",
        "Hammam Ghezaz",
        "Hammamet",
        "Haouaria",
        "Kelibia",
        "Korba",
        "Menzel Bouzelfa",
        "Menzel Temime",
        "Nabeul",
        "Soliman",
        "Takelsa",
      ],
    },
    {
      gov: "Bizerte",
      deleg: [
        "Bizerte North",
        "Bizerte South",
        "Djoumime",
        "El Alia",
        "Ghar El Melh",
        "Ghezala",
        "Mateur",
        "Menzel Bourguiba",
        "Menzel Jemil",
        "Ras Jebel",
        "Sejenane",
        "Tinja",
        "Utique",
        "Zarzouna",
      ],
    },
    {
      gov: "Zaghouan",
      deleg: ["Zaghouan", "Fahs", "Nadhour", "Saouaf", "Zaghouan", "Zriba"],
    },
    {
      gov: "Sousse",
      deleg: [
        "Akouda",
        "Bouficha",
        "Enfidha",
        "Hammam Sousse",
        "Hergla",
        "Kalaa Kebira",
        "Kalaa Sghira",
        "Kondar",
        "M'Saken",
        "Sidi Bou Ali",
        "Sidi El Heni",
        "Sousse Jaouhara",
        "Sousse Medina",
        "Sousse Riadh",
        "Sousse Sidi Abdelhamid",
        "Zaouia Ksiba Thrayat",
      ],
    },
    {
      gov: "Monastir",
      deleg: [
        "Bekalta",
        "Bembla",
        "Beni Hassen",
        "Jammel",
        "Ksar Hellal",
        "Ksibet El Mediouni",
        "Moknine",
        "Monastir",
        "Ouerdanine",
        "Sahline",
        "Sayada-Lamta-Bou Hjar",
        "Teboulba",
        "Zeramdine",
      ],
    },
    {
      gov: "Mahdia",
      deleg: [
        "Boumerdes",
        "Chebba",
        "Chorbane",
        "El Djem",
        "Hbira",
        "Ksour Essef",
        "Mahdia",
        "Melloulech",
        "Ouled Chamekh",
        "Sidi Alouane",
        "Souassi",
      ],
    },
    {
      gov: "Sfax",
      deleg: [
        "Agareb",
        "Bir Ali Ben Khelifa",
        "El Amra",
        "El Ghraiba",
        "Hencha",
        "Jebeniana",
        "Kerkennah",
        "Mahres",
        "Menzel Chaker",
        "Sakiet Eddaier",
        "Sakiet Ezzit",
        "Sfax Medina",
        "Sfax West",
        "Sfax South",
        "Skhira",
        "Thyna",
      ],
    },
    {
      gov: "Beja",
      deleg: [
        "Amdoun",
        "Beja North",
        "Beja South",
        "Goubellat",
        "Mejez El Bab",
        "Nefza",
        "Teboursouk",
        "Testour",
        "Thibar",
      ],
    },
    {
      gov: "Jendouba",
      deleg: [
        "Aïn Draham",
        "Balta",
        "Bousalem",
        "Fernana",
        "Ghardimaou",
        "Jendouba",
        "Jendouba Nord",
        "Oued Mliz",
        "Tabarka",
      ],
    },
    {
      gov: "ElKef",
      deleg: [
        "Dahmani",
        "Es Sers",
        "Jerissa",
        "Kalaa Khasbat",
        "Kalaat Senane",
        "Kef East",
        "Kef West",
        "Ksour",
        "Nebeur",
        "Sakiet Sidi Youssef",
        "Tajerouine",
      ],
    },
    {
      gov: "Siliana",
      deleg: [
        "Bargou",
        "Bouarada",
        "El Aroussa",
        "El Krib",
        "Gaafour",
        "Kesra",
        "Makthar",
        "Rouhia",
        "Sidi Bourouis",
        "Siliana North",
        "Siliana South",
      ],
    },
    {
      gov: "Kairouan",
      deleg: [
        "Alaa",
        "Bouhajla",
        "Chebika",
        "Chrarda",
        "Haffouz",
        "Hajeb El Ayoun",
        "Kairouan North",
        "Kairouan South",
        "Nasrallah",
        "Oueslatia",
        "Sbikha",
      ],
    },
    {
      gov: "Sidi Bouzid",
      deleg: [
        "Bir El Hfay",
        "Jelma",
        "Mazzouna",
        "Meknassi",
        "Menzel Bouzaiene",
        "Ouled Haffouz",
        "Regueb",
        "Sabalat Ouled Asker",
        "Sidi Ali Ben Aoun",
        "Sidi Bouzid East",
        "Sidi Bouzid West",
        "Souk Jedid",
      ],
    },
    {
      gov: "Kasserine",
      deleg: [
        "Ayoun",
        "Ezzouhour",
        "Feriana",
        "Foussana",
        "Hassi El Ferid",
        "Hidra",
        "Jedeliane",
        "Kasserine North",
        "Kasserine South",
        "Majel Belabbes",
        "Sbeitla",
        "Sbiba",
        "Thala",
      ],
    },
    {
      gov: "Gabes",
      deleg: [
        "Gabes Medina",
        "Gabes West",
        "Gabes South",
        "Ghannouch",
        "Hamma",
        "Mareth",
        "Matmata",
        "New Matmata",
        "Menzel Habib",
        "Metouia",
      ],
    },
    {
      gov: "Medenine",
      deleg: [
        "Ben Gardane",
        "Beni Khedache",
        "Djerba Ajim",
        "Djerba Midoun",
        "Djerba Houmt Souk",
        "Medenine North",
        "Medenine South",
        "Sidi Makhlouf",
        "Zarzis",
      ],
    },
    {
      gov: "Gafsa",
      deleg: [
        "Belkhir",
        "Gafsa North",
        "Gafsa South",
        "Guetar",
        "Ksar",
        "Mdhilla",
        "Metlaoui",
        "Oum Larais",
        "Redeyef",
        "Sened",
        "Sidi Aich",
      ],
    },
    {
      gov: "Tozeur",
      deleg: ["Degueche (Degache)", "Hazoua", "Nefta", "Tamaghza", "Tozeur"],
    },
    {
      gov: "Tataouine",
      deleg: [
        "Bir Lahmar",
        "Dhiba",
        "Ghomrassen",
        "Remada",
        "Samar",
        "Tataouine North",
        "Tataouine South",
      ],
    },
    {
      gov: "Kebili",
      deleg: [
        "Douz North",
        "Douz South",
        "Faouar",
        "Kebili North",
        "Kebili South",
        "Souk El Ahed",
      ],
    },
  ];

  /*--------------------------------control Email with regex------------------------------------------- */

  function controlM(x) {
    const patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (patt.test(x.value) == false) {
      x.style.color = "red";
      x.value = "please enter a valid Email adress !";
      setTimeout(() => {
        x.value = "";
        x.style.color = "black";
        x.placeholder = "please enter a valid Email adress !";
      }, 1000);
    }
    return patt.test(x.value);
  }

  function controlP(z) {
    const pattx = /^\w{8}$/;
    if (pattx.test(z.value) == false) {
      z.value = "";
      z.type = "email";
      z.style.color = "red";
      z.value = "password must be 8 characters !";
      setTimeout(() => {
        z.value = "";
        z.type = "password";
        z.style.color = "black";
        z.placeholder = "password must be 8 characters !";
      }, 1000);
    }
    return pattx.test(z.value);
  }

  return (
    <>
      <div className="regContainer">
        <div className="mylogo">
          <h1>PROMOSSA</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className={props.notification.type == "error" ? "register_notification": ""} >{props.notification.type == "error" ? "used email, try other one !": ""}</div>
        <div> {props.notification.type == "success" ? window.location = "/verifyEmail": null}</div>
        {/* <Notification  status = {props.notification.type} >{()=>{ if(props.notification.payload[0] == email) {return  "Email Invalid, il y a un compte existant avec l'email fournit"} }}</Notification> */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              onChange={(e) => {
                setname(e.target.value);
              }}
              type="text"
              className=""
              name="nom"
              id="nom"
              placeholder="Nom et Prenom"
              autoFocus="1"
              aria-label="Nom et Prenom"
              required
            />
          </div>

          <div>
            <input
              ref={(e) => (logInputs.email = e)}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              type="email"
              className=""
              name="email"
              id="email"
              placeholder="Adresse e-mail."
              aria-label="Adresse e-mail ou numéro de tél."
              required
            />
          </div>

          <div>
            <input
              ref={(e) => (logInputs.password = e)}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
              className=""
              name="pass"
              id="pass"
              placeholder="Mot de passe"
              aria-label="Mot de passe"
              required
            />
          </div>

          <div>
            <input
              onChange={(e) => {
                setphone(e.target.value);
              }}
              type="tel"
              pattern="[0-9]{8}"
              className=""
              name="phone"
              id="phone"
              placeholder="Numero Tel (exp : 24145229) (pas d'espace)"
              aria-label="Numero Tel"
              required
            />
          </div>

          <div>
            <input
              onChange={(e) => {
                setbirthday(e.target.value);
              }}
              max="2014-01-01"
              type="date"
              className=""
              name="birthday"
              id="birthday"
              placeholder="Date de naissance"
              aria-label="Date de naissance"
              required
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setadress(e.target.value);
              }}
              type="text"
              className=""
              name="adress"
              id="adress"
              placeholder="Adresse"
              aria-label="Adresse"
              required
            />
          </div>
          <div>
            <select
              onChange={(e) => setgov(e.target.value)}
              className="myregselect"
              name="gov"
              id="gov"
              required
            >
              <option value="">Quel est votre governorat:</option>
              {gouvernorat.map((e) => (
                <option value={e.gov}>{e.gov}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              onChange={(e) => setdeleg(e.target.value)}
              className="myregselect"
              name="deleg"
              id="gdelegov"
              required
            >
              <option value="">Quel est votre Délégation :</option>
              {gouvernorat.filter((e) => e.gov == gov)[0]
                ? gouvernorat.filter((e) => e.gov == gov)[0].deleg
                  ? gouvernorat
                      .filter((e) => e.gov == gov)[0]
                      .deleg.map((e) => <option value={e}>{e}</option>)
                  : null
                : null}
            </select>
          </div>
          <div>
            <select
              onChange={(e) => setgenre(e.target.value)}
              className="myregselect"
              name="gender"
              id="gender"
              required
            >
              <option value="">Quel est votre genre:</option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
          </div>
          <div>
            {/* onClick={(e)=>e.preventDefault()} */}
            <button
              onClick={() => {
                if (
                  name !== "" &&
                  controlM(logInputs.email) == true &&
                  controlP(logInputs.password) == true &&
                  phone !== "" &&
                  birthday !== "" &&
                  adress !== "" &&
                  gov !== "" &&
                  deleg !== "" &&
                  genre !== ""
                ) {
                  props.register_user({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    birthday: birthday,
                    adress: { street: adress, gov: gov, deleg: deleg },
                    genre: genre,
                    role: "client",
                  });
                }
              }}
              disabled={props.notification.block}
              className="submitbtn"
              name="login"
              type="submit"
            >
              S’inscrire{" "}
              <div
                className={props.notification.block == true ? "loader" : ""}
              ></div>
            </button>
          </div>
        </form>
        <div>
          <NavLink to="/login">Login ici</NavLink>
        </div>
      </div>
    </>
  );
}

export default connect(
  (state) => {
    return {
      dishesList: state.r_dishes,
      carted: state.r_cart,
      notification: state.r_register_notification,
    };
  },
  { register_user, sendNotification, resetNotification }
)(Register);
