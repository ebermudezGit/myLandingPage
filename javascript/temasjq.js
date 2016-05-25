$(document).ready(function() {
	
	$("#temaWhite").click(temaBlack);
	function temaBlack(){
		$("#link4Theme").attr('href', 'css/temaWhite.css');
	}

	$("#temaBlack").click(temaWhite);
	function temaWhite(){
		$("#link4Theme").attr('href', 'css/temaBlack.css');
	}

	//link4Theme

});