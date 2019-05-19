function mynavTabAjaxDone(json){
	DWZ.ajaxDone(json);
	if (json.statusCode == DWZ.statusCode.ok){
		if (json.navTabId){ //把指定navTab页面标记为需要“重新载入”。注意navTabId不能是当前navTab页面的
			navTab.reloadFlag(json.navTabId);
		} else { //重新载入当前navTab页面
			var $pagerForm = $("#pagerForm", navTab.getCurrentPanel());
			var args = $pagerForm.size()>0 ? $pagerForm.serializeArray() : {}
			navTabPageBreak(args, json.rel);
		}
		if ("closeCurrent" == json.callbackType) {
			$.pdialog.closeCurrent();
		}
	}
}

function mydialogAjaxDone(json){
	DWZ.ajaxDone(json);
	if (json.statusCode == DWZ.statusCode.ok){
		if (json.navTabId){
			navTab.reload(json.forwardUrl, {navTabId: json.navTabId});
		} else if (json.rel) {
			var $pagerForm = $("#pagerForm", navTab.getCurrentPanel());
			var args = $pagerForm.size()>0 ? $pagerForm.serializeArray() : {}
			navTabPageBreak(args, json.rel);
		}
		if ("closeCurrent" == json.callbackType) {
			$.pdialog.closeCurrent();
		}
	}
}
/*在对话框中操作数据，并刷新对话框*/
function dialogAjaxDoneFather(json) {
  DWZ.ajaxDone(json);
  if (json.statusCode == DWZ.statusCode.ok) {
    if (json.navTabId) {
      var dialog = $("body").data(json.navTabId);
      $.pdialog.reload(dialog.data("url"), { data: {}, dialogId: json.navTabId, callback: null })
    }
    if ("closeCurrent" == json.callbackType) {
      $.pdialog.closeCurrent();
    }
  }
}
/*在对话框中操作数据，并刷新对话框*/
function dialogAjaxDoneDel(json) {
  DWZ.ajaxDone(json);
  if (json.statusCode == DWZ.statusCode.ok) {
    if (json.navTabId) {
      var dialog = $("body").data(json.navTabId);
      $.pdialog.reload(dialog.data("url"), { data: {}, dialogId: json.navTabId, callback: null })
    }
  }
}
function myNoClosenavTabAjaxDone(json){
	DWZ.ajaxDone(json);
	if (json.statusCode == DWZ.statusCode.ok){
		if (json.navTabId){ //把指定navTab页面标记为需要“重新载入”。注意navTabId不能是当前navTab页面的
			navTab.reloadFlag(json.navTabId);
		} else { //重新载入当前navTab页面
			var $pagerForm = $("#pagerForm", navTab.getCurrentPanel());
			var args = $pagerForm.size()>0 ? $pagerForm.serializeArray() : {}
			navTabPageBreak(args, json.rel);
		}
	}
}

