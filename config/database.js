if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://rahul chandnani:A@8085832101b@ds113640.mlab.com:13640/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}