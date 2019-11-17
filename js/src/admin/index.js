import app from 'flarum/app';
import AddSettingsPage from './AddSettingsPage';

app.initializers.add('cxsquared-user-management', () => {
    AddSettingsPage();
});

