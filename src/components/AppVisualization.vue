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
        <Collections @change="onCheckedCollection">
        </Collections>
      </div>
      <div class="container">
        <div class="row" id="myNetwork"></div>
        <div class="row table-responsive">
          <table class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Topic</th>
                <th scope="col">Urls</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="topic in topics_data" :key="topic.id">
                <td scope="row">{{topic.id}}</td>
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
  import Collections from "@/components/Collections.vue";
  import vis from "vis-network";
  import axios from "axios";
  export default {
    name: 'AppVisualization',
    mounted() {
      var inside = this;
      inside.initNetwork = function() {
        inside.topics_data = [];
        inside.nodes = new vis.DataSet();
        inside.edges = new vis.DataSet();

        // create a network
        inside.container = document.getElementById('myNetwork');
        inside.data = {
          nodes: inside.nodes,
          edges: inside.edges
        };
        inside.options = {
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
        };
        inside.network = new vis.Network(inside.container, inside.data, inside.options);
      };
      inside.initNetwork();

      inside.getData = async function(topic, collection) {
          try {
            let res = await axios(
              {
                url: 'http://localhost:5000/api/topics/' + collection + '/' + topic,
                method: 'get',
                timeout: 8000,
                headers: {
                    'Content-Type': 'application/json',
                }
              });
              if(res.status == 200){
                res.data.topics.forEach(topic => {
                  var index = inside.topics_data.findIndex(o => o.id === topic.id);
                  if(index != -1){
                    topic.urls.forEach(url => {
                      inside.topics_data[index].urls.push(url)
                    });
                  } else {
                    inside.topics_data.push(topic)
                  };
                  inside.nodes.update(topic);
                });
                inside.edges.update(res.data.edges);
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
        topics_data: [],
        collections_checked: []
      };
    },
    /* Methods are defined here */
    methods: {
      search_topics() {
        this.network.destroy();
        this.initNetwork();
        this.collections_checked.forEach(collection => {
          this.getData(this.topic, collection)
        });
      },
      onCheckedCollection(collections_checked) {
        this.collections_checked = collections_checked;
      }
    },
    components: {
      Collections
    }
  };
</script>
