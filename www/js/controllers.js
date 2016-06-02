angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicLoading, $compile, $ionicHistory, $http, $firebaseArray) {

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

   $scope.myHome = function() {
 $location.path( '/login');
  };

  $scope.settings = {
    enableFriends: true
  };
    $scope.departments = [];
     $scope.behaviors = [];
$scope.Initialize1 = function() {
   
 var refr = new Firebase("https://behaviourbased.firebaseio.com");
   refr.authWithPassword({
  "email": "s.harshita.89@gmail.com",
  "password": "Harshita24"
}, function(error, authData) {
  if (error) {
   // alert("Login Failed!", error);
  } else {
   // alert("Authenticated successfully with payload:", authData);
  }
});
var ref1 = refr.child("locations");

var users1 = $firebaseArray(ref1);
users1.$loaded()
    .then(function(){
        angular.forEach(users1, function(user1) {
            $scope.departments.push(user1.name);
        })
    });

    var ref2 = refr.child("behaviors");

var users2 = $firebaseArray(ref2);
users2.$loaded()
    .then(function(){
        angular.forEach(users2, function(user2) {
            $scope.behaviors.push(user2.name);
        })
    });
// typeArray.$loaded().then( function (data) {
  
//             $scope.department = data;
//             var a = $scope.department.name ;
//             alert(a);
//         });
};

  $scope.myJson = {
        globals: {
            shadow: false,
            fontFamily: "Verdana",
            fontWeight: "100"
        },
        type: "pie",
        backgroundColor: "#fff",

        legend: {
            layout: "x5",
            position: "50%",
            borderColor: "transparent",
            marker: {
                borderRadius: 10,
                borderColor: "transparent"
            }
        },
        tooltip: {
            text: "%v requests"
        },
        plot: {
            refAngle: "-90",
            borderWidth: "0px",
            valueBox: {
                placement: "in",
                text: "%npv %",
                fontSize: "15px",
                textAlpha: 1,
            }
        },
        series: [{
            text: "Safely Done",
            values: [1],
            backgroundColor: "#FF3399 #FF3399",
        }, {
            text: "Unsafely Done",
            values: [2],
            backgroundColor: "#CCFF66 #CCFF66"
        }, {
            text: "Unobserved",
            values: [4],
            backgroundColor: "#000066 #000066"
        }]
    };




})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $ionicHistory, $http, $firebaseArray) {

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

   $scope.myHome = function() {
 $location.path( '/login');
  };

  $scope.settings = {
    enableFriends: true
  };
    $scope.departments = [];
     $scope.behaviors = [];
$scope.Initialize = function() {

 var refr = new Firebase("https://behaviourbased.firebaseio.com");
   refr.authWithPassword({
  "email": "s.harshita.89@gmail.com",
  "password": "Harshita24"
}, function(error, authData) {
  if (error) {
   // alert("Login Failed!", error);
  } else {
   // alert("Authenticated successfully with payload:", authData);
  }
});
var ref1 = refr.child("locations");

var users1 = $firebaseArray(ref1);
users1.$loaded()
    .then(function(){
        angular.forEach(users1, function(user1) {
            $scope.departments.push(user1.name);
        })
    });

    var ref2 = refr.child("behaviors");

var users2 = $firebaseArray(ref2);
users2.$loaded()
    .then(function(){
        angular.forEach(users2, function(user2) {
            $scope.behaviors.push(user2.name);
        })
    });
// typeArray.$loaded().then( function (data) {
  
//             $scope.department = data;
//             var a = $scope.department.name ;
//             alert(a);
//         });
};
   $scope.data = {};
$scope.submit = function()
{
 var date = $scope.data.date ;
    var m = date.getMonth();
    // alert(m);
    var d = date.getDate();
    // alert(d);
    var y = date.getFullYear();
 var st = $scope.data.safety;
 var comments = $scope.data.comments;

 var refr = new Firebase("https://behaviourbased.firebaseio.com");
   refr.authWithPassword({
  "email": "s.harshita.89@gmail.com",
  "password": "Harshita24"
}, function(error, authData) {
  if (error) {
    //alert("Login Failed!", error);
  } else {
    //alert("Authenticated successfully with payload:", authData);
  }
});

if ($scope.data.optionSelected == "Field Services WA")
{
  var r = refr.child("Field Services WA");
  if ($scope.data.option == "Chemical")
  {
    var rc = r.child("Chemical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option == "Motion")
  {
    var rc = r.child("Motion");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }

  else if ($scope.data.option  == "Mechanical")
  {
    var rc = r.child("Mechanical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option  == "Electrical")
  {
    var rc = r.child("Electrical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Pressure")
  {
    var rc = r.child("Pressure");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Temperature")
  {
    var rc = r.child("Temperature");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Biological")
  {
    var rc = r.child("Biological");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  
    else if ($scope.data.option  == "Radiation")
  {
    var rc = r.child("Radiation");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Sand")
  {
    var rc = r.child("Sand");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Gravity")
  {
    var rc = r.child("Gravity");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  

}

if ($scope.data.optionSelected == "Field Services - NSW")
{
  var r = refr.child("Field Services - NSW");
  if ($scope.data.option == "Chemical")
  {
    var rc = r.child("Chemical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option == "Motion")
  {
    var rc = r.child("Motion");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }

  else if ($scope.data.option  == "Mechanical")
  {
    var rc = r.child("Mechanical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option  == "Electrical")
  {
    var rc = r.child("Electrical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Pressure")
  {
    var rc = r.child("Pressure");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Temperature")
  {
    var rc = r.child("Temperature");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Biological")
  {
    var rc = r.child("Biological");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  
    else if ($scope.data.option  == "Radiation")
  {
    var rc = r.child("Radiation");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Sand")
  {
    var rc = r.child("Sand");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else ($scope.data.option  == "Gravity")
  {
    var rc = r.child("Gravity");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  

}
if ($scope.data.optionSelected == "Field Services - Vic")
{
  var r = refr.child("Field Services - Vic");
  if ($scope.data.option == "Chemical")
  {
    var rc = r.child("Chemical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option == "Motion")
  {
    var rc = r.child("Motion");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }

  else if ($scope.data.option  == "Mechanical")
  {
    var rc = r.child("Mechanical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option  == "Electrical")
  {
    var rc = r.child("Electrical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Pressure")
  {
    var rc = r.child("Pressure");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Temperature")
  {
    var rc = r.child("Temperature");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Biological")
  {
    var rc = r.child("Biological");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  
    else if ($scope.data.option  == "Radiation")
  {
    var rc = r.child("Radiation");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Sand")
  {
    var rc = r.child("Sand");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else ($scope.data.option  == "Gravity")
  {
    var rc = r.child("Gravity");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  

}
if ($scope.data.optionSelected == "Field Services - SA")
{
  var r = refr.child("Field Services - SA");
  if ($scope.data.option == "Chemical")
  {
    var rc = r.child("Chemical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option == "Motion")
  {
    var rc = r.child("Motion");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }

  else if ($scope.data.option  == "Mechanical")
  {
    var rc = r.child("Mechanical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option  == "Electrical")
  {
    var rc = r.child("Electrical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Pressure")
  {
    var rc = r.child("Pressure");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Temperature")
  {
    var rc = r.child("Temperature");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Biological")
  {
    var rc = r.child("Biological");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  
    else if ($scope.data.option  == "Radiation")
  {
    var rc = r.child("Radiation");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Sand")
  {
    var rc = r.child("Sand");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else ($scope.data.option  == "Gravity")
  {
    var rc = r.child("Gravity");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
}

if ($scope.data.optionSelected == "Gepps Cross - Manufacturing")
{
  var r = refr.child("Gepps Cross - Manufacturing");
  if ($scope.data.option == "Chemical")
  {
    var rc = r.child("Chemical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option == "Motion")
  {
    var rc = r.child("Motion");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }

  else if ($scope.data.option  == "Mechanical")
  {
    var rc = r.child("Mechanical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option  == "Electrical")
  {
    var rc = r.child("Electrical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Pressure")
  {
    var rc = r.child("Pressure");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Temperature")
  {
    var rc = r.child("Temperature");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Biological")
  {
    var rc = r.child("Biological");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  
    else if ($scope.data.option  == "Radiation")
  {
    var rc = r.child("Radiation");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Sand")
  {
    var rc = r.child("Sand");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else ($scope.data.option  == "Gravity")
  {
    var rc = r.child("Gravity");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  

}
if ($scope.data.optionSelected == "Gepps Cross - DC")
{
  var r = refr.child("Gepps Cross - DC");
  if ($scope.data.option == "Chemical")
  {
    var rc = r.child("Chemical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option == "Motion")
  {
    var rc = r.child("Motion");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }

  else if ($scope.data.option  == "Mechanical")
  {
    var rc = r.child("Mechanical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option  == "Electrical")
  {
    var rc = r.child("Electrical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Pressure")
  {
    var rc = r.child("Pressure");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Temperature")
  {
    var rc = r.child("Temperature");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Biological")
  {
    var rc = r.child("Biological");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  
    else if ($scope.data.option  == "Radiation")
  {
    var rc = r.child("Radiation");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Sand")
  {
    var rc = r.child("Sand");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else ($scope.data.option  == "Gravity")
  {
    var rc = r.child("Gravity");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  

}
if ($scope.data.optionSelected == "Eagle Farm - Manufacturing")
{
  var r = refr.child("Eagle Farm - Manufacturing");
  if ($scope.data.option == "Chemical")
  {
    var rc = r.child("Chemical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option == "Motion")
  {
    var rc = r.child("Motion");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }

  else if ($scope.data.option  == "Mechanical")
  {
    var rc = r.child("Mechanical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option  == "Electrical")
  {
    var rc = r.child("Electrical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Pressure")
  {
    var rc = r.child("Pressure");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Temperature")
  {
    var rc = r.child("Temperature");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Biological")
  {
    var rc = r.child("Biological");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  
    else if ($scope.data.option  == "Radiation")
  {
    var rc = r.child("Radiation");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Sand")
  {
    var rc = r.child("Sand");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else ($scope.data.option  == "Gravity")
  {
    var rc = r.child("Gravity");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
}
if ($scope.data.optionSelected == "Eagle Farm - DC")
{
  var r = refr.child("Eagle Farm - DC");
  if ($scope.data.option == "Chemical")
  {
    var rc = r.child("Chemical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option == "Motion")
  {
    var rc = r.child("Motion");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }

  else if ($scope.data.option  == "Mechanical")
  {
    var rc = r.child("Mechanical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
    else if ($scope.data.option  == "Electrical")
  {
    var rc = r.child("Electrical");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Pressure")
  {
    var rc = r.child("Pressure");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Temperature")
  {
    var rc = r.child("Temperature");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Biological")
  {
    var rc = r.child("Biological");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  
    else if ($scope.data.option  == "Radiation")
  {
    var rc = r.child("Radiation");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else if ($scope.data.option  == "Sand")
  {
    var rc = r.child("Sand");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
      else ($scope.data.option  == "Gravity")
  {
    var rc = r.child("Gravity");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
  

} 
};


});
