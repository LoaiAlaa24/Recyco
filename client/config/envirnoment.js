var environments = {
  staging: {
    FIREBASE_API_KEY:
      'AAAAsHwEJpc:APA91bE3J66oS987wNkyFAebKnp85-hQoETE2aCzNm6Bk1tXAk5EeBKKH56WtdLsuxgE52NxgaZeWWb0diDq4Vv3gsmEG3lqqmW21ecDVMOVHrZngGLrUil9no5xrVfe0NYSS4qLQJUj',
    FIREBASE_AUTH_DOMAIN: 'recyco-image-recognition.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'recyco-image-recognition.firebaseapp.com',
    FIREBASE_PROJECT_ID: 'recyco-image-recognition',
    FIREBASE_STORAGE_BUCKET: 'gs://recyco-image-recognition.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '757994890903',
    GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyA5TAB0CcpQ5_0QYzO532eHzC2YTw9C-_c'
  },
  production: {
    // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
  }
}

function getReleaseChannel() {
  let releaseChannel = Expo.Constants.manifest.releaseChannel
  if (releaseChannel === undefined) {
    return 'staging'
  } else if (releaseChannel === 'staging') {
    return 'staging'
  } else {
    return 'staging'
  }
}
function getEnvironment(env) {
  console.log('Release Channel: ', getReleaseChannel())
  return environments[env]
}
var Environment = getEnvironment(getReleaseChannel())
export default Environment
