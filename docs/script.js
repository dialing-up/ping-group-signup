// object lists of all ping groups

let games = {
    AMONG_US: "Among Us",
    ANIMAL_CROSSING:"Animal Crossing",
    BIOWARE:"Bioware Games",
    BLIZZARD:"Blizzard Games",
    CHESS:"Chess",
    CIV:"Sid Meier's Civilization",
    DIPLOMACY:"Diplomacy",
    DOOM:"DOOM",
    DOTA2:"DOTA",
    FALLOUT:"Fallout",
    FIRE_EMB:"Fire Emblem",
    HALO:"Halo",
    HOI4:"Hearts of Iron 4",
    MINECRAFT:"Minecraft",
    MTG:"Magic The Gathering",
    NATIONSTATES:"NationStates Simulation",
    PARADOX:"Paradox games (other than Stellaris and HOI4)",
    RPG:"Tabletop RPGs (like D&D, Shadownrun etc)",
    SHITLER:"Secret Hitler",
    STELLARIS:"Stellaris",
    TES:"The Elder Scrolls",
    XCOM:"XCOM"
};

let general ={
    HORROR: "😱 Horror",
    READING: "📚 Reading",
    MOVIES: "📽️ Movies",
    SCI_FI: "🤖 Sci-Fi",
    TV: "📺 TV",
    GAMING: "🎮 Gaming",
    WEEBS: "(✿◠‿◠) Anime and Manga",
    LGBT: "🏳️‍🌈 LGBT",
};


let school = {
    AI:"Artificial Intelligence",
    ASTRONOMY:"Astronomy",
    AVIATION:"Aviation",
    BIGDATA:"Data Science",
    CAREER:"Career and Job discussion",
    COLLEGE:"College classes, applications, life and more",
    CLASSICS:"Classical Studies",
    COMPUTER_SCIENCE:"CS and Software Development",
    COURT_CASE:"Court cases and Filings.",
    DEBATE:"Debate",
    ECE:"Electronics and Computer Engineering",
    ECON:"Economics",
    HISTORY:"History",
    LANGUAGE:"Linguistics and language learning",
    LAW_SCHOOL:"Law School",
    MATHEMATICS:"Mathematics",
    MUN:"Model United Nations",
    PHILOSOPHY:"Philosophy",
    STEM:"STEM",
    TEACHERS:"Teachers"
};

let countrylist = {
    AFRICA: "Africa",
    BALKANS: "Balkan Nations",
    CAN: "Canada",
    CN_TW: "Mainland China and Taiwan",
    IND: "India",
    V4: "Visegrad 4 Nations",
    CZECH: "Czech Republic",
    BENE: "Benelux Nations",
    FRANCE: "France",
    GER: "Germany",
    ITALY: "Italy",
    SWISS: "Switzerland",
    UK: "United Kingdom",
    EUROPE: "Europe (general)",
    SEA: "Southeast Asia",
    LATAM: "Latin America",
    SCAN: "Scandinavia",
    DEN: "Denmark",
    SWE: "Sweden",
    NOR: "Norway",
    RUS: "Russia",
    ISRAEL: "Israel",
    JAPAN: "Japan",
    AUS: "Australia",
    NZ: "New Zealand"
};

let statelist = {
    USA_AZ:	"Arizona",
    USA_CA:	"California",
    USA_CO:	"Colorado",
    USA_FL:	"Florida",
    USA_GA:	"Georgia",
    USA_IN:	"Indiana",
    USA_MI:	"Michigan",
    USA_MN:	"Minnesota",
    USA_MO:	"Missouri",
    USA_NE:	"New England",
    USA_NY:	"New York State",
    USA_OH:	"Ohio",
    USA_OR:	"Oregon",
    USA_PA:	"Pennsylvania",
    USA_TX:	"Texas",
    USA_UT:	"Utah",
    USA_WA:	"Washington state",
    USA_WI:	"Wisconsin"
}

//functions

//function to generate clickable cards with prictures
function cardCloud(id, list, cardstyle){
    for(let key in list){
        let node = document.createElement("div");
        node.className = String(cardstyle);
        node.setAttribute("id",String(key));
        node.setAttribute("onclick","clicker(this, '" + String(cardstyle) + "')");
        let image = document.createElement("img");
        image.setAttribute('src', String(id) + '/' + String(key) + '.svg');
        image.setAttribute('alt', String(list[key]));
        node.appendChild(image);
        let desc = document.createElement("p");
        desc.className ="font-semibold text-xs sm:text-base text-center py-2";
        desc.textContent = String(list[key]);
        node.appendChild(desc);
        document.getElementById(String(id)).appendChild(node);
    }
}

