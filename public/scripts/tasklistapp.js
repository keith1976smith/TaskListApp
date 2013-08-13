(function(){

    var model = {
        tasks: ko.observableArray([
            {title: "task1"}, 
            {title: "task2"}, 
            {title: "task3"}  
        ]),
        addNew: function(){
            this.tasks.push({title: $("#newtitle").val()});
        },
        deleteTask: function(thing) {
            model.tasks.remove(thing);
        }
    };
    
    $(function(){
        
        
        
    });
    
    ko.applyBindings(model);

}());