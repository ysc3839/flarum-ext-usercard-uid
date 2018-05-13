import { extend } from 'flarum/extend';
import app from 'flarum/app';
import UserCard from 'flarum/components/UserCard';

app.initializers.add('ysc3839-flarum-ext-usercard-uid', () => {
  extend(UserCard.prototype, 'infoItems', function(items) {
    items.add('uid', 'UID: ' + this.props.user.id());
  });
});
