import { Card, Layout, List } from "antd";
import { Link, Redirect, Route } from "react-router-dom";
import styles from "./Dialogs.module.scss";
import DialogContainer from "./Dialog/DialogContainer";

export interface DialogsProps {
  dialogs: Array<any>;
  isAuth: boolean;
}

const Dialogs = ({ dialogs, isAuth }: DialogsProps) => {
  if (!isAuth) {
    return <Redirect to={"/login"} />;
  }

  return (
    <Layout>
      <div className={styles.dialogsWrapper}>
        <List
          grid={{ gutter: 16, column: 1 }}
          itemLayout="horizontal"
          dataSource={dialogs}
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
        <Route path={`/dialogs/:id`} component={DialogContainer} />
      </div>
    </Layout>
  );
};

export default Dialogs;
