$(".addButton").click(function(){
    
    let task=$(".taskInput").val();
    if(task!=""){
        $(".tasksBox").append(`<div class="taskDiv">
            <span class="task">${task}</span>
            <button class="doneButton" value="done">done</button>
            <button class="deleteButton" value="delete">delete</button>
        </div>`);

        $(".doneButton").last().click(function(){
            
            $(this).siblings("span").toggleClass("doneTask");
            //console.log($(this).parent())
            
        });

        $(".deleteButton").last().click(function(){
            $(this).parent().fadeOut(700,function(){
                $(this).remove();
            });
        });
    }
});

$(".deleteAllButton").click(function(){
    $(".taskDiv").fadeOut(700,function(){
        $(this).remove();
    });
});