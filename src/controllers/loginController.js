exports.index = (req, rest) => {
    rest.render('login');
};

exports.register = function (req, res) {
    res.send('Olá')
};