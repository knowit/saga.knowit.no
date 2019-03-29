const homeTitle = "SAGA HAR FULL OVERSIKT!";
const homeContent = "Lurer du på hvor Enga er!?? Eller kanskje om det er \
whiteboard på Skogen? Spør Saga om det du \
måtte lure på, book møterom eller bare få bedre \
oversikt over Knowit sine lokaler.!";
const aboutTitle = "Så hyggelig at du vil vite mer om meg!";
const aboutContent =  "\
<p>Blablabla</p> \
<p>Blablablablala</p> \
<p>Blablablala</p>";

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
