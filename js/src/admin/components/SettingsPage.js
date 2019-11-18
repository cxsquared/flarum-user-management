import app from 'flarum/app';
import Page from 'flarum/components/Page';
import User from 'flarum/models/User';
import username from 'flarum/helpers/username';
import LoadingIndicator from 'flarum/components/LoadingIndicator';

export default class SettingsPage extends Page {
    init() {
        super.init();

        this.users = null;

        this.renderUsers = this.renderUsers.bind(this);

        app.store.find('users').then(users => {
            this.users = users;

            m.redraw();
        });
    }

    view() {
        return (
            <div className="UserPage container">
                {this.users ? this.renderUsers() : LoadingIndicator.component({className: 'LoadingIndicator--block'})}
            </div>
        );
    }

    renderUsers() {
        return ([
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
            </div>,
            this.users.map((u, i) => (
                <div className={`UserRow ${i % 2 === 0 ? "Even" : "Odd"}`}>
                    <div className="Number">{i + 1}</div>
                    <div className="UserData">
                        <a href={`${app.forum.attribute('baseUrl')}/u/${u.username()}`} target="_blank">{u.username()}</a>
                    </div>
                    <div className="UserData">
                        {u.discussionCount()}
                    </div>
                    <div className="UserData">
                        {u.commentCount()}
                    </div>
                </div>
            ))
        ]);
    }
}
