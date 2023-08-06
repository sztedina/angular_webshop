const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const bodyParser = require('body-parser');

const serviceAccount = require('./webshop-1236e-firebase-adminsdk-v5prh-0d8d4cc417.json'); // Firebase Admin SDK szolgáltatási fiók kulcsa
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://webshop-1236e-default-rtdb.firebaseio.com"
});


const app = express();

// CORS beállítások
app.use(cors({
  origin: '*' 
}));


app.use(bodyParser.json());

const verifyToken = (req, res, next) => {
  const idToken = req.headers.authorization;

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      console.error('Hiba történt a token ellenőrzésekor:', error);
      res.sendStatus(401);
    });
};


app.post('/setCustomClaims', verifyToken, (req, res) => {
 
const { uid, claims } = req.body;
  admin
    .auth()
    .setCustomUserClaims(uid, claims)
    .then(() => {
      console.log('Felhasználó claimsek sikeresen beállítva.');
      res.json({ message: 'OK' });
    })
    .catch((error) => {
      console.error('Hiba történt a felhasználó claimsek beállításakor:', error);
      res.sendStatus(500);
    });
});


app.get('/users', verifyToken, (req, res) => {
    admin
      .auth()
      .listUsers()
      .then((userRecords) => {
        const users = userRecords.users.map((user) => ({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          // Egyéb felhasználói adatok ......
        }));
        res.json(users);
      })
      .catch((error) => {
        console.error('Hiba történt a felhasználók lekérésekor:', error);
        res.sendStatus(500);
      });
  });
 
  // Felhasználó claimseinek lekérése UID alapján
app.get('/users/:uid/claims', verifyToken, (req, res) => {
    const { uid } = req.params;
    admin
      .auth()
      .getUser(uid)
      .then((userRecord) => {
        res.json(userRecord.customClaims);
      })
      .catch((error) => {
        console.error('Hiba történt a felhasználó lekérdezésekor:', error);
        res.sendStatus(500);
      });
  });

// Szerver figyelése a megadott porton
const port = 3000;
app.listen(port, () => {
  console.log(`A szerver fut a ${port} porton...`);
});