const express = require('express');
const app = express();
const logger = require('morgan');
const bodyPaser = require('body-parser');

const apiRouter = express.Router();
app.use(logger('dev', {}));
app.use(bodyPaser.json());
app.use('/api', apiRouter);


apiRouter.post('/getRecentStoreList', (req, res) => {
    const responseBody = {
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "simpleText": {
          "text": "최근에 고객님이 이용하신 매장이에용.\r\n버튼을 눌러 선택해주세욧!"
        },
        "carousel": {
          "type": "basicCard",
          "items": [
            {
              "title": "리아 소공2호",
              "description": "영업시간 : 08:00~21:00",
              "thumbnail": {
                "imageUrl": "https://chatbot.lottegrs.co.kr:8444/resources/images/store/11001.png"
              },
              "buttons": [
                {
                  "action": "block",
                  "label": "선택하기",
                  "messageText": "선택하기",
                  "blockId": "5ab9a2e2ed255f5089c9410c",
                  "extra": {
                    "storeName": "리아 소공2호",
                    "storeId": 11001
                  }
                },
                {
                  "action": "webLink",
                  "label": "위치보기",
                  "webLinkUrl": "http://map.daum.net/link/map/>리아 소공2호,37.56499100,126.98136900"
                }
              ]
            }
          ]
        }
      }
    ],
    "quickReplies": [
      {
        "action": "block",
        "label": "가까운 매장 검색",
        "messageText": "가까운 매장 검색",
        "blockId": "5ab84f157a487f07392fb175"
      },
      {
        "action": "block",
        "label": "키워드로 검색",
        "messageText": "키워드로 검색",
        "blockId": "5ab8529ee8212750b04fb989"
      },
      {
        "action": "block",
        "label": "최근 이용 매장",
        "messageText": "최근 이용 매장",
        "blockId": "5ab84d63ed255f5089c94095"
      }
    ]
  }
}
    res.status(200).send(responseBody);
});

apiRouter.post('/showInfo', (req, res) => {
    console.log(req.headers);
    console.log(req.body);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: "골라봐"
                    }
                }
            ],
            quickReplies: [
                {
                    label: "정보보기",
                    action: "block",
                    messageText: "정보를 보여줍니다.",
                    blockId: "5c5b9870384c553f07cd0bc8",
                    extra: {
                        infoKey: "value"
                    }
                },
                {
                    label: "다음으로",
                    action: "block",
                    messageText: "다음으로",
                    blockId: "5a56ec0008cc1461d75291f6"
                }
            ]
        }
    };
    res.status(200).send(responseBody);
    console.log(responseBody);
});

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
    console.log(req.headers);
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
