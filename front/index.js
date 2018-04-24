

$(document).on("pageshow","#home",function(){

	$.ajax({
		url: "http://127.0.0.1:8001/users/", 
		success: function(res){
	    	console.log(res);
			$("#view").html("");
			for (var i = 0; i < res.results.length; i++) {
				$("#view").append(
					"用户： " + res.results[i].username + "<br>" +
					"邮箱： " + res.results[i].email + "<br><br><br>"
				);    	
			};
		}
	});

});



$(document).on("pageshow","#list",function(){

	var global_prev = "";
	var global_next = "";


	$.ajax({
		url: "http://127.0.0.1:8001/snippets/", 
		success: function(res){
	    	console.log(res);

	    	if (res.next != null){
	    		console.log("还有数据");
	    		global_next = res.next;
	    	}else{
	    		console.log("没有啦");
	    		global_next = "";    		
	    	}

	    	if (res.previous != null){
	    		console.log("还有数据");
	    		global_prev = res.previous;
	    	}else{
	    		console.log("没有啦");
	    		global_prev = "";    		
	    	}

			$("#view_count").html(
		    		"总数：" + res.count + "<br>" +
		    		"<br><br>"
				);  

			$("#view").html("");

			for (var i = 0; i < res.results.length; i++) {

				$("#view").append(
						'<div class="gotoDetails" value="'+ res.results[i].id + '">' +
			    		"编号：" + res.results[i].id + "<br>" +
			    		"标题：" + res.results[i].title + "<br>" +
			    		"代码：" + res.results[i].code + "<br>" +
			    		"高亮显示：" + '<a href="' + res.results[i].highlight + '">点击打开</a>'  + "<br>" +
			    		"编程语言：" + res.results[i].language + "<br>" +
			    		"是否启用行号：" + ( (res.results[i].linenos) ? "已启用" : "未启用" ) + "<br>" +
			    		"创建者：" + res.results[i].owner + "<br>" +
			    		"风格：" + res.results[i].style +
			    		"<br><br>" +
			    		'</div>'
					);    	

				$(".gotoDetails").click(function(){
					console.log($(this).attr("value"));
					window.location.href = "details.html?id=" + $(this).attr("value");
				});	

			};

	}});


	$("#prev").click(function(){

		// console.log("global_prev:" + global_prev);
		// console.log("global_next:" + global_next);

		$.ajax({
			url: global_prev, 
			success: function(res){
		    	console.log(res);

		    	if (res.previous != null){
		    		console.log("还有数据");
		    		global_prev = res.previous;
		    	}else{
		    		console.log("没有啦");
		    		global_prev = "";    		
		    	}

		    	if (res.next != null){
		    		console.log("还有数据");
		    		global_next = res.next;
		    	}else{
		    		console.log("没有啦");
		    		global_next = "";    		
		    	}

				$("#view_count").html(
			    		"总数：" + res.count + "<br>" +
			    		"<br><br>"
					);  

				$("#view").html("");

				for (var i = 0; i < res.results.length; i++) {

					$("#view").append(
							'<div class="gotoDetails" value="'+ res.results[i].id + '">' +
				    		"编号：" + res.results[i].id + "<br>" +
				    		"标题：" + res.results[i].title + "<br>" +
				    		"代码：" + res.results[i].code + "<br>" +
				    		"高亮显示：" + '<a href="' + res.results[i].highlight + '">点击打开</a>'  + "<br>" +
				    		"编程语言：" + res.results[i].language + "<br>" +
				    		"是否启用行号：" + ( (res.results[i].linenos) ? "已启用" : "未启用" ) + "<br>" +
				    		"创建者：" + res.results[i].owner + "<br>" +
				    		"风格：" + res.results[i].style +
				    		"<br><br>" +
			    			'</div>'			    		
						); 

					$(".gotoDetails").click(function(){
						console.log($(this).attr("value"));
						window.location.href = "details.html?id=" + $(this).attr("value");
					});	


				};

		}});

	});



	$("#next").click(function(){

		// console.log("global_prev:" + global_prev);
		// console.log("global_next:" + global_next);

		$.ajax({
			url: global_next, 
			success: function(res){
		    	console.log(res);

		    	if (res.previous != null){
		    		console.log("还有数据");
		    		global_prev = res.previous;
		    	}else{
		    		console.log("没有啦");
		    		global_prev = "";    		
		    	}

		    	if (res.next != null){
		    		console.log("还有数据");
		    		global_next = res.next;
		    	}else{
		    		console.log("没有啦");
		    		global_next = "";    		
		    	}

				$("#view_count").html(
			    		"总数：" + res.count + "<br>" +
			    		"<br><br>"
					);  

				$("#view").html("");

				for (var i = 0; i < res.results.length; i++) {

					$("#view").append(
							'<div class="gotoDetails" value="'+ res.results[i].id + '">' +
				    		"编号：" + res.results[i].id + "<br>" +
				    		"标题：" + res.results[i].title + "<br>" +
				    		"代码：" + res.results[i].code + "<br>" +
				    		"高亮显示：" + '<a href="' + res.results[i].highlight + '">点击打开</a>'  + "<br>" +
				    		"编程语言：" + res.results[i].language + "<br>" +
				    		"是否启用行号：" + ( (res.results[i].linenos) ? "已启用" : "未启用" ) + "<br>" +
				    		"创建者：" + res.results[i].owner + "<br>" +
				    		"风格：" + res.results[i].style +
				    		"<br><br>" +
			    			'</div>'			    					    		
						);    	

					$(".gotoDetails").click(function(){
						console.log($(this).attr("value"));
						window.location.href = "details.html?id=" + $(this).attr("value");
					});					

				};

		}});

	});


});





$(document).on("pageshow","#details",function(){

	var url = window.location.href;
	console.log(url); 

	var id = url.split("?")[1].split("=")[1];
	console.log(id); 


	$.ajax({
		url: "http://127.0.0.1:8001/snippets/" + id + "/", 
		success: function(res){
	    	console.log(res);
	    	$("#view").append(
		    		"编号：" + res.id + "<br>" +
		    		"标题：" + res.title + "<br>" +
		    		"代码：" + res.code + "<br>" +
		    		"高亮显示：" + '<a href="' + res.highlight + '">点击打开</a>'  + "<br>" +
		    		"编程语言：" + res.language + "<br>" +
		    		"是否启用行号：" + ( (res.linenos) ? "已启用" : "未启用" ) + "<br>" +
		    		"创建者：" + res.owner + "<br>" +
		    		"风格：" + res.style
	    		);


	}});


});


