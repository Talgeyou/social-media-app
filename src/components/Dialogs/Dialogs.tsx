import { Card, Layout, List } from "antd";
import Title from "antd/lib/typography/Title";
import { Link, Route } from "react-router-dom";
import styles from "./Dialogs.module.scss";
import DialogContainer from "./Dialog/DialogContainer";

export interface DialogsProps {
  dialogs: Array<any>;
  dispatch(action: any): void;
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
                <Link key={dialog.id} to={`/dialogs/${dialog.id}`}>
                  <List.Item>
                    <Card title={dialog.user.name}>
                      {dialog.messages && dialog.messages.length > 0
                        ? dialog.messages[dialog.messages.length - 1].body
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
                <Route path={`/dialogs/${dialog.id}`}>
                  <DialogContainer
                    key={dialog.id}
                    dialog={dialog}
                    dispatch={props.dispatch}
                  />
                </Route>
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
