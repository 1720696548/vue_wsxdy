    
	
    /**
	 * 页面没有layui.use 无法使用layer.msg 提示框，所以我们在这里定义,拷贝到你的每一个需要分页的主页面中即可
	 */
	layui.use(['form', 'layedit', 'laydate'], function(){
	        var form = layui.form
	            ,layer = layui.layer
	            ,layedit = layui.layedit
	            ,laydate = layui.laydate;
	});
	     

	//首页
	function pagemain(pageSize,pageNum){
		if(parseInt(pageNum) != 0){
			pageNum = parseInt(0);
			window.location.href= path+'?pageSize='+pageSize+'&&pageNum='+pageNum+'&&'+search;
		}else{
			layer.msg('亲... 当前已经是第一页了!');
		}
	}
	//上一页
	function pagesye(pageSize,pageNum){
		pageNum = parseInt(pageNum);
		if(pageNum > 0){
			window.location.href= path+'?pageSize='+pageSize+'&&pageNum='+pageNum+'&&'+search;
		}else{
			layer.msg('亲... 当前已经是第一页了!');
		}
	}
	//下一页
	function pagexye(pageSize,pageNum,totalPages){
		pageNum = parseInt(pageNum) + 2;
		if(pageNum <= totalPages){
			window.location.href= path+'?pageSize='+pageSize+'&&pageNum='+pageNum+'&&totalPages='+totalPages+'&&'+search;
		}else{
			layer.msg('亲... 当前已经是最后一页了!');
		}
	}
	//末页
	function pageweiye(pageSize,pageNum,totalPages){
		if((parseInt(pageNum)+1) != parseInt(totalPages)){
			pageNum = parseInt(totalPages);
			window.location.href= path+'?pageSize='+pageSize+'&&pageNum='+pageNum+'&&'+search;
		}else{
			layer.msg('亲... 当前已经是最后一页了!');
		}
	}
	//每页数量改变监听
	function sizepage(){
		var size = $("#size").val();
		if(parseInt(size) > 0 && parseInt(size) <= 50){
			window.location.href= path+'?pageSize='+size+'&&'+search;
		}else{
			layer.msg('亲... 每页记录数不能小于0或大于50哦!');
		}
	}
	//跳到第几页数量监听
	function t_num_page(pageSize,totalPages){
		var pageNum = $("#numberPage").val();
		if(parseInt(pageNum) > 0 && parseInt(pageNum) <= totalPages){
			window.location.href= path+'?pageSize='+pageSize+'&&pageNum='+pageNum+'&&'+search;
		}else{
			layer.msg('亲... 页数不能小于零或大于总页数哦!');
		}
	}