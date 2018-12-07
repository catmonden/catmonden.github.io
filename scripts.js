var isopen = false;
function toggleNav() {
	if (!isopen) {
		document.getElementById("sidenavigation").style.left = "0px";
		document.getElementById("sidenavigation").style.boxShadow = "10px 0px 20px 0px rgba(0,0,0,0.5)";
		isopen = true;
	} else {
		document.getElementById("sidenavigation").style.left = "-300px";
		document.getElementById("sidenavigation").style.boxShadow = "none";
		isopen = false;
	}
}