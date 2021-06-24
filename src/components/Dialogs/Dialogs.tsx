import { Card, Layout, List } from "antd";
import Title from "antd/lib/typography/Title";
import { Link, Route } from "react-router-dom";
import styles from "./Dialogs.module.scss";
import React from "react";
import Dialog from "./Dialog/Dialog";

export interface DialogsProps {
  dialogs?: Array<{
    id: number;
    user: {
      id: number;
      name: string;
      imgUrl?: string;
    };
    newMessageText: string;
    messages?: Array<{
      id: number;
      author: {
        id: number;
        name: string;
        imgUrl?: string;
      };
      body: string;
    }>;
  }>;
  updateNewMessageText: (dialogId: number, messageText: string) => void;
  sendMessage: (
    dialogId: number,
    author: { id: number; name: string; imgUrl?: string }
  ) => void;
}

const Dialogs = (props: DialogsProps) => {
  if (props.dialogs) {
    return (
      <Layout>
        <div className={styles.dialogsWrapper}>
          <List
            grid={{ gutter: 16, column: 1 }}
            itemLayout="horizontal"
            dataSource={props.dialogs}
            renderItem={(dialog) => {
              return (
                <Link to={`/dialogs/${dialog.user.id}`}>
                  <List.Item>
                    <Card title={dialog.user.name}>
                      {dialog.messages && dialog.messages.length > 0
                        ? dialog.messages[0].body
                        : ""}
                    </Card>
                  </List.Item>
                </Link>
              );
            }}
          />
          <div>
            {props.dialogs.map((dialog) => {
              return (
                <Route
                  exact
                  path={`/dialogs/${dialog.user.id}`}
                  render={() => (
                    <Dialog
                      dialog={dialog}
                      updateNewMessageText={props.updateNewMessageText}
                      sendMessage={props.sendMessage}
                    />
                  )}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
  return <Title>There is no dialogs</Title>;
};

export default Dialogs;
