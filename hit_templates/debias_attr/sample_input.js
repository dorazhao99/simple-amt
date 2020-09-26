var VG = (function(vg) {

    vg.SampleInput = function() {
	var that = (this === vg ? {} : this);

	that.get = function(index) {
	    if (!index) { 
		// IMPORTANT: before submitting to AMT, make sure all image_urls are absolute paths, e.g.,
		//     "image_url": "//image-net.org/path/to/images/"
		//
		return [{'image_url': 'https://imgamtserv.cs.princeton.edu/n09869447/n09869447_4918.JPEG', 'synsets': ['bounty hunter', 'runner', 'passenger, rider', 'air traveler, air traveller', 'rider', 'none of above']},
				{'image_url': 'https://imgamtserv.cs.princeton.edu/n10560637/n10560637_2259.JPEG', 'synsets': ['scientist', 'terror, scourge, threat', 'color-blind person', 'deaf person', 'bluecoat', 'none of above']},
				{'image_url': 'https://imgamtserv.cs.princeton.edu/n10615179/n10615179_19085.JPEG', 'synsets': ['smoothie, smoothy, sweet talker, charmer', 'Tartuffe, Tartufe', 'bluffer, four-flusher', 'front man, front, figurehead, nominal head, straw man, strawman', 'forger, counterfeiter', 'none of above']},
				{'image_url': 'https://imgamtserv.cs.princeton.edu/n09610405/n09610405_3517.JPEG', 'synsets': ['commoner, common man, common person', 'terror, scourge, threat', 'color-blind person', 'deaf person', 'bluecoat', 'none of above']},
				{'image_url': 'https://imgamtserv.cs.princeton.edu/n10289766/n10289766_13381.JPEG', 'synsets': ['mandarin', 'judge, justice, jurist', 'town clerk', 'proconsul', 'recruiter', 'none of above']}];
	    }

	}
	
	return that;
    }
    
    return vg;
    
}(VG || {}));
