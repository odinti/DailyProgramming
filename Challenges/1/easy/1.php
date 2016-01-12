<?php
/**
 * Created by PhpStorm.
 * User: FeNiX
 * Date: 12-Jan-16
 * Time: 2:53 PM
 */
	$questions = [
		"What's your name?",
		"How old are you?",
		"How do you like to be called on the internet?"
	];
	$answers = [];
	for ($i  = 0; $i < count($questions); $i++) {
		echo "{$questions[$i]} ";
		$answers[$i] = trim(fgets(STDIN));
	}
	echo "Hello $answers[0], you are $answers[1], and you like to be called $answers[2].";
	exit();