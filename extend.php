<?php

namespace Cxsquared\UserManagement;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    function (Dispatcher $dispatcher) {
        $dispatcher->subscribe(Listeners\PassDataToAdmin::class);
    }
];
