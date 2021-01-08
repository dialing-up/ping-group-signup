// object lists of all ping groups
/*
//cards

Online
Group name	Description
ASK-NL	For asking /r/neoliberal questions
BESTOF	For the best content on /r/neoliberal
NL-ELECTS	In which /r/Neoliberal votes in mock elections
PMG-LIST	For high-effort papermarioguy02 comments (incl. econ, baseball, videogames)
PREZPOLL	In which /r/Neoliberal rates presidencies throughout history
READ-ANOTHER-BOOK	/u/PaulaTreides0's personal shitposting ping
SHITPOSTERS	Helping each other craft quality memes to reach /r/All
SPECIES	/u/p00bix's "Neoliberal evolves a species" series
TACOTUBE	Shillpilling the masses of YouTube
WIKI	Wikipedia

*/

let games = {
    GAMING: "🎮 Gaming (General)",
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
    CHILD:	"👶 Literal children (<18)",
    OVER25:	"👴 The elderly of NL (>25)",
    CHRISTIAN:	"✝️ Christian",
    GEFILTE: "✡️ Jewish",
    ISLAM:	"☪️ Muslim",
    LGBT: "🏳️‍🌈 LGBT",
    FEMALE:	"👩 Women of NL",
    RURAL:	"👩‍🌾 👨‍🌾 Rural",
    SHORT:	"Short",
    TALL:	"Tall",
    BALD:	"👨‍🦲 Bald",     
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
    PHD: "PHDs",
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
};

let policy = {
    ALTRUISM:	"Altruism",
    BLUE_DOGS:	"Blue Dog Democrats",
    CANLIB:	"Canadian Liberals",
    DOWNBALLOT:	"US Downballot races",
    DEMOCRACY: "Democracy",
    DEMS:	"Democratic Party",
    ECO: "Ecology",
    ELECTIONS:	"Elections (Worldwide)",
    FEMINISTS:	"Feminism",
    FOREIGN_POLICY:	"Foreign Policy",
    GEORGIST:	"Georgism",
    HEALTH_POLICY:	"Health Policy",
    IMMIGRATION: "Immigration",
    INTERNATIONAL_RELATIONS: "International Relations",
    LABOR: "Labor issues",
    LAW: "Law",
    MARKETS:	"Markets",
    MILITARY:	"Military",
    RADXC:	"Radical Exchange",
    RINO: "RINO",
    SNEK: "Libertarian",
    TAX:	"Taxes",
    YIMBY:	"YIMBY"
};

let interests = {
    ALCOHOL:	"Alcohol",
    ALTHISTORY:	"Alternative history",
    ANDROID: "Android OS",
    COFFEE:	"Coffee",
    DOG:	"Dogs",
    FASHION:	"Fashion",
    GARAND:	"Guns and firearms",
    KITTY:	"Cats",
    OUTDOORS:	"Outdoor activities (fishing, hiking, camping, etc.)",
    PANDA:	"Panda Bears",
    PC_BUILDING:	"Building PCs",
    RELIGION:	"Religion",
    SPACEFLIGHT:	"Spaceflight and Spacecraft",
    TECH:	"Technology",
    TRAVEL:	"Travel",
    WEED:	"Cannabis",
    WRITING: "Writing"
};

let news = {
    EXTREMISM:	"Extremism",
    FIVEY: "Political Polling",
    NPR:	"NPR",
    GOOD_NEWS:	"Good News"
}

let health = {
    ACCOUNTABILITY:	"Health Accountability",
    BIKE:	"Bicycling",
    COOKING:	"Cooking",
    CORONAVIRUS:	"Coronavirus",
    FAMILY:	"Family",
    FITNESS:	"Fitness",
    FOX_ANON:	"Fox News Anonymous",
    INSOMNIA:	"Insomnia",
    VEGAN:	"Vegans"
};

let tv = {
    TV: "📺 TV (General)",
    HORROR: "😱 Horror",
    MOVIES: "📽️ Movies",
    READING: "📚 Reading",
    SCI_FI: "🤖 Sci-Fi",
    WEEBS: "(✿◠‿◠) Anime and Manga",
    ASOIAF:	"A Song of Ice and Fire / Game of Thrones",
    AVATAR:	"The Last Airbender/The Legend of Korra",
    EXPANSE:	"The Expanse",
    SANDERSON:	"Brandon Sanderson's books",
    SNL:	"Saturday Night Live",
    SURVIVOR:	"Survivor",
    THEGOODPLACE:	"The Good Place",
    TREK:	"Star Trek", 
    WEST_WING:	"The West Wing"
}

let sports = {
    BASEBALL: "Baseball",
    CBB: "College Basketball",
    CFB: "College Football",
    FFB: "Fantasy Football",
    MMA: "MMA",
    MOTO: "Motorsports", 
    PRO_WRESTLING: "Professional wrestling, incl. WWE",
    NBA: "NBA",
    NFL: "NFL",
    NHL: "NHL",
    SOCCER:	"Soccer"
}

let music = {
    CLASSICAL:	"Classical",
    ELECTRONICA:	"Electronic music outside mainstream EDM",
    FOLK:	"Folk, Country, Blues, and Americana",
    INDIE:	"Indie",
    JAZZ:	"Jazz",
    METAL:	"Metal",
    MUSICIAN:	"Group for Musicians",
    OONTS:	"EDM and clubs",
    POP:	"Pop",
    PRETENTIOUS:	"Prog Metal, Prog Rock etc",
    PUNK:	"Punk",
    RAP:	"Rap",
    WORLD_MUSIC:	"World Music"
};

let special = {
    ANNOUNCEMENTS:	"Announcements pertaining to the subreddit or the Neoliberal Project, eg. podcast episodes and meetups",
    MICSPAM:	"Occasionally moderators run a Discord voice chat, join this group to be notified when it's live"
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

//const generateRandomString = (length=6)=>Math.random().toString(20).substr(2, length)
