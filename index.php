<?php

function flag($page, $action, $redirect) {
	$actions = ['like','strike','bell','photo'];
	$smartredirect = str_replace('~*~', '?', $redirect);
	if(page($page) && in_array($action, $actions)) {
		kirby()->impersonate('kirby');
		$page = page($page);
		$visitor = md5('v-' . kirby()->visitor()->ip());
		
		if($action == 'like') {
			if(strpos($page->likes(), $visitor) !== false) {
				if(strpos($page->likes(), $visitor) !== false) {
					$page->update(['likes' => str_replace($visitor . ';', '', $page->likes()->value())]);
				}
			}
			else {
				if(strpos($page->likes(), $visitor) === false) {
					$page->update(['likes' => $page->likes()->value() . $visitor . ';']);
				}
			}
			go($smartredirect, $code = 307); // default code '302' will show the cached flag state
		}
		elseif($action == 'strike') {
			if(strpos($page->strikes(), $visitor) !== false) {
				if(strpos($page->strikes(), $visitor) !== false) {
					$page->update(['strikes' => str_replace($visitor . ';', '', $page->strikes()->value())]);
				}
			}
			else {
				if(strpos($page->strikes(), $visitor) === false) {
					$page->update(['strikes' => $page->strikes()->value() . $visitor . ';']);
				}
			}
			go($smartredirect, $code = 307);
		}
		elseif($action == 'bell') {
			if(strpos($page->bells(), $visitor) !== false) {
				if(strpos($page->bells(), $visitor) !== false) {
					$page->update(['bells' => str_replace($visitor . ';', '', $page->bells()->value())]);
				}
			}
			else {
				if(strpos($page->bells(), $visitor) === false) {
					$page->update(['bells' => $page->bells()->value() . $visitor . ';']);
				}
			}
			go($smartredirect, $code = 307);
		}
		elseif($action == 'photo') {
			if(strpos($page->photos(), $visitor) !== false) {
				if(strpos($page->photos(), $visitor) !== false) {
					$page->update(['photos' => str_replace($visitor . ';', '', $page->photos()->value())]);
				}
			}
			else {
				if(strpos($page->photos(), $visitor) === false) {
					$page->update(['photos' => $page->photos()->value() . $visitor . ';']);
				}
			}
			go($smartredirect, $code = 307);
		}
		else {
			go(site()->errorPage());
		}
	}
	else {
		go(site()->errorPage());
	}
}

Kirby::plugin('commutron/flags', [
	'fields' => [
		'likes' => [
			'computed' => [
				'likeCount' => function () {
					return $this->model()->likeCount();
				}
			]
		],
		'strikes' => [
			'computed' => [
				'strikeCount' => function () {
					return $this->model()->strikeCount();
				}
			]
		],
		'bells' => [
			'computed' => [
				'bellCount' => function () {
					return $this->model()->bellCount();
				}
			]
		],
		'photos' => [
			'computed' => [
				'photoCount' => function () {
					return $this->model()->photoCount();
				}
			]
		]
	],
	'routes' => [
		[
			'pattern' => '(:all)/flag/(:any)/(:all)',
			'action' => function($page, $action, $redirect) {
				flag($page, $action, $redirect);
			}
		],
		[
			'pattern' => '(:all)/flag/(:any)',
			'action' => function($page, $action) {
				flag($page, $action, $page);
			}
		],
		// [  // implement this route for 'home page' use
		// 	'pattern' => 'like/(:any)',
		// 	'action' => function($action) {
		// 		like(site()->homePage(), $action);
		// 	}
		// ]
	],
	'pageMethods' => [
		'likeCount' => function() {
			$likes = $this->likes()->split(';');
			return count($likes);
		},
		'didLike' => function() {
			$likes = $this->likes()->split(';');
			return in_array(md5('v-' . kirby()->visitor()->ip()), $likes);
		},
		'strikeCount' => function() {
			$strikes = $this->strikes()->split(';');
			return count($strikes);
		},
		'didStrike' => function() {
			$strikes = $this->strikes()->split(';');
			return in_array(md5('v-' . kirby()->visitor()->ip()), $strikes);
		},
		'bellCount' => function() {
			$bells = $this->bells()->split(';');
			return count($bells);
		},
		'didBell' => function() {
			$bells = $this->bells()->split(';');
			return in_array(md5('v-' . kirby()->visitor()->ip()), $bells);
		},
		'photoCount' => function() {
			$photos = $this->photos()->split(';');
			return count($photos);
		},
		'didPhoto' => function() {
			$photos = $this->photos()->split(';');
			return in_array(md5('v-' . kirby()->visitor()->ip()), $photos);
		}
	],
]);
