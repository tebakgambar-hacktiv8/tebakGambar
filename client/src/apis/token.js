const admin = require('firebase-admin')
admin.initializeApp()
admin.auth().createCustomToken('testuid').then((token) => {
  console.log('Custom token created:', token)
}).catch((err) => {
  console.log('Error:', err)
})
