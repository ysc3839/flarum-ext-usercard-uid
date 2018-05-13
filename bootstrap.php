<?php

use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
        if ($event->isForum()) {
            $event->addAssets(__DIR__.'/js/forum/dist/extension.js');
            $event->addBootstrapper('ysc3839/flarum-ext-usercard-uid/main');
        }
    });
};
