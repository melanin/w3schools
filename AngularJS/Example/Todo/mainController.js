app.controller("mainController", function($scope)
{
    var MakeTodo = function(__todo, __done)
    {
        this.todo = __todo;
        this.done = __done;
    };
    
    $scope._list = [];
    $scope._todo = "";
    
    $scope.Add = function()
    {
        var newTodo = new MakeTodo($scope._todo, false);
        
        $scope._list.push(newTodo);
        $scope._todo = "";
    };
    
    $scope.Remove = function()
    {
        // var beforeList = $scope._list;
        // $scope._list = [];
        // angular.forEach(beforeList, function(x)
        //     {
        //         if(!x.done)
        //         {
        //             $scope._list.push(x);
        //         }                
        //     }
        // );
        
        for(var i=0; i<$scope._list.length; i++)
        {
            if($scope._list[i].done)
            {
                $scope._list.splice(i, 1);
            }
        }
    };
});
