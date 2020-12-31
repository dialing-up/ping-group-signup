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
    SCIFI: "🤖 Sci-Fi",
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
        desc.className ="font-semibold text-lg text-center p-2";
        desc.textContent = String(list[key]);
        node.appendChild(desc);
        document.getElementById(String(id)).appendChild(node);
    }
}


function tagCloud(id, listed, btnstyle){
    //var elem = document.getElementById(id);
    for(let key in listed){
        let node = document.createElement("button");
        node.className = String(btnstyle);
        node.textContent = String(listed[key]);
        node.setAttribute("id",String(key));
        node.setAttribute("onclick","clicker(this, '" + String(btnstyle) + "')");
        document.getElementById(String(id)).appendChild(node);
    }
}

function clicker(id, style){
    let spec = String(style);
    let clicked = spec + "_clicked";
    id.classList.toggle(spec);
    id.classList.toggle(clicked);
    id.classList.toggle("SELECTED");
}

//hover:text-white hover:bg-gradient-to-r hover:from-red-400 hover:to-yellow-400