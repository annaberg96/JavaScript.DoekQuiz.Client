// The following methods are based on Jesper Brunn's code
// https://github.com/Distribuerede-Systemer-2017/javascript-client
const SDK = {
  // URL server
    serverURL: "http://localhost:8080/api",
 // SDK request

    request: (options, cb) => {

    let headers = {};
    if (options.headers) {
      Object.keys(options.headers).forEach((h) => {
        headers[h] = (typeof options.headers[h] === 'object') ? JSON.stringify(options.headers[h]) : options.headers[h];
      });
    }

    $.ajax({
      url: SDK.serverURL + options.url,
      method: options.method,
      headers: headers,
      contentType: "application/json",

      // The data sent to the server is being encrypt
      dataType: "json", data: JSON.stringify(SDK.encrypt(JSON.stringify(options.data))),
      success: (data, status, xhr) => {
        callback(null, data, status, xhr);
      },
      error: (xhr, status, errorThrown) => {
        cb({xhr: xhr, status: status, error: errorThrown});
      }
    });

  },

// Request for sign up
signUp: (username, password, callback) =>{
SDK.request({
    data: {
        username: username,
        password: password
    },
    method: "POST",
    url: "/user/signup"
}, (err, data) => {
    if(err) return callback(err);
});

},

// Request for log in

}
  login: (username, password, callback) => {
   SDK.request({
       data: {
           username: username,
           password: password,
       },
       url: "/user/login",
       method: "POST"
   }, (err, data) => {
     if (err) return callback(err);
// Storing the token
      SDK.Storgage.persist("token", JSON.parse(data));

      callback(null,data);
       });

      },


// Request for loading all courses
loadCourses: (cb) => {
  SDK.request({
      method: "GET",
      URL: "/course",
      headers: {
          authorization: SDK.Storage.load("myToken"),
      },
  }, (err, data) => {
      if (err) return callback(err);
      callback(null, data);

});


},



  User: {
    findAll: (cb) => {
      SDK.request({method: "GET", url: "/staffs"}, cb);
    },
    current: () => {
      return SDK.Storage.load("user");
    },
    logOut: () => {
      SDK.Storage.remove("tokenId");
      SDK.Storage.remove("userId");
      SDK.Storage.remove("user");
      window.location.href = "index.html";
    },

        //On login-error
        if (err) return cb(err);

        SDK.Storage.persist("tokenId", data.id);
        SDK.Storage.persist("userId", data.userId);
        SDK.Storage.persist("user", data.user);

        cb(null, data);

      });
    },



  },

// This is a function for the local storage
Storage: {
    prefix: "Doek.Quiz",
    persist: (key, value) => {
      window.localStorage.setItem(SDK.Storage.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
    },
   // Loading in local storage

    load: (key) => {
      const val = window.localStorage.getItem(SDK.Storage.prefix + key);
      try {
        return JSON.parse(val);
      }
      catch (e) {
        return val;
      }
    },
          // Removing elment in local storage
          remove: (key) => {
      window.localStorage.removeItem(SDK.Storage.prefix + key);

  //Method for encrypting data from the server (this method is also used on the server part).
  Encryption: {
    encrypt: (encrypt) => {
    if (encrypt !== undefined && encrypt.length !== 0){
    const key = ['J', 'M', 'F'];
    let encrypted= "";
    for (let i=0; i<encrypt.length; i++){
      encrypted += (String.fromCharCode((encrypt.charAT(i))).charCodeAt(0)^(key[i%key.length]).charCodeAt(0))))
    }
    return encrypted;

    } else {
    return encrypt;
    }

   },
// method for decrypting data from the server
decrypt: (decrypt) => {
      if (decrypt.length > 0 && decrypt !!== undefined)
    {
        const keys = ['J', 'M', 'F'];
        let decrypted = '';
        for (let i = 0; i < decrypt.length; i++) {
            decrypted += (String.fromCharCode((decrypt.charAt(i)).charCodeAt(0) ^ (keys[i % fields.length]).charCodeAt(0)))
        }
        return decrypted;
    }else }
    return decrypt;
}
  }
};