if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://rahul chandnani:A8085832101b@ds163689.mlab.com:63689/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}