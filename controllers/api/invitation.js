const router = require('express').Router();
const jwt_decode = require('jwt-decode');
var db = require('../../models');

const getEmail = (token) => {
  console.log(token);
  decoded = jwt_decode(token);
  return decoded[
    'https://wedding-planner-platform.herokuapp.com/email'
  ];
};

// get all invitation information , route => ('api/invitation')
router.get('/', function (req, res) {
  const email = getEmail(req.authorization.token);

  db.Invitation.findAll({
    where: {
      GuestId: req.query.eventid,
    },
    include: [
      {
        model: db.Guest,
        where: { user_email: email }, // enforces invitations belongs to user email
      },
    ],
  }).then(function (dbInvitation) {
    res.json(dbInvitation);
  });
});

// post a user , route => ('api/invitation')
router.post('/', function (req, res) {
  db.Invitation.create({
    status: req.body.status,
    GuestId: req.body.eventid,
  }).then(function (dbCreateInvitation) {
    res.json(dbCreateInvitation);
  });
});

// update user by id , route => ('api/invitation/:id')
router.put('/:id', function (req, res) {
  db.Invitation.update(
    {
      status: req.body.status,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  ).then(function (dbUpdateInvitation) {
    res.json(dbUpdateInvitation);
  });
});

// delete user by id , route => ('api/invitation/:id')
router.delete('/:id', function (req, res) {
  db.Invitation.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbInvitationDelete) {
    res.json(dbInvitationDelete);
  });
});

module.exports = router;
