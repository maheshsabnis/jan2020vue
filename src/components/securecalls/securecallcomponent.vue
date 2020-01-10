<template>
  <div class="container">
    <input
      type="button"
      value="Register"
      class="btn btn-warning"
      @click="register()"
    />
    <hr />
    <input
      type="button"
      value="Login"
      class="btn btn-success"
      @click="login()"
    />
    <hr />
    <input
      type="button"
      value="Get Data"
      class="btn btn-danger"
      @click="getData()"
    />
  </div>
</template>
<script>
import { HttpSecureService } from "./../../services/seccureservice";
const servObj = {
  serv: new HttpSecureService()
};
export default {
  name: "SecureCallComponent",
  methods: {
    register: function() {
      let user = {
        Email: "james@msit.com",
        Password: "P@ssw0rd_",
        ConfirmPassword: "P@ssw0rd_"
      };
      servObj.serv
        .register(user)
        .then(resp => {
          console.log(JSON.stringify(resp.data));
        })
        .catch(err => {
          console.log(err);
        });
    },
    login: function() {
      let user = {
        UserName: "james@msit.com",
        Password: "P@ssw0rd_"
      };
      let authToken = {
        token: ""
      };
      servObj.serv
        .login(user)
        .then(resp => {
          console.log(JSON.stringify(resp.data));
          // data is received using token
          sessionStorage.setItem("token", resp.data.Message);
          authToken.token = resp.data.Message;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getData: function() {
      let authToken = {
        token: sessionStorage.getItem("token")
      };
      servObj.serv
        .getdata(authToken)
        .then(resp => {
          console.log(JSON.stringify(resp.data));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
