# schientify (WIP)

### USING:
  1. vue-cli
  
  2. vue-router
  
  3. vuex
  
  4. Sass
  
  5. icomoon
  
  6. webpack


### IDEA
  
  一開始是想練習FLEXBOX 但做了些小東西後覺得不夠練手, 後來因為自己也有在用SPOTIFY聽音樂, 看到介面就決定CLONE一個了
  
  不完全一樣, 也加入了頁內實時搜索, 功能也無法做到像SPOTIFY 完善,  
  
  現在介面算是八成, 功能部分還IN PROGRESS, framework主要是Vue半全家桶, 也算是練習vue(其實是cli太方便)
  
  之後打算串一下spotify的api抓資料, 也加入像是簡單的手指鼓功能
  

### Difficulties

  1. 組件之間資料的溝通, 像是播放音樂這個動作牽動的地方就有 播放/停止ICON 背景圖片 專輯封面小圖 進度條 等等, 所以組件間資料的溝通就相對重要了
  
  -> 解決: VUEX mapState/Getter等幫助我少打很多字
  
  
  2. 常常會不自覺省略commit直接更改$store.state 的資料
 
  -> 注意mutations這個步驟
  
  
  3. 還有很多細節未處理, 例如: 資料還沒傳進來時對應的操作

  -> 專案前架構不詳細, 以後要認真點也省時間......
  
  
  4. 未做到完全的RWD, 以後要在細節上多著墨
  
  -> 雖然是使用FLEX, 但這次切版完全是沒有想到要做RWD, 不過也是有自信在平板前不會太差
  
  
  5. 未實現解藕, CSS/HTML/JS 還是沒有做到可複用組件的要求

  -> 寫sliders的時候才熊熊想到, 以後要在規劃時就要想到這點了 
  
  7. 一開始用string 保留歌曲播放的值 , 導致歌曲會重疊播放
  
  -> 後來改用Array保存, 只要長度大於2, 就shift掉最前面的元素


---

DEMO: [schientify](http://chienweiluo.online/schientify/#/)

ref: spotifyWEBAPP, wesbos


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
