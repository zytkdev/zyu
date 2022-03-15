let h = document.getElementById("h"),
history_holder = document.getElementById("history_holder"),
nh,
nhd,
count = 0 - 1;

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }

  function Send2(vID) {
	var v = vID;
	v = v.substr(v.length - 11, 11);
	var url = "watch.html?v=" + encodeURIComponent(v);
	window.location.href = url;
}

const loadHistory = () => {
    let history = getCookie("history");
    let decodedHistory = history.split(":");
    Array.from({length: decodedHistory.length}, () => {
	    nh = h.cloneNode(true);
        nhd = decodedHistory[count += 1].split("/.//../");
        nh.innerHTML = nhd[0];
        nh.onclick = function() {
           Send2(nhd[1]);
        }
        history_holder.appendChild(nh);
    }
}
