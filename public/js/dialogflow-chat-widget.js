/**
 * dialogflow-chat-widget@0.0.1
 * https://github.com/botchway44/dialogflow-chat-widget.git
 * @author Emmanuel Asamoah Botwe (@botchway44)
 * @license BSD-2-Clause
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dialogFlowChatWidget = {}));
}(this, (function (exports) { 'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  var sendButton = "<svg width=\"536\" height=\"536\" viewBox=\"0 0 536 536\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0)\">\n<path d=\"M0 497.25L535.5 267.75L0 38.25V216.75L382.5 267.75L0 318.75V497.25Z\" fill=\"#C7CCD5\"/>\n</g>\n<defs>\n<clipPath id=\"clip0\">\n<rect width=\"535.5\" height=\"535.5\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n";

  var closeIcon = "<svg   id=\"closeSvg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"\r\n          xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59\r\n              12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>\r\n          <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\r\n        </svg>";

  var messageIconWhite = "<svg height=\"512pt\" viewBox=\"0 -45 512 511\" width=\"512pt\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m407 .5h-302c-57.898438 0-105 47.101562-105 105v162.171875c0 46.199219 30.332031 86.4375 74.285156 99.316406l50.710938 50.714844c2.816406 2.8125 6.628906 4.394531 10.609375 4.394531 3.976562 0 7.792969-1.582031 10.605469-4.394531l46.519531-46.523437h214.269531c57.898438 0 105-47.101563 105-105v-160.679688c0-57.898438-47.101562-105-105-105zm75 265.679688c0 41.355468-33.644531 75-75 75h-220.480469c-3.976562 0-7.792969 1.582031-10.605469 4.394531l-40.308593 40.308593-42.929688-42.929687c-1.925781-1.925781-4.339843-3.292969-6.984375-3.949219-32.789062-8.160156-55.691406-37.492187-55.691406-71.332031v-162.171875c0-41.355469 33.644531-75 75-75h302c41.355469 0 75 33.644531 75 75zm0 0\"/><path d=\"m351.242188 144.328125h-190.484376c-8.285156 0-15 6.71875-15 15 0 8.285156 6.714844 15 15 15h190.484376c8.285156 0 15-6.714844 15-15 0-8.28125-6.714844-15-15-15zm0 0\"/><path d=\"m351.242188 197.351562h-190.484376c-8.285156 0-15 6.714844-15 15 0 8.285157 6.714844 15 15 15h190.484376c8.285156 0 15-6.714843 15-15 0-8.285156-6.714844-15-15-15zm0 0\"/></svg>";

  var globalStyles = "@import url(\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;1,300&display=swap\");\n:host {\n  font-family: \"Lato\", sans-serif;\n}\n\n.hidden {\n  display: none;\n}\n\n.showFlex {\n  display: flex;\n}\n\n.showBlock {\n  display: block;\n}";

  var chatWidgetCSS = ":host {\n  width: 100%;\n  height: 100%;\n}\n\n.chat-main-container {\n  /* width: 100%;\r\n  height: 100%; */\n  /* position: absolute; */\n  top: 0;\n  left: 0;\n  /* z-index: 999 !important; */\n}\n\n.chat-wrapper {\n  width: 350px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  position: fixed;\n  bottom: 30px;\n  right: 40px;\n}\n\n.chat-main-wrapper {\n  width: 100%;\n  height: 500px;\n  background-color: white;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n}\n\n.chat-messages-container {\n  padding: 10px;\n  background-color: #f3f3f4;\n  flex: 1;\n  overflow-y: scroll;\n}\n\n.chat-messages-container::-webkit-scrollbar {\n  width: 2px;\n}\n\n.chat-messages-container::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.chat-messages-container::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 0.2px solid slategrey;\n}\n\n.chat-toggle-btn {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #00ad6c;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n  border: none;\n  cursor: pointer;\n}\n\n.chat-toggle-btn img {\n  width: 30px;\n  height: 25px;\n}\n\n#closeSvg {\n  fill: white;\n}\n\n.chat_button_container {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.chat_button_container p {\n  margin: 0px;\n  box-sizing: border-box;\n  background-color: white;\n  padding: 10px;\n  margin-right: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n@media (max-width: 1200px), only screen and (max-device-width: 480px) {\n  .chat-wrapper {\n    width: 95%;\n    bottom: 30px;\n    right: 10px;\n    left: 10px;\n  }\n\n  .chat-main-wrapper {\n    width: 100%;\n    height: 500px;\n    background-color: white;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n  }\n}";

  var chatHeaderWidgetCSS = ":host {\n  width: 100%;\n  height: 50px;\n}\n\n.chat-header-container {\n  background-color: #0032a2;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n}\n\n.chat-header-container svg {\n  width: 40px;\n  height: 30px;\n  object-fit: contain;\n  margin-right: 10px;\n  margin-left: 20px;\n  fill: white;\n}\n\n.chat-header-container h3 {\n  font-size: 18px;\n  color: white;\n  margin: 0px;\n}";

  var chatLoaderWidgetCSS = ".loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  overflow: hidden;\n  animation-delay: 1s;\n  padding: 10px;\n}\n\n.item-1 {\n  width: 10px;\n  height: 10px;\n  background: #019fe6;\n  border-radius: 50%;\n  background-color: #016fc6;\n  margin: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n.item-1:before {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #019fe6;\n  opacity: 0.7;\n  animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  animation-delay: 200ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n\n.item-2 {\n  width: 10px;\n  height: 10px;\n  background: #019fe6;\n  border-radius: 50%;\n  background-color: #016fc6;\n  margin: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n.item-2:before {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #019fe6;\n  opacity: 0.7;\n  animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  animation-delay: 400ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n\n.item-3 {\n  width: 10px;\n  height: 10px;\n  background: #019fe6;\n  border-radius: 50%;\n  background-color: #016fc6;\n  margin: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n.item-3:before {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #019fe6;\n  opacity: 0.7;\n  animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  animation-delay: 600ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n\n.item-4 {\n  width: 10px;\n  height: 10px;\n  background: #019fe6;\n  border-radius: 50%;\n  background-color: #016fc6;\n  margin: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n.item-4:before {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #019fe6;\n  opacity: 0.7;\n  animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  animation-delay: 800ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n\n.item-5 {\n  width: 10px;\n  height: 10px;\n  background: #019fe6;\n  border-radius: 50%;\n  background-color: #016fc6;\n  margin: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n.item-5:before {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #019fe6;\n  opacity: 0.7;\n  animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  animation-delay: 1000ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}";

  var chatUserWidgetCSS = ":host {\n  width: 100%;\n  height: 100%;\n}\n\n.chat-user-message-container {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 20px;\n}\n\n.chat-user-message-container img {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n  margin-right: 10px;\n  margin-left: 10px;\n  border-radius: 50%;\n}\n\n.chat-user-message-container p {\n  min-width: fit-content;\n  background-color: #92db8e;\n  font-size: 14px;\n  color: #1e2d1d;\n  margin: 0px;\n  padding: 10px;\n  border-radius: 20px;\n  /* inset | offset-x | offset-y | color */\n  /* box-shadow: 0.5px 0.5px 20px rgb(0 0 0 / 25%); */\n}";

  var chatBotWidgetCSS = ":host {\n  width: 100%;\n  height: 100%;\n}\n\n.chat-bot-message-container {\n  max-width: fit-content;\n  height: auto;\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n\n.chat-bot-message-container div {\n  content: url(data:image/x-icon;base64,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);\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n  object-position: center;\n  margin-right: 10px;\n  margin-left: 10px;\n  border-radius: 50%;\n  padding: 4px;\n  box-sizing: border-box;\n  background-color: #154dc7;\n}\n\n.chat-bot-message-container p {\n  background-color: #fff;\n  font-size: 14px;\n  color: #1e2d1d;\n  margin: 0px;\n  padding: 10px;\n  border-radius: 20px;\n}";

  var chatInputWidgetCSS = ":host {\n  width: 100%;\n  height: 50px;\n}\n\n.chat-input-container {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 8px;\n}\n\n.chat-input-container svg {\n  width: 25px;\n  height: 25px;\n  object-fit: contain;\n}\n\n.chat-input-container h3 {\n  font-size: 18px;\n  color: white;\n  margin: 0px;\n}\n\n.chat-input-box {\n  width: 100%;\n  height: 100%;\n  border: 0px solid black;\n  border-radius: 10px;\n  outline: none;\n  padding: 5px;\n  box-sizing: border-box;\n}";

  var chatImageWidgetCSS = ":host {\n  width: 100%;\n  height: 100%;\n}\n\n.chat-widget-chip-container {\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n  /* background-color: rebeccapurple; */\n}\n\n.chat-widget-message-container img {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n  margin-right: 10px;\n  margin-left: 10px;\n  border-radius: 50%;\n}\n\n.chat-widget-chip-container span {\n  min-width: fit-content;\n  background-color: white;\n  font-size: 14px;\n  color: #1e2d1d;\n  margin: 5px;\n  padding: 10px;\n  border-radius: 20px;\n  /* inset | offset-x | offset-y | color */\n  /* box-shadow: 0.5px 0.5px 20px rgb(0 0 0 / 25%); */\n  cursor: pointer;\n}";

  /// <reference path="imports.d.ts"/>
  var chatFrameTemplate = document.createElement('template');
  chatFrameTemplate.innerHTML = "\n<style>\n".concat(globalStyles, "\n</style>\n<style>\n").concat(chatWidgetCSS, "\n</style>\n<section class=\"chat-main-container\">\n\n  <section class=\"chat-wrapper\">\n    <section  class=\"chat-main-wrapper\">\n      <chat-header-widget></chat-header-widget> \n      <section class=\"chat-messages-container\">\n\n        <div>\n\n        </div>\n\n         <chat-loader-widget></chat-loader-widget>\n\n      </section>\n      <chat-input-widget></chat-input-widget>\n     \n    </section>\n\n\n    <!-- TODO : REDESIGN SUGGESSTION CHIPS -->\n    <section class=\"chat_button_container\">\n\n      <p >Hello</p>\n\n      <button class=\"chat-toggle-btn\" mat-fab\n        aria-label=\"Example icon button with a delete icon\">\n        \n        ").concat(closeIcon, "\n\n      </button>\n\n    </section>\n\n  </section>\n</section>\n\n\n");
  var chatHeaderTemplate = document.createElement('template');
  chatHeaderTemplate.innerHTML = "\n\n<style>\n".concat(globalStyles, "\n</style>\n<style>\n").concat(chatHeaderWidgetCSS, "\n</style>\n\n<section class=\"chat-header-container\">\n\n  ").concat(messageIconWhite, "\n\n  <h3>Virtual Chat</h3>\n</section>\n\n");
  var chatLoaderTemplate = document.createElement('template');
  chatLoaderTemplate.innerHTML = "\n\n<style>\n".concat(globalStyles, "\n</style>\n<style>\n").concat(chatLoaderWidgetCSS, "\n</style>\n\n<main class=\"loader\">\n    <div class=\"item-1\"></div>\n    <div class=\"item-2\"></div>\n    <div class=\"item-3\"></div>\n    <div class=\"item-4\"></div>\n    <div class=\"item-5\"></div>\n</main>\n\n");
  var chatUserTemplate = document.createElement('template');
  chatUserTemplate.innerHTML = "\n\n<style>\n".concat(globalStyles, "\n</style>\n<style>\n").concat(chatUserWidgetCSS, "\n</style>\n\n<section class=\"chat-user-message-container\">\n\n  <p>Here is a message from the user</p>\n\n  <img src=\"https://avatars.githubusercontent.com/u/16451643?v=4\" alt=\"\" srcset=\"\">\n\n</section>\n\n");
  var chatBotTemplate = document.createElement('template');
  chatBotTemplate.innerHTML = "\n\n<style>\n".concat(globalStyles, "\n</style>\n<style>\n").concat(chatBotWidgetCSS, "\n</style>\n\n<section class=\"chat-bot-message-container\">\n\n  <div></div>\n\n  <p>Here is a message from the Bot </p>\n</section>\n\n");
  var chatInputTemplate = document.createElement('template');
  chatInputTemplate.innerHTML = "\n\n<style>\n".concat(globalStyles, "\n</style>\n<style>\n").concat(chatInputWidgetCSS, "\n</style>\n\n<section class=\"chat-input-container\">\n\n  <input matInput autocomplete=\"off\"   type=\"text\"\n    class=\"chat-input-box\" placeholder=\"ask me somthing\">\n\n    <div class=\"send-button\">\n ").concat(sendButton, "\n  </div>\n\n</section>\n\n\n");
  var chatChipsTemplate = document.createElement('template');
  chatChipsTemplate.innerHTML = "\n\n<style>\n".concat(globalStyles, "\n</style>\n<style>\n").concat(chatImageWidgetCSS, "\n</style>\n\n<section class=\"chat-widget-chip-container\">\n\n</section>\n");
  var chatImageTemplate = document.createElement('template');
  chatImageTemplate.innerHTML = "\n\n<style>\n".concat(globalStyles, "\n</style>\n<style>\n").concat(chatImageWidgetCSS, "\n</style>\n\n<section class=\"chat-widget-image-container\">\n\n</section>\n\n");

  class Chat {
    constructor(text, sessionId, chatType) {
      this.text = text;
      this.sessionId = sessionId;
      this.chatType = chatType;
      this.messageType = "TEXT";
      var uuid = Math.random().toString(36).substring(7);
      this.id = uuid;
    }

  }
  class IntentRequest {
    constructor(projectId, location, agentId, languageCode, sessionId, query) {
      this.projectId = projectId;
      this.location = location;
      this.agentId = agentId;
      this.languageCode = languageCode;
      this.sessionId = sessionId;
      this.query = query;
    }

  }

  class ChatWidgetElement extends HTMLElement {
    constructor() {
      super();
      this.domInitialized = false;
      this.chatState = false;
      this.chats = []; // create sessionId to manange chats

      this.sessionId = Math.random().toString(36).substring(7);
      console.log(this.sessionId);
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(chatFrameTemplate.content.cloneNode(true));
      this.toggleChatViewState = this.toggleChatViewState.bind(this);
      this.chatViewFrame = this.shadowRoot.querySelector('.chat-main-wrapper ');
      this.chatToggleButton = this.shadowRoot.querySelector('.chat-toggle-btn');
      this.chatListFrame = this.shadowRoot.querySelector('.chat-main-wrapper div');
      console.log(this.chatViewFrame);
      console.log(this.shadowRoot);
    }
    /**
     * Returns attributes to be used
     */


    static get observedAttributes() {
      return [''];
    }

    connectedCallback() {
      if (this.domInitialized) {
        return;
      }

      this.domInitialized = true;
      var applyFocusVisiblePolyfill = window.applyFocusVisiblePolyfill;

      if (applyFocusVisiblePolyfill != null) {
        applyFocusVisiblePolyfill(this.shadowRoot);
      } // Add Listeners for send message here


      this.chatToggleButton.addEventListener("click", this.toggleChatViewState); // init chat

      window.addEventListener("queryEntered", event => {
        var message = event.detail.message;
        var chat = new Chat(message, this.sessionId, "USER");
        this.addChat(chat); // create an intentRequest

        var intentRequest = new IntentRequest("stanbic-assistant", "us-central1", "42273d66-29a4-43bc-88e0-616ed050b31a", "en", this.sessionId, chat.text);
        this.verifyIntents(intentRequest);
      });
      window.addEventListener("scrollToView", () => {
        this.scrollToView();
        console.log("scroll");
      });
    }

    toggleChatViewState(_event) {
      console.log("chat toggled");
      this.chatState = !this.chatState; // const chatViewFrame = this.shadowRoot.querySelector('.chat-main-wrapper')

      if (this.chatState) {
        // Show up the chat view
        this.chatViewFrame.style.display = "none"; // change chat icon
        // 
      } else {
        // Hide the chat view
        this.chatViewFrame.style.display = "flex"; // Change chat icon
      }
    }

    addChat(chat) {
      // if chat is a users chat, create a users component
      if (chat.chatType === "USER") {
        // create user widget
        var element = document.createElement("chat-user-widget");
        element.setAttribute("chat", JSON.stringify(chat));
        this.chatListFrame.appendChild(element);
      } else if (chat.chatType === "BOT") {
        // create user widget
        var _element = document.createElement("chat-bot-widget");

        _element.setAttribute("chat", JSON.stringify(chat));

        this.chatListFrame.appendChild(_element);
      } else if (chat.chatType === "CHIPS") {
        var _element2 = document.createElement("chat-chips-widget");

        _element2.setAttribute("chat", JSON.stringify(chat));

        this.chatListFrame.appendChild(_element2);
      } else if (chat.chatType === "IMAGE") {
        var _element3 = document.createElement("chat-image-widget");

        _element3.setAttribute("chat", JSON.stringify(chat));

        _element3.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "center"
        });

        this.chatListFrame.appendChild(_element3);
      }
    }

    attributeChangedCallback(name, _oldValue, newValue) {
      if (!this.hasAttribute(name)) {
        newValue = null;
      }

      console.log(newValue);
    }

    scrollToView() {
      this.chatViewFrame.scroll({
        top: this.chatListFrame.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
      console.log(this.chatListFrame.scrollHeight);
      console.log(this.chatListFrame.scrollHeight);
      this.chatViewFrame.scrollTo(0, this.chatListFrame.scrollHeight);
    }

    setOrRemoveAttribute(name, value) {
      if (value == null) {
        this.removeAttribute(name);
      } else {
        this.setAttribute(name, value);
      }
    }

    verifyIntents(intentRequest) {
      var _this = this;

      return _asyncToGenerator(function* () {
        var myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('Content-Type', "application/json");
        var myInit = {
          method: 'post',
          headers: myHeaders,
          body: JSON.stringify(intentRequest) // body data type must match "Content-Type" header

        };
        var myRequest = new Request('http://localhost:2000/interactions/api', myInit);
        var response = yield fetch(myRequest); //TODO :  Handle responses well

        if (!response.ok) ;

        var data = yield response.json();

        if (data) {
          // add them to the chatList
          for (var chat of data) {
            _this.addChat(chat);
          }
        }
      })();
    }

  }

  class ChatHeaderWidgetElement extends HTMLElement {
    constructor() {
      super();
      this.domInitialized = false;
      this.chatState = false;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(chatHeaderTemplate.content.cloneNode(true));
    }
    /**
     * Returns attributes to be used
     */


    static get observedAttributes() {
      return [''];
    }

    connectedCallback() {
      if (this.domInitialized) {
        return;
      }

      this.domInitialized = true;
      var applyFocusVisiblePolyfill = window.applyFocusVisiblePolyfill;

      if (applyFocusVisiblePolyfill != null) {
        applyFocusVisiblePolyfill(this.shadowRoot);
      } // Add Listeners if there are any

    }

    attributeChangedCallback(name, _oldValue, newValue) {
      if (!this.hasAttribute(name)) {
        newValue = null;
      }

      console.log(newValue);
    }

    setOrRemoveAttribute(name, value) {
      if (value == null) {
        this.removeAttribute(name);
      } else {
        this.setAttribute(name, value);
      }
    }

  }

  class ChatLoaderWidgetElement extends HTMLElement {
    constructor() {
      super();
      this.domInitialized = false;
      this.chatState = false;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(chatLoaderTemplate.content.cloneNode(true));
    }
    /**
     * Returns attributes to be used
     */


    static get observedAttributes() {
      return [''];
    }

    connectedCallback() {
      if (this.domInitialized) {
        return;
      }

      this.domInitialized = true;
      var applyFocusVisiblePolyfill = window.applyFocusVisiblePolyfill;

      if (applyFocusVisiblePolyfill != null) {
        applyFocusVisiblePolyfill(this.shadowRoot);
      } // Add Listeners if there are any

    }

    attributeChangedCallback(name, _oldValue, newValue) {
      if (!this.hasAttribute(name)) {
        newValue = null;
      }

      console.log(newValue);
    }

    setOrRemoveAttribute(name, value) {
      if (value == null) {
        this.removeAttribute(name);
      } else {
        this.setAttribute(name, value);
      }
    }

  }

  class ChatBotWidgetElement extends HTMLElement {
    constructor() {
      super();
      this.domInitialized = false;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(chatBotTemplate.content.cloneNode(true)); // this.message = JSON.parse(this.getAttribute("data"));

      this.chat = JSON.parse(this.getAttribute("message")); // get the message element and append message

      this.messageContainer = this.shadowRoot.querySelector("p");
    }
    /**
     * Returns attributes to be used
     */


    static get observedAttributes() {
      return [''];
    }

    connectedCallback() {
      if (this.domInitialized) {
        return;
      }

      this.domInitialized = true;
      var applyFocusVisiblePolyfill = window.applyFocusVisiblePolyfill;

      if (applyFocusVisiblePolyfill != null) {
        applyFocusVisiblePolyfill(this.shadowRoot);
      } // Add Listeners if there are any
      // this.message = JSON.parse(this.getAttribute("data"));


      this.chat = JSON.parse(this.getAttribute("chat"));
      this.messageContainer.textContent = this.chat.text;
    }

    attributeChangedCallback(name, _oldValue, newValue) {
      if (!this.hasAttribute(name)) {
        newValue = null;
      }

      console.log(newValue);
    }

    setOrRemoveAttribute(name, value) {
      if (value == null) {
        this.removeAttribute(name);
      } else {
        this.setAttribute(name, value);
      }
    }

  }

  class ChatUserWidgetElement extends HTMLElement {
    constructor() {
      super();
      this.domInitialized = false;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(chatUserTemplate.content.cloneNode(true)); // get the message element and append message

      this.messageContainer = this.shadowRoot.querySelector("p");
    }
    /**
     * Returns attributes to be used
     */


    static get observedAttributes() {
      return [''];
    }

    connectedCallback() {
      if (this.domInitialized) {
        return;
      }

      this.domInitialized = true;
      var applyFocusVisiblePolyfill = window.applyFocusVisiblePolyfill;

      if (applyFocusVisiblePolyfill != null) {
        applyFocusVisiblePolyfill(this.shadowRoot);
      } // Add Listeners if there are any
      // this.message = JSON.parse(this.getAttribute("data"));


      this.chat = JSON.parse(this.getAttribute("chat"));
      this.messageContainer.textContent = this.chat.text;
    }

    attributeChangedCallback(name, _oldValue, newValue) {
      if (!this.hasAttribute(name)) {
        newValue = null;
      }

      this.setOrRemoveAttribute(name, newValue);
    }

    setOrRemoveAttribute(name, value) {
      if (value == null) {
        this.removeAttribute(name);
      } else {
        this.setAttribute(name, value);
      }
    }

  }

  class ChatInputWidgetElement extends HTMLElement {
    constructor() {
      super();
      this.domInitialized = false;
      this.chatState = false;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(chatInputTemplate.content.cloneNode(true)); // Register/Bind event listeners to prevent null

      this._handleEnterKeyPressed = this._handleEnterKeyPressed.bind(this);
      this._handleSendButtonPressed = this._handleSendButtonPressed.bind(this); // Select Elements from html

      this.chatInputBox = this.shadowRoot.querySelector('.chat-input-box');
      this.sendButton = this.shadowRoot.querySelector('.send-button');
    }
    /**
     * Returns attributes to be used
     */


    static get observedAttributes() {
      return [''];
    }

    connectedCallback() {
      if (this.domInitialized) {
        return;
      }

      this.domInitialized = true;
      var applyFocusVisiblePolyfill = window.applyFocusVisiblePolyfill;

      if (applyFocusVisiblePolyfill != null) {
        applyFocusVisiblePolyfill(this.shadowRoot);
      } // Add Listeners if there are any


      this.chatInputBox.addEventListener("keydown", this._handleEnterKeyPressed);
      this.sendButton.addEventListener("click", this._handleSendButtonPressed);
    }

    attributeChangedCallback(name, _oldValue, newValue) {
      if (!this.hasAttribute(name)) {
        newValue = null;
      }

      console.log(newValue);
    }

    _handleEnterKeyPressed(_event) {
      this.emitScrollToBottom();
      console.log(_event.key);

      if (_event.key === "Enter") {
        this.emitSendMessageEvent(this.chatInputBox.value);
        this.chatInputBox.value = "";
      }
    }

    _handleSendButtonPressed(_event) {
      console.log(_event);
      this.emitSendMessageEvent(this.chatInputBox.value);
      this.chatInputBox.value = "";
    }

    emitSendMessageEvent(value) {
      var event = new CustomEvent("queryEntered", {
        detail: {
          message: value
        }
      }); // Dispatch an event to the GLobal scope to be handled by the send chat frame

      window.dispatchEvent(event);
    }

    emitScrollToBottom() {
      var event = new CustomEvent("scrollToView"); // Dispatch an event to the GLobal scope to be handled by the send chat frame

      window.dispatchEvent(event);
    }

    setOrRemoveAttribute(name, value) {
      if (value == null) {
        this.removeAttribute(name);
      } else {
        this.setAttribute(name, value);
      }
    }

  }

  class ChatChipsWidgetElement extends HTMLElement {
    constructor() {
      super();
      this.domInitialized = false;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(chatChipsTemplate.content.cloneNode(true)); // this.message = JSON.parse(this.getAttribute("data"));

      this.chat = JSON.parse(this.getAttribute("message")); // get the message element and append message

      this.chipsContainer = this.shadowRoot.querySelector(".chat-widget-chip-container");
    }
    /**
     * Returns attributes to be used
     */


    static get observedAttributes() {
      return [''];
    }

    connectedCallback() {
      if (this.domInitialized) {
        return;
      }

      this.domInitialized = true;
      var applyFocusVisiblePolyfill = window.applyFocusVisiblePolyfill;

      if (applyFocusVisiblePolyfill != null) {
        applyFocusVisiblePolyfill(this.shadowRoot);
      } // Add Listeners if there are any
      // this.message = JSON.parse(this.getAttribute("data"));


      this.chat = JSON.parse(this.getAttribute("chat")); // this.chipsContainer.textContent = this.chat.text;
      // create spans and add to chips frame

      var chips = this.chat.payload;
      console.log(chips);

      for (var item of chips) {
        var element = this.createChipElement(item); // add event listener
        // add to the chips frame

        this.chipsContainer.appendChild(element);
      }
    }

    createChipElement(chip) {
      var element = document.createElement("span");
      element.textContent = chip.text;
      return element;
    }

    attributeChangedCallback(name, _oldValue, newValue) {
      if (!this.hasAttribute(name)) {
        newValue = null;
      }

      console.log(newValue);
    }

    setOrRemoveAttribute(name, value) {
      if (value == null) {
        this.removeAttribute(name);
      } else {
        this.setAttribute(name, value);
      }
    }

  }

  class ChatImageWidgetElement extends HTMLElement {
    constructor() {
      super();
      this.domInitialized = false;
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(chatImageTemplate.content.cloneNode(true)); // this.message = JSON.parse(this.getAttribute("data"));

      this.chat = JSON.parse(this.getAttribute("message")); // get the message element and append message

      this.imagesContainer = this.shadowRoot.querySelector(".chat-widget-image-container");
    }
    /**
     * Returns attributes to be used
     */


    static get observedAttributes() {
      return [''];
    }

    connectedCallback() {
      if (this.domInitialized) {
        return;
      }

      this.domInitialized = true;
      var applyFocusVisiblePolyfill = window.applyFocusVisiblePolyfill;

      if (applyFocusVisiblePolyfill != null) {
        applyFocusVisiblePolyfill(this.shadowRoot);
      } // Add Listeners if there are any
      // this.message = JSON.parse(this.getAttribute("data"));


      this.chat = JSON.parse(this.getAttribute("chat")); // this.imagesContainer.textContent = this.chat.text;
      // create spans and add to chips frame

      var chips = this.chat.payload;
      console.log(chips);

      for (var item of chips) {
        var element = this.createImageElement(item); // add to the chips frame

        this.imagesContainer.appendChild(element);
      }
    }

    createImageElement(media) {
      var element = document.createElement("img");
      element.src = media.url;
      return element;
    }

    attributeChangedCallback(name, _oldValue, newValue) {
      if (!this.hasAttribute(name)) {
        newValue = null;
      }

      this.setOrRemoveAttribute(name, newValue);
    }

    setOrRemoveAttribute(name, value) {
      if (value == null) {
        this.removeAttribute(name);
      } else {
        this.setAttribute(name, value);
      }
    }

  }

  window.customElements.define('chat-image-widget', ChatImageWidgetElement);
  window.customElements.define('chat-chips-widget', ChatChipsWidgetElement);
  window.customElements.define('chat-user-widget', ChatUserWidgetElement);
  window.customElements.define('chat-bot-widget', ChatBotWidgetElement);
  window.customElements.define('chat-header-widget', ChatHeaderWidgetElement);
  window.customElements.define('chat-loader-widget', ChatLoaderWidgetElement);
  window.customElements.define('chat-input-widget', ChatInputWidgetElement);
  window.customElements.define('dialogflow-chat-widget', ChatWidgetElement);

  exports.ChatWidgetElement = ChatWidgetElement;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
