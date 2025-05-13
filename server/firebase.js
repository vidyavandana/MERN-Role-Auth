const admin = require('firebase-admin');
const serviceAccount = require('./mern-role-auth-firebase-adminsdk-fbsvc-e6278f6eb2.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const verifyIdToken = async (token) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken;
  } catch (err) {
    throw new Error('Error verifying token');
  }
};

module.exports = { verifyIdToken };
