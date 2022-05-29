
var ssn;

const trip_index = (req, res) => {
  console.log(req.headers.cookie);
  res.render('index', { cookies : req.headers.cookie, sessionVariable: req.session});
}


const trip_create_get = (req, res) => {
  
  res.render('create', { title: 'Create a new trip' });

}

const trip_create_post = (req, res) => {
  res.cookie('long-term_cookie', req.body.longcookie );

  res.cookie('session_cookie', req.body.sessioncookie,{
    maxAge: 4000,
    expires: new Date('26 December 2022'),
    httpOnly: true,
    secure: true
  });

  res.session = req.body.session;

  res.render('create', { title: 'Create a new trip' });
}

module.exports = {
  trip_index, 
  trip_create_get, 
  trip_create_post, 
}