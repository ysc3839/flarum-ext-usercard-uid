'use strict';

System.register('ysc3839/flarum-ext-usercard-uid/main', ['flarum/extend', 'flarum/app', 'flarum/components/UserCard'], function (_export, _context) {
  "use strict";

  var extend, app, UserCard;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsUserCard) {
      UserCard = _flarumComponentsUserCard.default;
    }],
    execute: function () {

      app.initializers.add('ysc3839-flarum-ext-usercard-uid', function () {
        extend(UserCard.prototype, 'infoItems', function (items) {
          items.add('uid', 'UID: ' + this.props.user.id());
        });
      });
    }
  };
});