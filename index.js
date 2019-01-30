const express = require('express');
const app = express();
const logger = require('morgan');
const bodyPaser = require('body-parser');

const apiRouter = express.Router();
app.use(logger('dev', {}));
app.use(bodyPaser.json());
app.use('/api', apiRouter);

apiRouter.post('/sayHello', (req, res) => {
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: "hello I'm Ryan"
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
});

apiRouter.post('/showHello', (req, res) => {
    console.log(req.header);
    console.log(req.body);

    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleImage: {
                        imageUrl: "https://img.resized.co/image_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cXFwvc3RvcmFnZS5wdWJsaXNoZXJwbHVzLmllXFxcL21lZGlhLmltYWdlLmllXFxcL3VwbG9hZHNcXFwvMjAxOVxcXC8wMVxcXC8yNDEyMjkzMFxcXC9pbWFnZS5pZS1IZWFkZXItSW1hZ2UucG5nXCIsXCJ3aWR0aFwiOjk5MCxcImhlaWdodFwiOjUyOSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmltYWdlLmllXFxcL2ltYWdlc1xcXC9uby1pbWFnZS5wbmc_dj0yXCJ9IiwiaGFzaCI6ImY3N2I2MjQxNWIwZTZiYTJmMWYzN2E5ODk5ZGVmNmE2MjdjZGI5YmIifQ==/image-ie-header-image.png",
                        altText: "hello I'm Ryan"
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
});

app.listen(3000, () => {
    console.log("Example skill server listening on port 3000!");
});