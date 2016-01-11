<?php
	$ceiling = 101;
	$floor = 1;
	$num = null;
	function getNumber () {
		global $ceiling, $floor;
		return floor( ($ceiling + $floor) / 2 );
	}
	function checkAnswer ($answer) {
		global $ceiling, $floor, $num;
		switch ($answer) {
			case "h": //higher
				$floor = $num;
				return true;
			case "l": //lower
				$ceiling = $num;
				return true;
			case "y": //is the number
				echo "Good Game";
				return false;
			default:
				return true;
		}
	}
	do {
		$num = getNumber();
		echo "Is this your number: [".$num."]? (y)es, No? Is it (h)igher or is it (l)ower?\n";
		$answer = trim(fgets(STDIN));
	} while (checkAnswer($answer));
	exit(0);