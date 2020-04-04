<template>
  <div>
    <h1>Network</h1>
    <div>
      <div class="pad-15-hor pad-15-ver search-parent">
        <div class="search-bar">
          <input v-model="topic" type="search" placeholder="Search by topics">
          </input>
          <button @click="search_topics()">Search</button>
        </div>
      </div>
      <div class="container">
        <div class="row" id="myNetwork"></div>
        <div class="row table-responsive">
          <table class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Topic</th>
                <th scope="col">Urls</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="topic in topics_data" :key="topic.id">
                <td scope="row">{{topic.id}}</td>
                <td>{{topic.label}}</td>
                <td>
                  <ul>
                    <li v-for="url in topic.urls">
                      <a :href="url">{{url}}</a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // getData();
  import vis from "vis-network";
  import axios from "axios";
  export default {
    name: 'AppVisualization',
    /* mounted gets called when the component gets mounted. */
    /* AJAX calls are preferred in mounted lifecycle method */
    mounted() {
      var inside = this;
      inside.getData = async function(topic) {
          try {
             let res = await axios({
                  url: 'http://localhost:5000/api/topics/default/'+ topic +'/1',
                  method: 'get',
                  timeout: 8000,
                  headers: {
                      'Content-Type': 'application/json',
                  }
              });
              if(res.status == 200){
                  inside.topics_data = res.data.topics;
                  var nodes = new vis.DataSet(res.data.topics);
                  // create an array with edges
                  var edges = new vis.DataSet(res.data.edges);

                  // create a network
                  var container = document.getElementById('myNetwork');
                  var data = {
                    nodes: nodes,
                    edges: edges
                  };
                  var options = {
                    layout: {
                      improvedLayout: false
                    },
                    autoResize: false,
                    height: '750px',
                    width: '1500px',
                    clickToUse: false,
                    physics:{
                      enabled: true,
                      solver: 'forceAtlas2Based'
                    }
                  }
                  var network = new vis.Network(container, data, options);
              }
          }
          catch (err) {
              console.error(err);
          }
      };
    },
    /* All the data variable declaration are done here:  */
    data() {
      return {
        topic:'',
        topics_data: []
      };
    },
    /* Methods are defined here */
    methods: {
      search_topics() {
        console.log(this.topic);
        this.getData(this.topic);
      }
    }
  };
</script>
