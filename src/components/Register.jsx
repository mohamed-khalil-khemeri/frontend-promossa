import React, { useEffect, useState } from "react";
import "./Register.css";
//import { getDishes } from "../actions/a_dishes";
//import { addToCart, removeFromCart } from "../actions/a_cart";
import { NavLink } from "react-router-dom";
import logo from "../bou9.webp";

import { connect } from "react-redux";

function Register(props) {
  // useEffect(() => {
  //   props.getDishes();
  // }, []);

  // const [filter_key, set_filter_key] = useState("active");
  const [gov, setgov] = useState("");
  const [deleg, setdeleg] = useState("");
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

  return (
    <>
      <div className="regContainer">
        <div className="mylogo">
          <h1>PROMOSSA</h1>
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="email"
              className=""
              name="email"
              id="email"
              placeholder="Adresse e-mail ou numéro de tél."
              autofocus="1"
              aria-label="Adresse e-mail ou numéro de tél."
              required
            />
          </div>

          <div>
            <input
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
            <select className="myregselect" name="gender" id="gender" required>
              <option value="">Quel est votre genre:</option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
          </div>
          <div>
            {/* onClick={(e)=>e.preventDefault()} */}
            <button className="" name="login" type="submit">
              S’inscrire
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

export default connect((state) => {
  return {
    dishesList: state.r_dishes,
    carted: state.r_cart,
    user: state.r_users,
  };
}, {})(Register);
