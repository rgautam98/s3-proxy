const getSignedUrl = require("../functions/s3Func")

async function getObject(req, res) {

    if(req.url == '/favicon.ico'){
        res.status(200).send("OK")
        return
    }

    let url = req.path

    if(url[0] == '/'){
        url = url.substring(1)
    }

    console.log(url)

    let signedUrl = await getSignedUrl(url)

    if (req.query.returnType == "json") {
        res.status(200).json({
            signedUrl
        })
    } else if (req.query.returnType == "text") {
        res.status(200).send(signedUrl)
    } else {
        res.status(302).redirect(signedUrl)
    }

}

module.exports = getObject 
