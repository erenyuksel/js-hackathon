const news = [true, false, false, true, false, false, false, true, true, true];



function fakeNews(obj) {
    let fakeNewsCount = 0;
    for (let i = 0; i < obj.length; i++) {
       if (obj[i] === false) {
          fakeNewsCount++;
       }
    }
    console.log("Number of fake news:", fakeNewsCount)
    return fakeNewsCount;
   
 }

 fakeNews(news)
