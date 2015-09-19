<?php
$play_store_url = "https://play.google.com/store/apps/details?id=de.fau.cs.mad.fablab.android";
$itunes_url = "https://itunes.apple.com/de/app/fau-fablab/id1037263096";

function check_device($dev) {
	# if the visiting device is dev, return true
    return ( isset($_GET["dev"]) && strtolower($_GET["dev"]) == strtolower($dev) ) ||
             strpos($_SERVER['HTTP_USER_AGENT'], $dev);
}

function redirect_devices() {
	if ( check_device("Android") ) {
		global $play_store_url;
		header( 'Location: ' . $play_store_url );
		die( 'Redirecting to <a href="' . $play_store_url . '">' . $play_store_url . '</a>' );
	} elseif ( check_device("iPhone") || check_device("iPod") || check_device("iPad") ) {
		global $itunes_url;
		header( 'Location:' . $itunes_url );
		die( 'Redirecting to <a href="' . $itunes_url . '">' . $itunes_url . '</a>' );
	}
}

# Redirect devices to their stores - if available
redirect_devices();
# Otherwise redirect to index.html
header( 'Location: index.html' );
die( 'Redirecting to <a href="index.html">index.html</a>' );
