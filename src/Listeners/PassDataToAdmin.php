<?php

namespace Cxsquared\UserManagement\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\User\User;
use Illuminate\Contracts\Events\Dispatcher;

class PassDataToAdmin 
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'addData']);
    }

    public function addData(Serializing $event)
    {
        $event->attributes['cxsquared-user-management.data'] = [
            'users' => User::all()
        ];

        if($event->isSerializer(ForumSerializer::class) && $event->actor->isAdmin()) 
        {
            $event->attributes['cxsquared-user-management.data'] = [
                'users' => User::all()
            ];
        }
    }
}
