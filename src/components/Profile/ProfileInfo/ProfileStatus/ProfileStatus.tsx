import styles from "./ProfileStatus.module.scss";
import { Input } from "antd";
import { Component } from "react";

export interface ProfileStatusProps {
  authUserId: number | null;
  profileUserId: number | null;
  status: string;
  updateUserStatus: (status: string) => void;
}

export default class ProfileStatus extends Component<ProfileStatusProps, any> {
  constructor(props: any) {
    super(props);
    this.state = { status: this.props.status, editMode: false };
  }

  componentDidUpdate(prevProps: ProfileStatusProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  activateEditMode = () => {
    if (
      this.props.authUserId &&
      this.props.profileUserId &&
      this.props.authUserId === this.props.profileUserId
    ) {
      this.setState({ editMode: true });
    }
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateUserStatus(this.state.status);
  };

  handleStatusInputFocus = (e: { target: { select: () => void } }) => {
    e.target.select();
  };

  handleStatusChange = (e: { target: { value: any } }) => {
    this.setState({ status: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <Input
              autoFocus={true}
              onFocus={this.handleStatusInputFocus}
              onBlur={this.deactivateEditMode}
              onChange={this.handleStatusChange}
              value={this.state.status}
            />
          </div>
        ) : (
          <div className={styles.status__text}>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status && this.props.status.length > 0
                ? this.props.status
                : "There is no status"}
            </span>
          </div>
        )}
      </div>
    );
  }
}
