const homeTitle = "SAGA - hun som ser ALT!";
const homeContent = "<p>Lurer du på hvor Høst er? Eller om det finnes whiteboard på Salongen? Skal du invitere til fire timers-workshop med kunde trenger stor skjerm, Zoom, godt lys OG behagelige sitteplasser? Din tid som spørsmålstegn er herved over. Saga is at your service!</p>\
<p>Saga er en serviceinnstilt virtuell møteromsassistent som svarer deg på alt du måtte lure på om møterommene i Knowit sine Oslo-lokaler. Hun legges enkelt til som app i Slack og er alltids klar til å hjelpe! </p>";
const aboutTitle = "Så hyggelig at du vil bli bedre kjent med Saga!";
const aboutContent =  "\
<p>Kjenner noen seg igjen i dette scenariet?\
“Jeg har et møte på Kvisten, vet dere hvor det er eller?” \
“Øhhh… jeg tror det er i fjerde etasje, nei, forresten er det ikke ved siden av klasserommet, der hvor insight sitter?”\
</p> \
<p>Vi var en liten munter gjeng som på tvers av forretningsområdene fant sammen i den evinnelige søken etter “Hvor er egentlig [insert room name]?!  Men, var det bare oss? Var vi bare litt trege?  Dette måtte vi komme til bunns i. Vi tredde David Attenborough hatten på og gjennomførte flere uformelle spørreundersøkelser, vitneobservasjoner, feltundersøkelser og geriljatester. Og, resultatene var overraskende unisone (var heldigvis ikke bare trege). I en bedrift der vi liker å booke møter, delta på møter, og invitere til møter var det et overraskende stort gap mellom digital organisering av møterom og det å faktisk vite hvor du fysisk skal møte opp. Spesielt om du er ny i bygget. Eller, stryk det. Helt uavhengig av hvor lenge du har jobbet i Lakkegata 52.</p> \
<p>Den muntre gjengen så sitt snitt til å gjøre en forskjell. En mulighet til å gjøre noe stort for å bidra til noe så lite som å vise hvor møterom er på en brukervennlig og lett tilgjenglig måte, gjennom Slack. Ved å ta i bruk kunnskapen på tvers av Knowit sine tre fagområder, utforske, teste og feile ser du i dag resultatet av dette arbeidet. Og, hun heter Saga. Et navn som ikke er tatt ut av løse luften. Saga kommer fra norrøn mytologi og betyr  \"hun som ser alt \". De lærde strides om hun egentlig heter Såga, og egentlig er et annet navn på Frigg (konen til Odin), men det hang vi oss ikke så mye opp i. Vi syntes Saga var perfekt!</p> \"  \
<p>Saga 1.0 er vårt bidrag til å gjøre et litt enklere å få finne rett møterom, booke rett møterom og møte opp til rett møterom til rett tid. I dag kan du stille spørsmål til Saga om hva slags fasiliteter som finnes i konkrete rom, slik som hva slags stoler, hvordan rommet ser ut, finnes det Zoom, er det skjermer? Hun gir oversikt over alle rom i hver etasje, alle rom som har white board, og anbefaler room om det du hadde sett deg ut er opptatt akkurat nå. Men, vi har større ambisjoner for Saga. Så her er det bare å glede seg til fortsettelsen!</p>";


new Vue({
  el: "#main",
  data: {
    title: homeTitle,
    content: homeContent,
    img: "img/saga-closed-eyes.png",
    activeAbout: false,
  },
  methods: {
    goHome: function() {
        this.title = homeTitle;
        this.content = homeContent;
        this.img = "img/saga-closed-eyes.png";
        this.activeAbout = false;
    },
    goAbout: function() {
        this.title = aboutTitle;
        this.content = aboutContent;
        this.img = "img/saga-open-eyes.png";
        this.activeAbout = true;
    },
    openChat: function() {
      chatPanel.show();
      document.querySelector(".chat-button-middle").style.borderColor = "#657CAC";
      setTimeout(function() { document.getElementById("chat-container").children[0].style.height = "600px"; }, 200);
    }
  }
});

let chatPanel;
function initialize() {
  chatPanel = window.boostChatPanel({
    apiUrlBase: "https://partner4.boost.ai/api",
    botIconUrl: "img/ivar-chat-grey.svg", 
    pace: "fast"
  });
  let title = document.querySelector(".info-text-title");
  title.classList.remove("hidden");
  let content = document.querySelector(".info-text-content");
  content.classList.remove("hidden");
}

window.onload = initialize;
