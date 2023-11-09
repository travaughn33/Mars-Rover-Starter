class Message {
   constructor(name, commands) {
      this.commands = commands
      this.name = name
   if(!name) {
      throw Error("Message name required.");
   }

   
   }
}

module.exports = Message;