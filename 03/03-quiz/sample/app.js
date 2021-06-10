Vue.component('child-component',{
  props : ['propsdata'],
  template : '<p>{{propsdata}}</p>'
});

Vue.component('sibling-component',{
  props : ['siblingsdata'],
  template : '<p>{{siblingsdata}}</p>'
});

var app = new Vue({
  el : '#app',
  data : {
    message : 'Hello Vue! passed from Parent component',
    anotherMessage : 'anotherMessage is appear!!',
  }
});
