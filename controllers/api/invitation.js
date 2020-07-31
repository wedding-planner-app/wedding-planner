const router = require('express').Router();
var db = require('../../models');

// get all invitation information , route => ('api/invitation')
router.get('/', function (req, res) {
  db.Invitation.findAll({}).then(function (dbInvitations) {
    res.json(dbInvitations);
  });
});

// post a user , route => ('api/invitation')
router.post('/', function (req, res) {
  db.Invitation.create({
    status: req.body.status,
  }).then(function (dbCreateInvitation) {
    res.json(dbCreateInvitation);
  });
});

// update user by id , route => ('api/invitation/:id')
router.put('/:id', function (req, res) {
  db.Invitation.update({
    status: req.body.status,
  }).then(function (dbUpdateInvitation) {
    res.json(dbUpdateInvitation);
  });
});

// delete user by id , route => ('api/user/:id')
router.delete('/:id', function (req, res) {
  db.User.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbUserDelete) {
    res.json(dbUserDelete);
  });
});

module.exports = router;
