//this is the server controller where i do send data to the back end....
const User = require('../Model/user')






//Creating A User
exports.postCreateUser = (req, res, next) => {
        // console.log(req.body);
        
        //get the info from the front-end and send to the db
        //CREATE USER
        const newUser = {
                // id: req.body.id,
                FirstName: req.body.firstName,
                LastName: req.body.lastName,
                Address: req.body.address,
                Number: req.body.number,
                Email: req.body.email,
        }
        
        // //SAVE USER IN THE DB
        User.create(newUser)
        .then(result => {
                // console.log(result);
                console.log('userCreated');
        })
        .catch(err => console.log(err))
        
}

//RETRIVE ALL USER
exports.getHompage = (req, res, next) => {

        User.findAll()
        .then(users => {
                res.send({users});
        })
        .catch(err => console.log(err))
}


//RETRIVE A USER BY ID
exports.getAUserByID = (req, res, next) => {
        const id = req.params.id;
        // console.log(id);
        
        User.findByPk(id)
        .then(data => {
                // console.log(data)
                res.send({data})
        })
        .catch(err => console.log(err))
}
//  GETTING A USER TO EDIT
exports.getEdit = (req, res, next) => {
        const id = req.params.id;
        console.log(id);
        
        User.findByPk(id)
        .then(data => {
                // console.log(data)
                res.send({data})
        })
        .catch(err => console.log(err))
}

// POSTING UPDATED USER INFO
exports.postEdit = (req, res, next) => {
        console.log(req.body)
        const id = req.body.id;
        User.findByPk(id)
        .then(user => {
            console.log(user);
            user.FirstName = req.body.firstName;
            user.Lastname = req.body.lastName;
            user.Address = req.body.address;
            user.Number = req.body.number;
            user.Email = req.body.email;
           return user.save()
        })
        .then((user) => {
          console.log(user)
          console.log('UPDATED USER')
        })
        .catch(e => {
          console.log(e);
        });
}

//DELETING A USER
exports.postDelete = (req, res, next) => {
        const id = req.body.id;
        User.findByPk(id)
        .then( user => {
           return user.destroy();
           console.log('User Deleted')
        })
        .catch(err=> console.log(err))
}