export default function handler(req, res) {
    res.status(200).json({
        id: req.query.code,
        name: `Maria ${req.query.code}`,
        email: `maria@xcfmail.com ${req.query.code}`
    })
}