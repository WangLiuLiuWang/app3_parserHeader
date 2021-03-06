"use strict";
module.exports = function(req,res){
	var header = req.headers;
	var language = /^[a-z]+-[A-Z]+/.exec(header["accept-language"]);
	var sys = header["user-agent"].split(" (",2);
	if(sys.length == 1 && sys[0] == ""){
		sys = sys[0];
	}else{
		sys = sys[1].split(") ")[0];
	}
	

	if(language){
		language = language[0]
	}
	var json = {
		"ip":header["x-forwarded-for"],
		"language":language,
		"operating System":sys
	};
	res.json(json);
}