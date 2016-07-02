import React, { PropTypes, Component } from 'react';
import AvatarMissing from '../../assets/images/avatar-missing.png';

class UserAvatar extends Component {
  constructor() {
    super();
    this.handleUpload = this.handleUpload.bind(this);
    this.getUniqueId = this.getUniqueId.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleUploadReceived = this.handleUploadReceived.bind(this);
    this.state = {
      cloudName: 'dnvmqsx9k',
      uploadPreset: 'ogrcupvd',
      uuid: this.getUniqueId(),
      uploadedAvatar: null
    };
  }
  getUniqueId() {
    const s4 = () =>
      Math.floor((1 + Math.random() * 0x10000)).toString(16).substring(1);
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
  }
  handleError(error) {
    const {
      handleUploadAvatar
    } = this.props;
    handleUploadAvatar({ error: "An error occured while uploading the avatar" });
  }
  handleUploadReceived(avatar) {
    const {
      handleUploadAvatar
    } = this.props;
    handleUploadAvatar({ avatar: avatar[0].url });
  }
  handleUpload() {
    const options = {
      cloud_name: this.state.cloudName,
      upload_preset: this.state.uploadPreset,
      max_files: 1
    };
    cloudinary.openUploadWidget(options, (error, results) => {
      if (error) {
        this.handleError(error)
      } else {
        this.handleUploadReceived(results);
      }
    });
  }
  render() {
    const {
      avatar,
      isEditing
    } = this.props;
    const Image = () => (
      <img
        className="user-profile__avatar"
        src={avatar || AvatarMissing}
        alt="person-avatar"
      />
    );
    const ImageWithUploader = () => (
      <a
        id={`uploader_${this.state.uuid}`}
        href="#"
        className="uploader"
        onClick={this.handleUpload}
      >
        <img
          className="user-profile__avatar"
          src={avatar || AvatarMissing}
          alt="person-avatar"
        />
      </a>
    );
    return (
      !isEditing ? <Image /> : <ImageWithUploader />
    );
  }
}

UserAvatar.propTypes = {
  avatar: PropTypes.string,
  handleUploadAvatar: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
};

export default UserAvatar;
