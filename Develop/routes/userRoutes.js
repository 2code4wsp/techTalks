//file routes for login/logout session
const router = require('express').Router();
const {User} = require('../../models');

////create a session to allow login/logout
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
        req.session.userId =userData.id;
        req.session.loggedIn = true;
        
        res.status(200).json(userData);
    });
} catch (err) {
    res.status(400).json(err);
}
});

//this finds the user and password, checks credentials and either allows login or denies access
router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({ where: { email: req.body.email}});
        if (!userData) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password, try entering again'});
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res
            .status(400)
            .json({ message: 'Invalid password or email, try entering again'});
            return;
    }
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;
            
            res.json({ user: userData, message: 'Login successful' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//now we need to allow a logout of the session
 router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;