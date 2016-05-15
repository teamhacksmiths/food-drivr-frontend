class UserModel {
  constructor(data){
    this.email = data.email;
    this.company = data["company"];
    this.type = data["type"];
    this.role = data["role_id"];
    this.avatar = data["avatar"];
    this.notifications = data["settings"]["notifications"];
  }
}

export default UserModel;
