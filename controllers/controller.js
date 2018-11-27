const items = [{
        id: 1,
        name: 'product1'
    },
    {
        id: 2,
        name: 'product2'
    },
    {
        id: 3,
        name: 'product3'
    },
    {
        id: 4,
        name: 'product4'
    },
    {
        id: 5,
        name: 'product5'
    },
    {
        id: 6,
        name: 'product6'
    },
    {
        id: 7,
        name: 'product7'
    },
    {
        id: 8,
        name: 'product8'
    },
    {
        id: 9,
        name: 'product9'
    }
]

const index = (req, res) => {
    res.render('index', {
        title: "Web Store"
    });
};

const product = (req, res, next) => {
    res.render('products', {
        title: 'List Of Products',
        items: items
    });
};

const newProduct = (req, res, next) => {

    const {
        newItem
    } = req.body;

    items.push({
        id: items.length + 1,
        name: newItem
    });

    res.redirect('/products');

};

module.exports = {
    index,
    product,
    newProduct
};