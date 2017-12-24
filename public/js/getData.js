"use strict";

var url_vue = "https://qiita.com/api/v2/items?page=1&per_page=3&query=tag:Vue.js";
var url_node = "https://qiita.com/api/v2/items?page=1&per_page=3&query=tag:node.js";
var url_js = "https://qiita.com/api/v2/items?page=1&per_page=3&query=tag:JavaScript";

var data_vue = {};
var data_node = {};
var data_js = {};

axios.get(url_vue).then(function (res) {

  data_vue = {
    title1: {
      title: res.data[0].title,
      tags: [],
      created_at: res.data[0].created_at
    },
    title2: {
      title: res.data[1].title,
      tags: [],
      created_at: res.data[1].created_at
    },
    title3: {
      title: res.data[2].title,
      tags: [],
      created_at: res.data[2].created_at
    }
  };

  for (var i in res.data[0].tags) {
    data_vue.title1.tags.push(res.data[0].tags[i].name);
  }
  for (var i in res.data[1].tags) {
    data_vue.title2.tags.push(res.data[1].tags[i].name);
  }
  for (var i in res.data[2].tags) {
    data_vue.title3.tags.push(res.data[2].tags[i].name);
  }
});

axios.get(url_node).then(function (res) {

  data_node = {
    title1: {
      title: res.data[0].title,
      tags: [],
      created_at: res.data[0].created_at
    },
    title2: {
      title: res.data[1].title,
      tags: [],
      created_at: res.data[1].created_at
    },
    title3: {
      title: res.data[2].title,
      tags: [],
      created_at: res.data[2].created_at
    }
  };

  for (var i in res.data[0].tags) {
    data_node.title1.tags.push(res.data[0].tags[i].name);
  }
  for (var i in res.data[1].tags) {
    data_node.title2.tags.push(res.data[1].tags[i].name);
  }
  for (var i in res.data[2].tags) {
    data_node.title3.tags.push(res.data[2].tags[i].name);
  }
});

axios.get(url_js).then(function (res) {

  data_js = {
    title1: {
      title: res.data[0].title,
      tags: [],
      created_at: res.data[0].created_at
    },
    title2: {
      title: res.data[1].title,
      tags: [],
      created_at: res.data[1].created_at
    },
    title3: {
      title: res.data[2].title,
      tags: [],
      created_at: res.data[2].created_at
    }
  };

  for (var i in res.data[0].tags) {
    data_js.title1.tags.push(res.data[0].tags[i].name);
  }
  for (var i in res.data[1].tags) {
    data_js.title2.tags.push(res.data[1].tags[i].name);
  }
  for (var i in res.data[2].tags) {
    data_js.title3.tags.push(res.data[2].tags[i].name);
  }
});