//function to generate pill clouds 
function tagCloud(id, listed, btnstyle){
    for(let key in listed){
        let node = document.createElement("button");
        node.className = String(btnstyle);
        node.textContent = String(listed[key]);
        node.setAttribute("id",String(key));
        node.setAttribute("onclick","clicker(this, '" + String(btnstyle) + "')");
        document.getElementById(String(id)).appendChild(node);
    }
}

//function to toggle look of buttons when clicked and toggle the SELECTED class
function clicker(id, style){
    let spec = String(style);
    let clicked = spec + "_clicked";
    id.classList.toggle(spec);
    id.classList.toggle(clicked);
    id.classList.toggle("SELECTED");
}

//getting the credentials
const url = new URL(window.location.href);
const cred = url.hash.replace('#', '').split('&').reduce((prev, item) => {
    return Object.assign({[item.split('=')[0]]: item.split('=')[1]}, prev);
    }, {});
console.log(cred);
let access = String(cred.access_token);
let selectlist = [];

//function to read all the items selected and send them to group bot. Also changes the look of the submit button
function submit(){
    //read();
    let submitlist = document.getElementById("alerted");
    submitlist.classList.toggle("hidden");
    let i4 = document.getElementById("arrow");
    i4.classList.add("hidden");
    let i1 = document.getElementById("processing");
    i1.classList.toggle("hidden");
    let node1 = document.getElementById("exectext");
    node1.textContent = "Processing";
    let node2 = document.getElementById("exec");
    node2.disabled = true;
    node2.classList.remove("bg-blue-400");
    node2.classList.add("bg-red-400");
    node2.classList.add("cursor-not-allowed");
    const list = document.querySelectorAll('.SELECTED');
    for (let item of list) {
        let selectitem = String(item.getAttribute("id")).replace("_","-");
        selectlist.push(selectitem);
        post(selectitem);
    }
    setTimeout(function(){
    node2.classList.remove("bg-red-400");
    node2.classList.add("bg-green-400");
    node1.textContent = "Finished";
    i1.classList.toggle("hidden");
    let i2 = document.getElementById("finished");
    i2.classList.toggle("hidden");
    console.log(selectlist);
    }, 500);
}


//function to read the username
function read(){
    fetch('https://oauth.reddit.com/api/v1/me',{
        mode: "cors",
        headers: {"Authorization": "bearer " + access }
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        let node = document.getElementById("username");
        node.textContent = "Hello, " + String(data.name);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
        let node = document.getElementById("username");
        node.textContent = "Something went wrong";
    });
}

//function to send one message to groupbot
function post(ping){
    let node2 = document.getElementById("submitlist");
    let li = document.createElement("li");
    let message = {
        api_type: "json",
        subject: "ADD yourself to group " + String(ping),
        text: "addtogroup " + String(ping),
        to: "groupbot"
    };
    let query = ""
    for (let d in message){
         query += encodeURIComponent(d) + '=' + 
            encodeURIComponent(message[d]) + '&'
    }
    fetch('https://oauth.reddit.com/api/compose?'+query,{
        method: "POST",
        mode: "cors",
        headers: {"Authorization": "bearer " + access }
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        console.log(data);
        li.className = "text-green-600";
        li.textContent = "Message sent to add to group " + ping;
        node2.appendChild(li);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
        li.className = "text-red-600";
        li.textContent = "Failed to send message to add to group " + ping;
        node2.appendChild(li);
    });   
}

//hover:text-white hover:bg-gradient-to-r hover:from-red-400 hover:to-yellow-400

 /*   axios('https://oauth.reddit.com/api/v1/me',{
        method: 'GET',
        headers: {"Authorization": "bearer " + access}
    })
    .then(function (response) {
    // handle success
    console.log(response);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .then(function () {
    // always executed
    });
    axios.post('https://oauth.reddit.com/api/compose', {
        api_type: "json",	
        subject: "Add yourself to group SCIFI",    
        text: "addtogroup SCIFI",
        to: "groupbot"
    },
    {
        "Authorization": "bearer " + access
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    }); */ 

/*  

https://not-an-aardvark.github.io/snoowrap/snoowrap-v1.min.js

const generateRandomString = (length=6)=>Math.random().toString(20).substr(2, length)

<div class="flex justify-around">
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed" disabled>
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing
      </button>
    </span>
  </div> */