import app from 'flarum/app';
import Page from 'flarum/components/Page';
import User from 'flarum/models/User';
import username from 'flarum/helpers/username';

export default class SettingsPage extends Page {
    init() {
        super.init();
    }

    view() {
        const users = app.forum.attribute("cxsquared-user-management.data")['users'].map(u => new User(u, app.store));

        return (
            <div className="UserPage container">
                <div className="Headers">
                    <legend>
                        Username 
                    </legend>
                    <legend>
                        Discussions
                    </legend>
                    <legend>
                        Comments
                    </legend>
                </div>
                {users.map((u, i) => (
                    <div className={`UserRow ${i % 2 === 0 ? "Even" : "Odd"}`}>
                        <div className="Number">{i + 1}</div>
                        <div className="UserData">
                            <a href={`${app.forum.attribute('baseUrl')}/u/${u.data['username']}`} target="_blank">{u.data['username']}</a>
                        </div>
                        <div className="UserData">
                            {u.data['discussion_count']}
                        </div>
                        <div className="UserData">
                            {u.data['comment_count']}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
