import app from 'flarum/app';
import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';
import SettingsPage from './components/SettingsPage';

const userRouteId = 'cxsquared-user-management';

export default function() {
    app.routes[userRouteId] = {
        path: '/users',
        component: SettingsPage.component()
    };

    app.extensionSettings[userRouteId] = () => m.route(app.route(userRouteId));

    extend(AdminNav.prototype, 'items', items => {
        items.add(
            userRouteId,
            AdminLinkButton.component({
                href: app.route(userRouteId),
                icon: 'fas fa-users',
                children: 'Users',
                description: "Manage your users."
            })
        );
    });
}
