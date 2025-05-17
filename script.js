//your JS code here. If required.

function remove(){
	var selectList=document.getElementById('colorSelect');
	var selectedIndex = selectList.selectedIndex;
	if(selectedIndex !== -1)
	// selectList = selectList.filter(i => i !== selectedIndex)
		selectList.remove(selectedIndex);
}