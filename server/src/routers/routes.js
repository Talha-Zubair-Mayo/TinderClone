const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");

/* Importing Schema */
const TinderData = require("../models/TinderSchema");
//const User = require("../models/Userschema");

router.use(express.json());
app.use(express.urlencoded({ expexted: false }));
router.use(cors());
router.post("/Tindercard", async (req, res) => {
  const {name, imagee } = req.body;
  if (!name || !imagee) {
    res.status(422).json({ error: "Please Fill All Feilds" });
  }
  try {
    const Tindere = new TinderData({name, imagee });
    console.log(Tindere);
    const DataSaved = await Tindere.save();
    console.log(DataSaved);

       return res.status(200).send({ Message: "Card Inserted Successfully" });
    
  } catch (error) {
    return res.status(400).send({ Error: "Failed To Insert Card" + error});
  }
});

router.get("/Tindercard" ,  (req , res)=>
{
    TinderData.find((err , data)=>
      {
        if(err)
        {
          res.status(500).send(err);
        }
        else
        {
          res.status(200).send(data);
        }
      })
})

module.exports = router;
