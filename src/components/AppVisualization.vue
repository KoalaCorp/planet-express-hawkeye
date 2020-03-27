<template>
  <h1>Network</h1>
</template>

<script>
  import vis from "vis-network";
  const axios = require('axios').default;
  export default {
      name: 'AppVisualization'
  };
  async function getData() {
      try {
         let res = await axios({
              url: 'http://localhost:5000/api/topics/default/Ceuta/1',
              method: 'get',
              timeout: 8000,
              headers: {
                  'Content-Type': 'application/json',
              }
          })
          if(res.status == 200){
              var nodes = new vis.DataSet(res.data.topics);
              // create an array with edges
              var edges = new vis.DataSet(res.data.edges);

              // create a network
              var container = document.getElementById('myNetwork');
              var data = {
                nodes: nodes,
                edges: edges
              };
              var options = {};
              var network = new vis.Network(container, data, options);
          }
      }
      catch (err) {
          console.error(err);
      }
  }

  getData();

</script>

<style lang="scss" scoped>
    #myNetwork {
        width: 600px;
        height: 400px;
        border: 1px solid lightgray;
    };
</style>
