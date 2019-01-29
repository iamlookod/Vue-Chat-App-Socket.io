<template>
  <div class="container ">
    <div class="row justify-content-md-center">
      <div class="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
        <div class="col-md-12 text-left">
          <ul class="box-chat list-unstyled">
            <li v-for="(message,index) in messages" :key="index"><span class="badge badge-pill badge-success">{{ message.text }}</span></li>
          </ul>
        </div>
        <div class="col-md-12">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Message" v-model="text" @keyup.enter="sendMessage">
            <div class="input-group-append">
              <button class="btn btn-success" type="button" id="button-addon2">Send >></button>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import io from 'socket.io-client'

  export default {
    name: 'Chat',
    data() {
      return {
        text: '',
        messages: [],
        socket: io('localhost:3000')
      }

    },
    methods: {
      sendMessage() {
        this.socket.emit('MESSAGE', this.text)
        this.text = ''
      }
    },
    mounted() {
      let vm = this
      this.socket.on('MESSAGE', function (msg) {
        vm.messages.push({
          text: msg
        })
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box-chat {
    height: 250px;
    overflow: auto;
  }
</style>