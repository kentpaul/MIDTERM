$(function(){
	// body...
	var $load = $("#load");



	$.ajax({
		type: 'GET',
		url: 'http://jsonplaceholder.typicode.com/todos',
		success: function(task){
			console.log("works")
			$.each(task,function(i,task){
				$load.append('<ul>'+'userId:'+task.userId+""+'id:'+task.id+""+'title:'+""+task.title+""+'completed:'+task.completed+'</ul>')
				
			});
		}
	});
});

