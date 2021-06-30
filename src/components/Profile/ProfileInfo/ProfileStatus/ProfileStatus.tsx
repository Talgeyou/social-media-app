import styles from "./ProfileStatus.module.scss";
import { Input, Typography } from "antd";
import { useEffect, useState } from "react";
import React from "react";

interface Props {
  authUserId: number | null;
  profileUserId: number | null;
  status: string;
  updateUserStatus: (status: string) => void;
}

const ProfileStatus = (props: Props) => {
  const [editMode, setEditMode] = useState(false);

  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const handleFocus = (e: { currentTarget: { select: () => void } }) => {
    e.currentTarget.select();
  };

  const handleBlur = () => {
    setEditMode(false);
    if (status !== props.status) {
      props.updateUserStatus(status);
    }
  };

  return (
    <div>
      {editMode ? (
        <div>
          <Input
            autoFocus={true}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          />
        </div>
      ) : (
        <div
          className={styles.status__text}
          onDoubleClick={() => {
            if (props.authUserId === props.profileUserId) {
              setEditMode(true);
            }
          }}
        >
          <span>
            {props.status && props.status.length > 0
              ? props.status
              : "There is no status"}
          </span>
          <span>
            {props.authUserId === props.profileUserId ? (
              <Typography.Text type={"secondary"}>
                {"    Double click to change it"}
              </Typography.Text>
            ) : (
              ""
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
