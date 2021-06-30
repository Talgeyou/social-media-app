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

const ProfileStatus = ({
  authUserId,
  profileUserId,
  status,
  updateUserStatus,
}: Props) => {
  const [editMode, setEditMode] = useState(false);

  const [newStatus, setNewStatus] = useState(status);

  useEffect(() => {
    setNewStatus(status);
  }, [status]);

  const handleFocus = (e: { currentTarget: { select: () => void } }) => {
    e.currentTarget.select();
  };

  const handleBlur = () => {
    setEditMode(false);
    if (status !== newStatus) {
      updateUserStatus(newStatus);
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
            onChange={(e) => setNewStatus(e.target.value)}
            value={newStatus}
          />
        </div>
      ) : (
        <div
          className={styles.status__text}
          onDoubleClick={() => {
            if (authUserId === profileUserId) {
              setEditMode(true);
            }
          }}
        >
          <span>
            {status && status.length > 0 ? status : "There is no status"}
          </span>
          <span>
            {authUserId === profileUserId ? (
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
