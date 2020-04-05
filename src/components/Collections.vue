<template>
  <div ref="collections" id="collections">
    <div class="form-check form-check-inline" v-for="collection in collections">
      <input class="form-check-input"
             type="checkbox"
             name="inlineRadioOptions"
             :id="collection"
             :value="collection"
             v-model="collections">
      <label class="form-check-label" for="inlineRadio1">
        {{collection}}
      </label>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: 'Collections',
    mounted() {
      var inside = this;
      var getCollections = async function() {
        try {
          let res = await axios({
            url: 'http://localhost:5000/api/collections',
            method: 'get',
            timeout: 8000,
            headers: {
              'Content-Type': 'application/json',
            }
          });
          if(res.status == 200){
            inside.collections = res.data;
          }
        }
        catch (err) {
          console.error(err);
        }
      };
      getCollections();
    },
    data() {
      return {
        collections: []
      };
    }
  };
</script>
