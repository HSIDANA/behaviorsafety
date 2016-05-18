angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

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
            text: "Safely done",
            values: [1],
            backgroundColor: "#FA6E6E #FA9494",
        }, {
            text: "Unsafely done",
            values: [2],
            backgroundColor: "#F1C795 #feebd2"
        }, {
            text: "Unobserved",
            values: [4],
            backgroundColor: "#FDAA97 #FC9B87"
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
    alert("Login Failed!", error);
  } else {
    alert("Authenticated successfully with payload:", authData);
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
alert(st);
 var refr = new Firebase("https://behaviourbased.firebaseio.com");
   refr.authWithPassword({
  "email": "s.harshita.89@gmail.com",
  "password": "Harshita24"
}, function(error, authData) {
  if (error) {
    alert("Login Failed!", error);
  } else {
    alert("Authenticated successfully with payload:", authData);
  }
});
if ($scope.data.optionSelected == "Gepps CX")
{
  var r = refr.child("GeppsCross");
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
    else if ($scope.data.option == "General")
  {
    var rc = r.child("General");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }

  else ($scope.data.option  == "Plant")
  {
    var rc = r.child("Plant");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }
}

if ($scope.data.optionSelected == "WA DC")
{
  var r = refr.child("WADC");
  if (data.option == "Chemical")
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
    else if ($scope.data.option  == "General")
  {
    var rc = r.child("General");
    rc.push({
      month:m,
      date: d,
      year:y,
      comment: comments,
      status: st,

    })
  }

  else ($scope.data.option  == "Plant")
  {
    var rc = r.child("Plant");
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
