const _appHbg = Vue.component("app-hbg-menu", {
  template: `
    <div class="app-hbg-menu">
      <a class="conf hbg">
        <span class="hbg-1"></span>
        <span class="hbg-2"></span>
        <span class="hbg-3"></span>
      </a>
    </div>
  `
})

const _blur = Vue.component("blur", {
  template: `<div></div>`
})

const _appHeader = Vue.component("app-header", {
  template: `
  <div class="app-header">
    <header>
      <p>Qi-tan</p>
    </header>
  </div>  
  `
})

const _menu = Vue.component("app-menu", {
  template: `
    <div>
      <ul>
        <router-link to="/" tag="li">Home</router-link>    
        <router-link to="/vue" tag="li">Vue.js</router-link>        
        <router-link to="/node" tag="li">Node.js</router-link>              
        <router-link to="/js" tag="li">JavaScript</router-link>      
      </ul>
    </div>
  `
})

const home = {
  template: `
  <div>
    <h1>Home</h1>
    <p>Hi, there!</p>
    <p>I am Vue.js sample with Qiita api.</p>
  </div>
  `,
  data: function () {
    return data_home
  }
}

const vue = {
  template: `
  <div>
    <h1>Vue</h1>
    <div class="article">
      <div class="article-title">
        <p>{{ title1.title }}</p>
      </div>
      <div class="data">
        <div class="data-tags">
          <span>タグ: </span>
            <ul>
              <li v-for="i in title1.tags">{{ i }}</li>   
            </ul>
        </div>
        <div class="data-date">
          <span>作成日: </span>
          <span>{{ title1.created_at }}</span>
        </div>
      </div>
    </div>

    <div class="article">
      <div class="article-title">
        <p>{{ title2.title }}</p>
      </div>
      <div class="data">
        <div class="data-tags">
          <span>タグ: </span>
            <ul>
              <li v-for="i in title2.tags">{{ i }}</li>   
            </ul>
        </div>
        <div class="data-date">
          <span>作成日: </span>
          <span>{{ title2.created_at }}</span>
        </div>
      </div>
    </div>

    <div class="article">
      <div class="article-title">
        <p>{{ title3.title }}</p>
      </div>
      <div class="data">
        <div class="data-tags">
          <span>タグ: </span>
            <ul>
              <li v-for="i in title3.tags">{{ i }}</li>   
            </ul>
        </div>
        <div class="data-date">
          <span>作成日: </span>
          <span>{{ title3.created_at }}</span>
        </div>
      </div>
    </div>
  </div>
  `,
  data: function () {
    return data_vue
  }
}

const node = {
  template: `
  <div>
    <h1>Node.js</h1>
    <div class="article">
      <div class="article-title">
        <p>{{ title1.title }}</p>
      </div>
      <div class="data">
        <div class="data-tags">
          <span>タグ: </span>
            <ul>
              <li v-for="i in title1.tags">{{ i }}</li>   
            </ul>
        </div>
        <div class="data-date">
          <span>作成日: </span>
          <span>{{ title1.created_at }}</span>
        </div>
      </div>
    </div>

    <div class="article">
      <div class="article-title">
        <p>{{ title2.title }}</p>
      </div>
      <div class="data">
        <div class="data-tags">
          <span>タグ: </span>
            <ul>
              <li v-for="i in title2.tags">{{ i }}</li>   
            </ul>
        </div>
        <div class="data-date">
          <span>作成日: </span>
          <span>{{ title2.created_at }}</span>
        </div>
      </div>
    </div>

    <div class="article">
      <div class="article-title">
        <p>{{ title3.title }}</p>
      </div>
      <div class="data">
        <div class="data-tags">
          <span>タグ: </span>
            <ul>
              <li v-for="i in title3.tags">{{ i }}</li>   
            </ul>
        </div>
        <div class="data-date">
          <span>作成日: </span>
          <span>{{ title3.created_at }}</span>
        </div>
      </div>
    </div>
  </div>
  `,
  data: function () {
    return data_node
  }
}

const js = {
  template: `
  <div>
    <h1>JavaScript</h1>
    <div class="article">
      <div class="article-title">
        <p>{{ title1.title }}</p>
      </div>
      <div class="data">
        <div class="data-tags">
          <span>タグ: </span>
            <ul>
              <li v-for="i in title1.tags">{{ i }}</li>   
            </ul>
        </div>
        <div class="data-date">
          <span>作成日: </span>
          <span>{{ title1.created_at }}</span>
        </div>
      </div>
    </div>

    <div class="article">
      <div class="article-title">
        <p>{{ title2.title }}</p>
      </div>
      <div class="data">
        <div class="data-tags">
          <span>タグ: </span>
            <ul>
              <li v-for="i in title2.tags">{{ i }}</li>   
            </ul>
        </div>
        <div class="data-date">
          <span>作成日: </span>
          <span>{{ title2.created_at }}</span>
        </div>
      </div>
    </div>

    <div class="article">
      <div class="article-title">
        <p>{{ title3.title }}</p>
      </div>
      <div class="data">
        <div class="data-tags">
          <span>タグ: </span>
            <ul>
              <li v-for="i in title3.tags">{{ i }}</li>   
            </ul>
        </div>
        <div class="data-date">
          <span>作成日: </span>
          <span>{{ title3.created_at }}</span>
        </div>
      </div>
    </div>
  </div>
  `,
  data: function () {
    return data_js
  }
}