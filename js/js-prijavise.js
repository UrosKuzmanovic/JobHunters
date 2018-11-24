function pripremiFormu() {
	document.forms[0].ime.style.border = "1px solid grey";
	document.forms[0].prezime.style.border = "1px solid grey";
	document.forms[0].mail.style.border = "1px solid grey";
	document.getElementById('ime-greska').style.visibility = "hidden";
	document.getElementById('prezime-greska').style.visibility = "hidden";
	document.getElementById('mail-greska').style.visibility = "hidden";
	document.getElementById('pol-greska').style.visibility = "hidden";
}

function validacija() {
	var greska = false;
	pripremiFormu();

	if (!proveriradio(document.forms[0].pol)) { 
		document.getElementById('pol-greska').style.visibility = "visible";
		greska = true;
	}
	if (document.forms[0].ime.value=='') {
		document.getElementById('ime-greska').style.visibility = "visible";
		document.forms[0].ime.style.border = "1px solid red";
		document.forms[0].ime.focus();
		greska = true;
	}
	if (document.forms[0].prezime.value=='') {
		document.getElementById('prezime-greska').style.visibility = "visible";
		document.forms[0].prezime.style.border = "1px solid red";
		document.forms[0].prezime.focus();
		greska = true;
	}
	if(document.forms[0].mail.value.indexOf('@') == -1){
		document.getElementById('mail-greska').style.visibility = "visible";
		document.forms[0].mail.style.border = "1px solid red";
		document.forms[0].mail.focus();
		greska = true;
	}
	
	if (greska == true) {
		return false;
		} else {
			alert("Uspešno ste se prijavili!");
			return true;
		}
}
	
function proveriradio(dugmici) 
{
	for(var i = 0; i < dugmici.length; i++) {
		if(dugmici[i].checked) return true;
	}
	return false;
}