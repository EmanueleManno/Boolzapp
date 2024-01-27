//VEDO SE FUNZIONA VUE:
console.log("VUE OK", Vue);

//ESTRAPOLO IL METODO PER CREARE L'APP:
const { createApp } = Vue;

//INIZIALIZZO L'APP VUE:
const app = createApp({
  data() {
    return {
      //INDICE INIZIALE:
      currentIndex: 0,
      newMessage: "",
      searchedTerm: "",

      //NOME UTENTE:
      user: {
        name: "Emanuele Manno",
        avatar: "_io",
      },

      //CONTATTI:
      contacts: [
        {
          //CONTATTO 1:
          id: 1,
          name: "Michele",
          avatar: "_1",
          visible: true,

          //MESSAGGI CONTATTO 1:
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              id: 3,
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          //CONTATTO 2:
          id: 2,
          name: "Fabio",
          avatar: "_2",
          visible: true,

          //MESSAGGI CONTATTO 2:
          messages: [
            {
              id: 1,
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              id: 2,
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              id: 3,
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          //CONTATTO 3:
          id: 3,
          name: "Samuele",
          avatar: "_3",
          visible: true,

          //MESSAGGI CONTATTO 3:
          messages: [
            {
              id: 1,
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              id: 2,
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              id: 3,
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          //CONTATTO 4:
          id: 4,
          name: "Alessandro B.",
          avatar: "_4",
          visible: true,

          //MESSAGGI CONTATTO 4:
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          //CONTATTO 5:
          id: 5,
          name: "Alessandro L.",
          avatar: "_5",
          visible: true,

          //MESSAGGI CONTATTO 5:
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          //CONTATTO 6:
          id: 6,
          name: "Claudia",
          avatar: "_6",
          visible: true,

          //MESSAGGI CONTATTO 6:
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              id: 3,
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          //CONTATTO 7:
          id: 7,
          name: "Federico",
          avatar: "_7",
          visible: true,

          //MESSAGGI CONTATTO 7:
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          //CONTATTO 8:
          id: 8,
          name: "Davide",
          avatar: "_8",
          visible: true,

          //MESSAGGI CONTATTO 8:
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              id: 3,
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },

  computed: {
    //CURRENT CONTACT:
    currentContact() {
      return this.contacts[this.currentIndex];
    },

    //CURRENT CHAT:
    currentChat() {
      return this.currentContact.messages;
    },

    //CERCA UN CONTATTO:
    filteredChat() {
      const term = this.searchedTerm.toLowerCase();
      console.log(term);

      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(term)
      );

      /* IMPLEMENTAZIONE RICERCA:
      return this.contacts.map((contact) =>
        contact.visibile.contact.name.toLowerCase().includes(term)
      );
      */
    },
  },

  methods: {
    //IMPOSTARE L'INDICE:
    setCurrentIndex(targetIndex) {
      this.currentIndex = targetIndex;
    },

    //INVIA MESSAGGIO:
    sendMessage() {
      if (!this.newMessage) return;
      const message = {
        id: new Date().getTime(),
        date: new Date().toLocaleString(),
        message: this.newMessage,
        status: "sent",
      };

      //PUSHA LA RISPOSTA IN PAGINA:
      this.currentChat.push(message);
      this.newMessage = "";

      //RISPONDI AL MESSAGGIO:
      setTimeout(() => {
        const reply = {
          id: new Date().getTime(),
          date: new Date().toLocaleString(),
          message: "Ok",
          status: "received",
        };

        //PUSHA LA RISPOSTA IN CHAT:
        this.currentChat.push(reply);
      }, 1500);
    },
  },
});

//LA MONTO NELL'ELEMENTO HTML RADICE:
app.mount("#root");
