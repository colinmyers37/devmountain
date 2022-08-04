const users = []
const bcrypt = require('bcryptjs')
const { response } = require('express')




module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const decrypt_pass = bcrypt.compareSync(password, users[i].password)
        console.log(decrypt_pass)
        if (users[i].username === username && decrypt_pass === true) {
          res.status(200).send(users[i])
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const {username, email, firstName, lastName} = req.body
      const {password: old_password} = req.body
        console.log('Registering User')
        //console.log(req.body)
        //users.push(req.body)
        res.status(200).send(req.body)
        const safe_password = bcrypt.hashSync(old_password, bcrypt.genSaltSync(12))
        let user_obj = {
          username: username,
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: safe_password
        }
        users.push(user_obj)
        console.log("--------");
        console.log(users)
    }
}