const mongoose  = require("mongoose");
const DB = process.env.DB_Connect;
/* Creating a Database */
mongoose
  .connect( "mongodb+srv://Tkashi328:Talha328@tinderclone.anlvt.mongodb.net/tnderdb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false,
  })
  .then(() => {
    console.log(`Connected To Online Db Successfully...... `);
  })
  .catch((err) => {
    console.log(`Connection failed`);
  });
