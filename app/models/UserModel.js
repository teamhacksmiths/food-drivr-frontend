class UserModel {
  constructor(data) {
    const user = data.user;
    this.email = user.email;
    this.company = user.company;
    this.type = user.type;
    this.roleId = user["role_id"];
    this.avatar = user.avatar;
    this.notifications = user.settings.notifications;
  }
}

export default UserModel;
